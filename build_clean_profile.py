from pathlib import Path
import re

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor


SOURCE = Path(r"D:\文档\求职材料\张雍_网申材料纯净版.md")
OUTPUT = Path(r"D:\文档\求职材料\张雍_网申材料纯净版.docx")

# compact_reference_guide preset with named resume_profile overrides:
# A4 page, Chinese typeface, compact margins, and resume-specific type scale.
FONT = "Microsoft YaHei"
BLUE = RGBColor(47, 93, 159)
DARK = RGBColor(30, 38, 50)
MUTED = RGBColor(92, 99, 112)
LIGHT = RGBColor(217, 225, 238)


def set_cellless_font(run, size=10, color=DARK, bold=False, italic=False):
    run.font.name = FONT
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), FONT)
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), FONT)
    run._element.get_or_add_rPr().rFonts.set(qn("w:eastAsia"), FONT)
    run.font.size = Pt(size)
    run.font.color.rgb = color
    run.bold = bold
    run.italic = italic


def add_hyperlink(paragraph, text, url, bold=False, italic=False, size=10, color=BLUE):
    part = paragraph.part
    rel_id = part.relate_to(url, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", is_external=True)
    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("r:id"), rel_id)
    run_el = OxmlElement("w:r")
    rpr = OxmlElement("w:rPr")
    rfonts = OxmlElement("w:rFonts")
    rfonts.set(qn("w:ascii"), FONT)
    rfonts.set(qn("w:hAnsi"), FONT)
    rfonts.set(qn("w:eastAsia"), FONT)
    rpr.append(rfonts)
    color_el = OxmlElement("w:color")
    color_el.set(qn("w:val"), str(color))
    rpr.append(color_el)
    underline = OxmlElement("w:u")
    underline.set(qn("w:val"), "single")
    rpr.append(underline)
    size_el = OxmlElement("w:sz")
    size_el.set(qn("w:val"), str(int(size * 2)))
    rpr.append(size_el)
    size_cs = OxmlElement("w:szCs")
    size_cs.set(qn("w:val"), str(int(size * 2)))
    rpr.append(size_cs)
    if bold:
        rpr.append(OxmlElement("w:b"))
    if italic:
        rpr.append(OxmlElement("w:i"))
    run_el.append(rpr)
    text_el = OxmlElement("w:t")
    text_el.text = text
    run_el.append(text_el)
    hyperlink.append(run_el)
    paragraph._p.append(hyperlink)


INLINE_RE = re.compile(r"(\*\*.*?\*\*|\*.*?\*|\[[^\]]+\]\([^)]+\))")


def add_inline(paragraph, text, size=10, color=DARK):
    pos = 0
    for match in INLINE_RE.finditer(text):
        if match.start() > pos:
            set_cellless_font(paragraph.add_run(text[pos:match.start()]), size=size, color=color)
        token = match.group(0)
        if token.startswith("**"):
            set_cellless_font(paragraph.add_run(token[2:-2]), size=size, color=color, bold=True)
        elif token.startswith("["):
            label, url = re.match(r"\[([^\]]+)\]\(([^)]+)\)", token).groups()
            add_hyperlink(paragraph, label, url, size=size)
        elif token.startswith("*"):
            set_cellless_font(paragraph.add_run(token[1:-1]), size=size, color=color, italic=True)
        pos = match.end()
    if pos < len(text):
        set_cellless_font(paragraph.add_run(text[pos:]), size=size, color=color)


def add_page_field(paragraph):
    paragraph.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    set_cellless_font(paragraph.add_run("第 "), size=8.5, color=MUTED)
    fld = OxmlElement("w:fldSimple")
    fld.set(qn("w:instr"), "PAGE")
    r = OxmlElement("w:r")
    t = OxmlElement("w:t")
    t.text = "1"
    r.append(t)
    fld.append(r)
    paragraph._p.append(fld)
    set_cellless_font(paragraph.add_run(" 页"), size=8.5, color=MUTED)


def set_keep(paragraph, keep_next=False, keep_lines=True):
    paragraph.paragraph_format.keep_with_next = keep_next
    paragraph.paragraph_format.keep_together = keep_lines


