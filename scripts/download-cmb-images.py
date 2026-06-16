#!/usr/bin/env python3
"""Download CMB case study images from Notion S3 signed URLs."""

import urllib.request
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images" / "cmb-cloud"

# Signed URLs from notion-fetch (expire ~1h after fetch)
DOWNLOADS: dict[str, list[str]] = {
    "305aa23b-38dc-433d-aad0-3c350a04c719": ["dashboard"],
    "65a8ff32-b5c2-43e0-9c6e-0cb2de43a134": ["onboarding-tour"],
    "dba9253e-8138-4c87-a47e-bac8ad619400": ["onboarding-tooltips"],
    "36dd6f66-5603-4d44-8879-ab6604f08cfb": ["inline-docs"],
    "d2135f85-f47c-4bb3-8a16-6ef1d0852805": ["dark-mode"],
    "941d56c0-6743-44c9-9b9f-84f441f839aa": ["design-system"],
}

URLS: dict[str, str] = {}


def ext(url: str) -> str:
    path = urlparse(url).path.lower()
    if path.endswith((".jpg", ".jpeg")):
        return ".jpg"
    if path.endswith(".webp"):
        return ".webp"
    return ".png"


def download(url: str, dest: Path) -> int:
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = resp.read()
    dest.write_bytes(data)
    return len(data)


def main() -> None:
    dump = Path(__file__).resolve().parent / "notion-dumps" / "cmb-cloud.json"
    if dump.exists():
        import json
        import re

        text = json.loads(dump.read_text(encoding="utf-8")).get("text", "")
        url_re = re.compile(
            r"https://prod-files-secure\.s3\.us-west-2\.amazonaws\.com/"
            r"538b2e4b-9d15-48d4-8fe4-9f9b29e056a8/([a-f0-9-]{36})/[^)\s\"]+"
        )
        for match in url_re.finditer(text):
            uuid = match.group(1)
            if uuid in DOWNLOADS and uuid not in URLS:
                URLS[uuid] = match.group(0)

    if len(URLS) < len(DOWNLOADS):
        raise SystemExit(
            f"Found {len(URLS)}/{len(DOWNLOADS)} URLs in {dump}. Re-run notion-fetch and save dump."
        )

    for uuid, names in DOWNLOADS.items():
        url = URLS[uuid]
        for name in names:
            dest = OUT / f"{name}{ext(url)}"
            size = download(url, dest)
            print(f"OK {dest.name} ({size:,} bytes)")

    print("\nFiles in", OUT)
    for f in sorted(OUT.glob("*.*")):
        if f.name != ".gitkeep":
            print(f"  {f.name}: {f.stat().st_size:,}")


if __name__ == "__main__":
    main()
