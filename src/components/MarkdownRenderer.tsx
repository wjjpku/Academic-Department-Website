import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-light.css';
import 'katex/dist/katex.min.css';

interface MarkdownRendererProps {
  /** 原始 Markdown 文本（支持 GFM 与 KaTeX 数学公式） */
  content: string;
  /** 包裹 <article> 的样式类 */
  className?: string;
}

/**
 * 统一的 Markdown 渲染组件，供「九章征解」与「模拟期中」等页面复用。
 *
 * 注意：remark-math 会原样保留数学块中的 `\\` 换行，无需再做任何反斜杠预处理。
 * （此前的 `\\ -> \\\\` 替换会给每个 matrix / cases / aligned 环境插入多余空行。）
 */
const MarkdownRenderer = ({ content, className }: MarkdownRendererProps) => (
  <article className={className}>
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[
        [rehypeKatex, {
          strict: false,
          macros: {
            '\\nmid': '\\not\\mid',
          },
        }],
      ]}
    >
      {content || ''}
    </ReactMarkdown>
  </article>
);

export default MarkdownRenderer;
