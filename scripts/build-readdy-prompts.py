#!/usr/bin/env python3
"""把 Readdy 模板 prompt 素材包抽取成站点用的数据。

数据来源：用户整理的 `11-website-prompt-collection-final.zip`
（11 个模板，每个模板 6 个 md + manifest.json）。

这个脚本做三件事：
1. 从每个模板的 manifest.json 取「预览链接」
2. 从 01-design-foundation.md / 02-master-reconstruction-prompt.md 取两个整篇 prompt
3. 从 03-section-prompts.md 取分模块 prompt（编号 + 标题 + 正文）

产物：
- public/readdy-prompts/<slug>.txt         完整可复制内容，供浮层「复制全部」按需拉取
- content/readdyTemplatePrompts.generated.ts  浮层渲染用的精简数据（只内联前几段）

注意：素材包的文档格式并不统一，解析必须兼容：
- 段标题分隔符有 `—`（em dash）和 `·`（middle dot）两种
- 段编号前缀有 S01 / SEC-01 / HOME-01 / GLOBAL-01 / PROJECT-01 / DENTAL-01 六种
- 代码围栏有 ``` 和 ~~~ 两种
- 02 文档在部分模板里被拆成十几个小块，需要按出现顺序拼接
- 01 文档在部分模板里前面还有 token 表，真正的 prompt 在最后一个含 "Prompt" 的标题之后

用法：
    python scripts/build-readdy-prompts.py [素材包解压目录]
"""

from __future__ import annotations

import json
import os
import re
import sys

# 素材包解压后的目录。默认指向临时解压位置，可用命令行参数覆盖。
DEFAULT_SOURCE = r"C:/Users/jiaji/AppData/Local/Temp/readdy-prompts/11-website-prompt-collection"

# 站点项目根目录（本脚本所在目录的上一级）
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_OUT = os.path.join(ROOT, "public", "readdy-prompts")
TS_OUT = os.path.join(ROOT, "content", "readdyTemplatePrompts.generated.ts")

# 浮层里内联展示几段（完整内容走 public 下的 txt，不内联进 bundle）
PREVIEW_SECTION_COUNT = 3

# 素材包目录名 -> 站点的 slug
SLUG_MAP = {
    "01-Modern-AI-Automation-Consultancy": "modern-ai-automation-consultancy",
    "02-Residential-Remodeling-Design-Build": "residential-remodeling-and-design-build",
    "03-Photography-Studio-Portfolio": "photography-studio-and-portfolio",
    "04-Outdoor-Gear-Store": "outdoor-gear-store",
    "05-Fine-Jewelry-Ecommerce-Store": "fine-jewelry-ecommerce-store",
    "06-Modern-Green-Solar-Energy-Company": "modern-green-solar-energy-company",
    "07-Warm-Veterinary-Clinic": "warm-veterinary-clinic",
    "08-Premium-Private-Dental-Clinic": "premium-private-dental-clinic",
    "09-Photography-Studio-Motion-Gallery": "photography-studio-motion-gallery",
    "10-Alpine-Retreat": "alpine-retreat",
    "11-Premium-HVAC-Services": "premium-hvac-services",
}

# 代码围栏：``` 或 ~~~ 开头，配对的同类型围栏结束。捕获围栏内正文。
FENCE_BLOCK = re.compile(
    r"^(?:`{3,}|~{3,})[^\n]*\n(.*?)\n(?:`{3,}|~{3,})[ \t]*$",
    re.M | re.S,
)

# 分模块 prompt 的段落标题，例如：
#   ## S01 — Global Header
#   ## SEC-02 — Three-Scene HVAC Hero
#   ## HOME-01 · Hero State Gallery
SECTION_HEAD = re.compile(r"^##\s*([A-Z]+-?\d+)\s*[—·–]\s*(.+?)\s*$", re.M)

# 01 / 02 文档里“真正可复制 prompt”的起始标题
PROMPT_HEAD = re.compile(r"^#{2,4}\s*.*Prompt.*$", re.M | re.I)


