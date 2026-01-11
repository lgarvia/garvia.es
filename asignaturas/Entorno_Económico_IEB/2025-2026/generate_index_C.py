from pathlib import Path
import re
from datetime import datetime

BASE = Path(__file__).parent
TRANS_DIR = BASE / "01_transcripciones_grupo_C"
PRES_DIR = BASE / "02_presentaciones"
INDEX_FILE = BASE / "index_Grupo_C.md"

START_MARK = "<!-- AUTO-GENERATED: START -->"
END_MARK = "<!-- AUTO-GENERATED: END -->"

DATE_PATTERN = re.compile(r"(\d{4})[_-](\d{2})[_-](\d{2})")
NUM_PATTERN = re.compile(r"^(\d{2})\s*-\s*(.+)\.pdf$", re.IGNORECASE)


# ---------- Helpers ----------

def extract_date(name: str) -> datetime:
    match = DATE_PATTERN.search(name)
    if not match:
        raise ValueError(f"No date found in filename: {name}")
    return datetime(
        int(match.group(1)),
        int(match.group(2)),
        int(match.group(3))
    )

def clean_title(name: str) -> str:
    stem = Path(name).stem
    stem = DATE_PATTERN.sub("", stem)
    stem = stem.replace("_", " ").replace("-", " ")
    stem = re.sub(r"\bIEB\b", "", stem, flags=re.IGNORECASE)
    stem = stem.strip()
    return stem.title()

def format_date_title(name: str) -> str:
    date = extract_date(name).strftime("%d/%m/%Y")
    title = clean_title(name)
    return f"{date} - {title}"

def extract_number_pdf(name: str) -> int:
    match = NUM_PATTERN.match(name)
    if not match:
        raise ValueError(f"PDF filename does not follow 'NN - name.pdf': {name}")
    return int(match.group(1))


# ---------- Collectors ----------

def collect_transcriptions():
    sections = []

    if not TRANS_DIR.exists():
        return sections

    # 1️⃣ Transcripciones en raíz
    root_files = []
    for f in TRANS_DIR.glob("*.md"):
        root_files.append((extract_date(f.name), f))
    root_files.sort(key=lambda x: x[0])

    if root_files:
        sections.append(("Transcripciones", root_files))

    # 2️⃣ Subcarpetas (grupos)
    for sub in sorted(p for p in TRANS_DIR.iterdir() if p.is_dir()):
        files = []
        for f in sub.glob("*.md"):
            files.append((extract_date(f.name), f))
        files.sort(key=lambda x: x[0])

        if files:
            title = sub.name.replace("_", " ").title()
            sections.append((title, files))

    return sections


def collect_presentations():
    items = []
    if not PRES_DIR.exists():
        return items

    for f in PRES_DIR.glob("*.pdf"):
        num = extract_number_pdf(f.name)
        items.append((num, f))

    items.sort(key=lambda x: x[0])
    return items


# ---------- Generator ----------

def generate_block():
    lines = []

    # Presentaciones
    lines.append("## Presentaciones")
    pres = collect_presentations()

    if not pres:
        lines.append("_No hay presentaciones publicadas._")
    else:
        for _, f in pres:
            rel = f"./02_presentaciones/{f.name}"
            lines.append(f"- [{clean_title(f.name)}]({rel})")

    lines.append("")

    # Transcripciones
    lines.append("## Resúmenes y transcripciones")
    sections = collect_transcriptions()

    if not sections:
        lines.append("_No hay transcripciones publicadas._")
    else:
        for title, files in sections:
            if title != "Transcripciones":
                lines.append(f"### {title}")
            for _, f in files:
                rel = f"./01_transcripciones/{f.relative_to(TRANS_DIR)}"
                lines.append(f"- [{format_date_title(f.name)}]({rel})")

    return "\n".join(lines)


# ---------- Main ----------

def main():
    if not INDEX_FILE.exists():
        raise FileNotFoundError("index.md no existe en esta carpeta.")

    content = INDEX_FILE.read_text(encoding="utf-8")

    if START_MARK not in content or END_MARK not in content:
        raise RuntimeError(
            "No se encontraron los marcadores AUTO-GENERATED en index.md"
        )

    before, rest = content.split(START_MARK, 1)
    _, after = rest.split(END_MARK, 1)

    generated = generate_block()

    new_content = (
        before
        + START_MARK
        + "\n\n"
        + generated
        + "\n\n"
        + END_MARK
        + after
    )

    INDEX_FILE.write_text(new_content, encoding="utf-8")
    print("✔ index.md actualizado correctamente.")


if __name__ == "__main__":
    main()