def configure_document(doc):
    section = doc.sections[0]
    section.page_width = Cm(21.0)
    section.page_height = Cm(29.7)
    section.top_margin = Cm(1.45)
    section.bottom_margin = Cm(1.35)
    section.left_margin = Cm(1.65)
    section.right_margin = Cm(1.65)
    section.header_distance = Cm(0.65)
    section.footer_distance = Cm(0.65)

    normal = doc.styles["Normal"]
    normal.font.name = FONT
    normal._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    normal._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    normal._element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
    normal.font.size = Pt(10)
    normal.font.color.rgb = DARK
    normal.paragraph_format.space_before = Pt(0)
    normal.paragraph_format.space_after = Pt(4.5)
    normal.paragraph_format.line_spacing = 1.22

    for style_name, size, before, after, color in [
        ("Heading 1", 14.5, 11, 5, BLUE),
        ("Heading 2", 11.5, 7, 2.5, DARK),
    ]:
        style = doc.styles[style_name]
        style.font.name = FONT
        style._element.rPr.rFonts.set(qn("w:ascii"), FONT)
        style._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
        style._element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
        style.font.size = Pt(size)
        style.font.bold = True
        style.font.color.rgb = color
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.keep_with_next = True
        style.paragraph_format.keep_together = True

    for style_name in ("List Bullet", "List Number"):
        style = doc.styles[style_name]
        style.font.name = FONT
        style._element.rPr.rFonts.set(qn("w:ascii"), FONT)
        style._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
        style._element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
        style.font.size = Pt(9.6)
        style.font.color.rgb = DARK
        style.paragraph_format.left_indent = Cm(0.72)
        style.paragraph_format.first_line_indent = Cm(-0.36)
        style.paragraph_format.space_before = Pt(0)
        style.paragraph_format.space_after = Pt(2.7)
        style.paragraph_format.line_spacing = 1.18

    footer = section.footer.paragraphs[0]
    add_page_field(footer)


def add_title_block(doc, lines):
    title = doc.add_paragraph()
    title.paragraph_format.space_before = Pt(0)
    title.paragraph_format.space_after = Pt(2)
    title.paragraph_format.keep_with_next = True
    set_cellless_font(title.add_run(lines[0][2:].strip()), size=27, color=DARK, bold=True)

    roles = doc.add_paragraph()
    roles.paragraph_format.space_after = Pt(4)
    roles.paragraph_format.keep_with_next = True
    add_inline(roles, lines[2].strip(), size=11.2, color=BLUE)

    contact = doc.add_paragraph()
    contact.paragraph_format.space_after = Pt(8)
    contact.paragraph_format.keep_with_next = True
    add_inline(contact, lines[4].strip(), size=9.3, color=MUTED)


def build():
    lines = SOURCE.read_text(encoding="utf-8").splitlines()
    doc = Document()
    configure_document(doc)
    add_title_block(doc, lines)

    idx = 5
    last_numbered = None
    while idx < len(lines):
        raw = lines[idx]
        line = raw.rstrip()
        idx += 1
        if not line.strip():
            continue
        stripped = line.strip()

        if stripped.startswith("## "):
            p = doc.add_paragraph(style="Heading 1")
            add_inline(p, stripped[3:], size=14.5, color=BLUE)
            set_keep(p, keep_next=True)
            last_numbered = None
        elif stripped.startswith("### "):
            p = doc.add_paragraph(style="Heading 2")
            add_inline(p, stripped[4:], size=11.5, color=DARK)
            set_keep(p, keep_next=True)
            last_numbered = None
        elif stripped.startswith("- "):
            p = doc.add_paragraph(style="List Bullet")
            add_inline(p, stripped[2:], size=9.6)
            set_keep(p)
            last_numbered = None
        elif re.match(r"^\d+\.\s", stripped):
            content = re.sub(r"^\d+\.\s+", "", stripped)
            p = doc.add_paragraph(style="List Number")
            add_inline(p, content, size=9.6)
            set_keep(p, keep_next=True)
            last_numbered = p
        elif raw.startswith("   ") and last_numbered is not None:
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Cm(0.72)
            p.paragraph_format.space_after = Pt(3)
            add_inline(p, stripped, size=9.3, color=MUTED)
            set_keep(p)
        else:
            p = doc.add_paragraph()
            size = 9.5 if ("｜" in stripped and len(stripped) < 100) else 10
            color = MUTED if ("｜" in stripped and len(stripped) < 100) else DARK
            add_inline(p, stripped, size=size, color=color)
            set_keep(p)
            last_numbered = None

    # Set language and prevent metadata leakage.
    settings = doc.settings._element
    theme_font = OxmlElement("w:themeFontLang")
    theme_font.set(qn("w:val"), "zh-CN")
    theme_font.set(qn("w:eastAsia"), "zh-CN")
    settings.append(theme_font)
    doc.core_properties.title = "张雍｜网申材料纯净版"
    doc.core_properties.subject = "完整个人履历与网申材料"
    doc.core_properties.author = ""
    doc.core_properties.last_modified_by = ""
    doc.save(OUTPUT)
    print(OUTPUT)


if __name__ == "__main__":
    build()