def read(path: str) -> str:
    with open(path, encoding="utf-8") as handle:
        return handle.read()


def fence_blocks(text: str, start: int = 0) -> list[str]:
    """按出现顺序取出一段文本里的所有围栏正文。"""
    return [m.group(1).strip() for m in FENCE_BLOCK.finditer(text, start)]


def whole_prompt(text: str) -> str:
    """取 01 / 02 文档里的整篇可复制 prompt。

    优先从最后一个含 "Prompt" 的标题之后取，这样可以跳过前面的 token 表；
    如果文档里没有这样的标题（例如 02 被拆成多个小节），就取全文所有围栏块并按顺序拼接。
    """
    heads = list(PROMPT_HEAD.finditer(text))
    start = heads[-1].end() if heads else 0
    blocks = fence_blocks(text, start)
    if not blocks and start:
        # 标题之后没有围栏，退回全文
        blocks = fence_blocks(text, 0)
    return "\n\n".join(blocks).strip()


def section_prompts(text: str) -> list[dict[str, str]]:
    """把 03-section-prompts.md 拆成 [{id, title, body}]。"""
    heads = list(SECTION_HEAD.finditer(text))
    sections: list[dict[str, str]] = []
    for index, head in enumerate(heads):
        end = heads[index + 1].start() if index + 1 < len(heads) else len(text)
        chunk = text[head.end():end]
        body = "\n\n".join(fence_blocks(chunk)).strip()
        if not body:
            continue
        sections.append({
            "id": head.group(1),
            "title": head.group(2).strip(),
            "body": body,
        })
    return sections


def divider(label: str) -> str:
    line = "=" * 60
    return f"{line}\n{label}\n{line}"


def build_full_text(
    name: str,
    preview_url: str,
    design_foundation: str,
    master_prompt: str,
    sections: list[dict[str, str]],
) -> str:
    """拼出「复制全部」要用的完整文本。"""
    parts: list[str] = [
        f"{name} — 完整重建 Prompt",
        f"模板预览：{preview_url}",
        "",
    ]

    if design_foundation:
        parts += [divider("1. 设计基础 Prompt"), "", design_foundation, ""]

    if master_prompt:
        parts += [divider("2. 整站重建 Prompt"), "", master_prompt, ""]

    if sections:
        parts += [divider(f"3. 分模块 Prompt（{len(sections)} 段）"), ""]
        for section in sections:
            parts += [f"{section['id']} — {section['title']}", "", section["body"], ""]

    return "\n".join(parts).rstrip() + "\n"


def ts_string(value: str) -> str:
    """输出合法的 TS 双引号字符串字面量。"""
    return json.dumps(value, ensure_ascii=False)


