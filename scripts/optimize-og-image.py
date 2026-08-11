import sys
from PIL import Image
from pathlib import Path

def optimize(input_path, output_path=None, quality=85):
    if output_path is None:
        p = Path(input_path)
        output_path = str(p.with_suffix(".jpg"))

    print(f"Processing {input_path} ...")
    img = Image.open(input_path)

    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    img = img.resize((1200, 630), Image.LANCZOS)
    img.save(output_path, "JPEG", quality=quality, optimize=True, progressive=True)

    size_kb = Path(output_path).stat().st_size / 1024
    print(f"Saved {output_path} — {img.size[0]}x{img.size[1]} — {size_kb:.0f} KB")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/optimize-og-image.py <input> [output] [quality=85]")
        sys.exit(1)

    inp = sys.argv[1]
    out = sys.argv[2] if len(sys.argv) > 2 else None
    q = int(sys.argv[3]) if len(sys.argv) > 3 else 85
    optimize(inp, out, q)
