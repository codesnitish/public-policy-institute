# AstraNova Labs PDF Template - Build Guide

## What generated this PDF?

The report template was generated with **Python** using the
[ReportLab](https://www.reportlab.com/) library. It was not created with Go.

Generator source:

`tmp/pdfs/build_astranova_template.py`

Generated PDF:

`output/pdf/AstraNova_Labs_Enterprise_Report_Template.pdf`

## Main ingredients

- **Page generation:** ReportLab (`reportlab.pdfgen.canvas`)
- **Logo processing:** Pillow (`PIL`)
- **Logo source:** `/Users/nitishkumar/endpoint-agent/astra/astra-ui/dashboard/public/5.svg`
- **Headlines:** Plus Jakarta Sans
- **Body/supporting text:** Inter
- **Output:** 9-page A4 PDF report master template

## How the logo is handled

The provided SVG contains a raster image with a black background and white
Astra artwork. The Python generator extracts that raster payload, removes only
the near-black matte, and composites the supplied white logo onto the same
navy (`#0B1538`) background used on the report cover. This keeps the original
logo artwork while avoiding a visible rectangular image tile.

## Rebuild command

From the project root, run:

```bash
/Users/nitishkumar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 \
  tmp/pdfs/build_astranova_template.py
```

The PDF will be written to:

```text
output/pdf/AstraNova_Labs_Enterprise_Report_Template.pdf
```

## Font files

The generator expects these local font files:

```text
tmp/pdfs/fonts/PlusJakartaSans-Variable.ttf
tmp/pdfs/fonts/Inter-Variable.ttf
```

They are registered in the script using ReportLab's `TTFont` interface.

## Visual quality check

Render the PDF to a PNG before delivery:

```bash
FONTCONFIG_PATH=/private/tmp FONTCONFIG_FILE=/private/tmp/nonexistent \
  /Users/nitishkumar/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/override/pdftoppm \
  -f 1 -l 1 -png -r 120 \
  output/pdf/AstraNova_Labs_Enterprise_Report_Template.pdf \
  tmp/pdfs/cover-preview
```

This creates `tmp/pdfs/cover-preview-1.png` for cover-page inspection.

## Editing the template

Common places to update in `build_astranova_template.py`:

- `NAVY`, `BLUE`, `TEAL`, and related constants: report color palette
- `wordmark`, `logo_image`, and the cover-page block: logo presentation
- `{{...}}` strings: dynamic content tokens
- `kpi`, `placeholder`, `draw_table`, and `note`: reusable content components
- `build()`: page order and master page layouts
