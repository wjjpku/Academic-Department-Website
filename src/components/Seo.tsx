const SITE_NAME = '北京大学数学科学学院学生会学术组';
const BASE_URL = 'https://pkusms.com';

interface SeoProps {
  /** 页面标题（不含站点名后缀） */
  title: string;
  /** 页面描述，用于 SEO 摘要与分享卡片 */
  description: string;
  /** 当前页面路径，如 "/challenges"，用于 canonical 与 og:url */
  path: string;
}

/**
 * 逐页 SEO 元信息。借助 React 19 原生的 <title>/<meta>/<link> 提升能力，
 * 在组件中渲染即会自动合并到 <head>，无需 react-helmet。
 */
const Seo = ({ title, description, path }: SeoProps) => {
  const fullTitle = `${title} · ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default Seo;
