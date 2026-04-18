const { unified } = require('unified');
const remarkParse = require('remark-parse');
const remarkMath = require('remark-math');
const remarkRehype = require('remark-rehype');
const rehypeKatex = require('rehype-katex');
const rehypeStringify = require('rehype-stringify');

const markdown = `
Test inline math: $\\mathbb{Q}^{n \\times n}$ and $\\nmid$
`;

async function test() {
  const fileWithMacro = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex, { macros: { "\\mathbb": "\\mathbb{#1}", "\\nmid": "\\not\\mid" }, throwOnError: false })
    .use(rehypeStringify)
    .process(markdown);

  console.log("With \\mathbb macro:");
  console.log(String(fileWithMacro));

  const fileWithoutMacro = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex, { macros: { "\\nmid": "\\not\\mid" }, throwOnError: false })
    .use(rehypeStringify)
    .process(markdown);

  console.log("\nWithout \\mathbb macro:");
  console.log(String(fileWithoutMacro));
}

test();