def main() -> int:
    source = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SOURCE

    if not os.path.isdir(source):
        print(f"找不到素材目录：{source}")
        print("请先解压 11-website-prompt-collection-final.zip，并把解压目录作为参数传入。")
        return 1

    os.makedirs(PUBLIC_OUT, exist_ok=True)

    entries: list[dict] = []
    problems: list[str] = []

    for folder in sorted(SLUG_MAP):
        folder_path = os.path.join(source, folder)
        slug = SLUG_MAP[folder]

        manifest_path = os.path.join(folder_path, "manifest.json")
        overview_path = os.path.join(folder_path, "00-project-overview.md")
        design_path = os.path.join(folder_path, "01-design-foundation.md")
        master_path = os.path.join(folder_path, "02-master-reconstruction-prompt.md")
        section_path = os.path.join(folder_path, "03-section-prompts.md")

        for path in (manifest_path, design_path, master_path, section_path):
            if not os.path.isfile(path):
                problems.append(f"{folder} 缺少 {os.path.basename(path)}")

        manifest = json.loads(read(manifest_path))
        name = manifest.get("templateName") or folder
        preview_url = (manifest.get("previewUrl") or "").strip()

        if not preview_url.startswith("http"):
            problems.append(f"{folder} 没有可用的预览链接")

        design_foundation = whole_prompt(read(design_path))
        master_prompt = whole_prompt(read(master_path))
        sections = section_prompts(read(section_path))

        if not sections:
            problems.append(f"{folder} 没解析出分模块 prompt")
        if not master_prompt:
            problems.append(f"{folder} 没解析出整站重建 prompt")

        full_text = build_full_text(
            name, preview_url, design_foundation, master_prompt, sections
        )

        txt_name = f"{slug}.txt"
        with open(os.path.join(PUBLIC_OUT, txt_name), "w", encoding="utf-8") as handle:
            handle.write(full_text)

        entries.append({
            "slug": slug,
            "name": name,
            "previewUrl": preview_url,
            "previewSections": sections[:PREVIEW_SECTION_COUNT],
            "sectionCount": len(sections),
            "fullPromptPath": f"/readdy-prompts/{txt_name}",
            "txtBytes": len(full_text.encode("utf-8")),
            "masterChars": len(master_prompt),
            "designChars": len(design_foundation),
        })

        print(
            f"  {slug:38s} 段数={len(sections):>2}  "
            f"重建={len(master_prompt):>6}字  设计={len(design_foundation):>5}字  "
            f"txt={len(full_text.encode('utf-8'))/1024:>5.0f}KB"
        )

    lines: list[str] = [
        "// 由 scripts/build-readdy-prompts.py 自动生成，请勿手动编辑。",
        "// 数据来源：11-website-prompt-collection-final.zip",
        "",
        "export interface ReaddyPromptSection {",
        "  /** 素材包里的段编号，例如 S01 / SEC-01 / HOME-01。 */",
        "  id: string;",
        "  /** 段标题。 */",
        "  title: string;",
        "  /** 英文 prompt 正文，换行已保留。 */",
        "  body: string;",
        "}",
        "",
        "export interface ReaddyTemplatePrompts {",
        "  slug: string;",
        "  name: string;",
        "  /** 该模板的实时预览地址。 */",
        "  previewUrl: string;",
        "  /** 浮层里局部展示的段落；完整内容见 fullPromptPath。 */",
        "  previewSections: readonly ReaddyPromptSection[];",
        "  /** 分模块 prompt 的总段数。 */",
        "  sectionCount: number;",
        "  /** 完整可复制内容的路径，用于「复制全部」。 */",
        "  fullPromptPath: string;",
        "}",
        "",
        "export const readdyTemplatePrompts: Record<string, ReaddyTemplatePrompts> = {",
    ]

    for entry in entries:
        lines.append(f"  {ts_string(entry['slug'])}: {{")
        lines.append(f"    slug: {ts_string(entry['slug'])},")
        lines.append(f"    name: {ts_string(entry['name'])},")
        lines.append(f"    previewUrl: {ts_string(entry['previewUrl'])},")
        lines.append(f"    sectionCount: {entry['sectionCount']},")
        lines.append(f"    fullPromptPath: {ts_string(entry['fullPromptPath'])},")
        lines.append("    previewSections: [")
        for section in entry["previewSections"]:
            lines.append("      {")
            lines.append(f"        id: {ts_string(section['id'])},")
            lines.append(f"        title: {ts_string(section['title'])},")
            lines.append(f"        body: {ts_string(section['body'])},")
            lines.append("      },")
        lines.append("    ],")
        lines.append("  },")

    lines += ["};", ""]

    with open(TS_OUT, "w", encoding="utf-8") as handle:
        handle.write("\n".join(lines))

    total_kb = sum(e["txtBytes"] for e in entries) / 1024
    print()
    print(f"写出 {len(entries)} 个模板；完整文本合计 {total_kb:.0f} KB（放在 public，不进 bundle）")
    print(f"  public/readdy-prompts/*.txt")
    print(f"  {os.path.relpath(TS_OUT, ROOT)}")

    if problems:
        print()
        print("问题：")
        for problem in problems:
            print(f"  - {problem}")
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
