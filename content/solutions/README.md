# 历年模拟期中参考解答

九个 Markdown 文件是本站整理的解答源文件，题号以原始试卷为准。首届档案同时包含数学组和非数学组。题面勘误在对应网页和解答内说明，原始试卷 PDF 作为档案保留。

生成需要 Python 3、PyMuPDF、XeLaTeX 及 ctex：

```sh
python3 content/solutions/build.py
cd content/solutions
xelatex -interaction=nonstopmode -halt-on-error main.tex
xelatex -interaction=nonstopmode -halt-on-error main.tex
cd ../..
python3 content/solutions/build.py --split content/solutions/main.pdf
```

输出到 `public/pdfs/<试卷编号>-solutions.pdf`。源文件顺序与 PDF 书签对应；每份解答页码单独从 1 开始。生成文件只保留文档标题、本站整理及科目说明等元数据。
