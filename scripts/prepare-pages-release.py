"""准备 EdgeOne Pages 部署目录：从 out/ 裁剪出 release-pages/。

排除项（不影响线上功能）：
- videos/   : UI Trace 视频已迁 COS（代码指向 COS URL），且单文件 110M 超 Pages 25MB 限制
- portfolio/: 冗余历史遗留（24 张 chatgpt-redesign 图片，代码零引用，实际用 /projects/chatgpt-progress/）
"""
import os
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "out")
DST = os.path.join(ROOT, "release-pages")

EXCLUDE_TOP = {"videos", "portfolio"}


def main():
    if not os.path.isdir(SRC):
        print(f"[错误] 源目录不存在: {SRC}")
        return 1

    def ignore(directory, names):
        # 只排除 out/ 顶层的 videos 和 portfolio
        rel = os.path.relpath(directory, SRC)
        if rel == ".":
            return [n for n in names if n in EXCLUDE_TOP]
        return set()

    # dirs_exist_ok=True 覆盖更新，避免删除旧目录触发安全删除拦截
    shutil.copytree(SRC, DST, ignore=ignore, dirs_exist_ok=True)

    # 把根目录的 edgeone.json（缓存策略等）复制进部署目录
    edgeone_src = os.path.join(ROOT, "edgeone.json")
    if os.path.isfile(edgeone_src):
        shutil.copy2(edgeone_src, os.path.join(DST, "edgeone.json"))
        print("[完成] 已复制 edgeone.json 到部署目录")

    # 统计
    total_size = 0
    file_count = 0
    oversize = []
    for dirpath, _dirs, files in os.walk(DST):
        for f in files:
            fp = os.path.join(dirpath, f)
            sz = os.path.getsize(fp)
            total_size += sz
            file_count += 1
            if sz > 25 * 1024 * 1024:
                oversize.append((fp, sz))

    print(f"[完成] 部署目录: {DST}")
    print(f"[统计] 文件数: {file_count}")
    print(f"[统计] 总大小: {total_size / 1024 / 1024:.1f} MB")
    if oversize:
        print("[警告] 超过 25MB 单文件限制的文件:")
        for fp, sz in oversize:
            print(f"  {sz / 1024 / 1024:.1f} MB  {os.path.relpath(fp, DST)}")
    else:
        print("[通过] 无超过 25MB 的单文件")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
