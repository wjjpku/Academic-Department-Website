"""Generate LaTeX from the solution sources; split the compiled booklet into nine PDFs."""
from pathlib import Path
import argparse
import re

ROOT = Path(__file__).resolve().parent
KEYS = ['2025math', '2025gs', '2025xd', '2024math', '2023math', '2020math', '2019math', 'old1', 'old0']


def generate():
    chunks = []
    for key in KEYS:
        source = (ROOT / f'{key}.md').read_text()
        lines = source.splitlines()
        title = lines[0][2:]
        chunks.append(r'\clearpage\setcounter{page}{1}')
        chunks.append(r'\pdfbookmark[0]{' + title + '}{' + key + '}')
        chunks.append(r'\begin{center}{\Large\bfseries ' + title + r'}\end{center}')
        display = False
        for line in lines[1:]:
            if line == '$$':
                chunks.append(r'\]' if display else r'\[')
                display = not display
            elif line.startswith('## '):
                chunks.append(r'\subsection*{' + line[3:] + '}')
            else:
                chunks.append(re.sub(r'\*\*(.*?)\*\*', r'\\textbf{\1}', line))
        assert not display, key
    (ROOT / 'chapters.tex').write_text('\n'.join(chunks) + '\n')


def split(pdf_path):
    import pymupdf
    source = pymupdf.open(pdf_path)
    toc = [entry for entry in source.get_toc() if entry[0] == 1]
    assert len(toc) == len(KEYS), toc
    outdir = ROOT.parent.parent / 'public' / 'pdfs'
    for i, key in enumerate(KEYS):
        start = toc[i][2] - 1
        end = toc[i + 1][2] - 2 if i + 1 < len(toc) else len(source) - 1
        dest = pymupdf.open()
        dest.insert_pdf(source, from_page=start, to_page=end)
        dest.set_metadata({'title': toc[i][1], 'author': '本站整理', 'subject': '模拟期中参考解答'})
        dest.save(outdir / f'{key}-solutions.pdf', garbage=4, deflate=True)
        print(f'{key}: {len(dest)} pages')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--split', type=Path, help='compiled main.pdf')
    args = parser.parse_args()
    if args.split:
        split(args.split)
    else:
        generate()
