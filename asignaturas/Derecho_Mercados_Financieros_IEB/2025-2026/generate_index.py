from pathlib import Path
import re
from datetime import datetime

BASE = Path(__file__).parent
TRANS_DIR = BASE / "01_transcripciones"
PRES_DIR = BASE / "02_presentaciones"
INDEX_FILE = BASE / "index.md"

START_MARK = "<!-- AUTO-GENERATED: START -->"
END_MARK = "<!-- AUTO-GENERATED: END -->"

DATE_PATTERN = re.compile(r"(\d{4})[_-](\d{2})[_-](\d{2})")
NUM_PATTERN = re.compile(r"^(\d{2})\s*-\s*(.+)\.pdf$", re.IGNORECASE)


# ---------- Helpers ----------

def extract_date_from_name(name: str) -> datetime:
    match = DATE_PATTERN.search(name)
    if not match:
        raise ValueError(f"No date found in transcription filename: {name}")
    return datetime(
        int(match.group(1)),
        int(match.group(2)),
        int(match.group(3))
    )

def extract_number_from_pdf(name: str) -> int:
    match = NUM_PATTERN.match(name)
    if not match:
        raise ValueError(f"PDF filename does not follow 'NN - name.pdf': {name}")
    return int(match.group(1))

def clean_title(name: str) -> str:
    stem = Path(name).stem
    stem = DATE_PATTERN.sub("", stem)
    stem = NUM_PATTERN.sub(r"\2", stem)
    stem = stem.replace("_", " ").replace("-", " ").strip()
    return stem.title()


# ---------- Collectors ----------

def collect_transcriptions():
    result = []
    if not TRANS_DIR.exists():
        return result

    for grupo in sorted(p for p in TRANS_DIR.iterdir() if p.is_dir()):
        files = []
        for f in grupo.glob("*.md"):
            date = extract_date_from_name(f.name)
            files.append((date, f))
        files.sort(key=lambda x: x[0])
        result.append((grupo.name, files))
    return result

def collect_presentations():
    result = []
    if not PRES_DIR.exists():
        return result

    for f in PRES_DIR.glob("*.pdf"):
        number = extract_number_from_pdf(f.name)
        result.append((number, f))
    result.sort(key=lambda x: x[0])
    return result


# ---------- Generator ----------

def generate_block():
    lines = []

    # Transcripciones
    lines.append("## Transcripciones")
    trans = collect_transcriptions()

    if not trans:
        lines.append("_No hay transcripciones publicadas._")
    else:
        for grupo, files in trans:
            lines.append(f"- **{grupo.replace('_', ' ').title()}**")
            for _, f in files:
                title = clean_title(f.name)
                rel = f"./01_transcripciones/{grupo}/{f.name}"
                lines.append(f"  - [{title}]({rel})")

    lines.append("")

    # Presentaciones
    lines.append("## Presentaciones")
    pres = collect_presentations()

    if not pres:
        lines.append("_No hay presentaciones publicadas._")
    else:
        for _, f in pres:
            title = clean_title(f.name)
            rel = f"./02_presentaciones/{f.name}"
            lines.append(f"- [{title}]({rel})")

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
