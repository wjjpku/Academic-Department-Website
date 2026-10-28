import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import archive from '../config/examArchive.json';

const rawUrl = (path: string) => `https://raw.githubusercontent.com/wjjpku/PKUsmsExam/${archive.revision}/${path.split('/').map(encodeURIComponent).join('/')}`;
const semesters = ['大一上', '大一下', '大二上', '大二下', '大三大四'];

export default function ExamArchive() {
  const [query, setQuery] = useState('');
  const [semester, setSemester] = useState('全部');
  const [course, setCourse] = useState('全部');
  const [limit, setLimit] = useState(50);
  const [error, setError] = useState('');
  const courses = useMemo(() => [...new Set(archive.files.filter(f => semester === '全部' || f.path.startsWith(`${semester}/`)).map(f => f.path.split('/')[1]).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'zh')), [semester]);
  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return archive.files.filter(f => {
      const parts = f.path.split('/');
      return (semester === '全部' || parts[0] === semester) && (course === '全部' || parts[1] === course) && terms.every(t => f.path.toLowerCase().includes(t));
    });
  }, [query, semester, course]);
  async function download(path: string) {
    setError('');
    try {
      const response = await fetch(rawUrl(path));
      if (!response.ok) throw new Error('下载失败');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = path.split('/').pop() || '试题'; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch {
      setError('下载失败，请使用该文件旁的“打开”链接，或稍后重试。');
    }
  }
  return <div className="min-h-screen flex flex-col bg-[#F9F9F7] dark:bg-gray-900">
    <title>数院往年题 · 学术组</title><meta name="robots" content="noindex, nofollow" />
    <Navbar />
    <main id="main-content" className="container mx-auto max-w-6xl px-4 py-12 flex-grow">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">数院往年题</h1>
      <p className="mt-3 mb-8 text-gray-600 dark:text-gray-300">按学期、课程筛选，或搜索教师、年份、期中和期末。共 {archive.files.length} 份文件。</p>
      <section className="paper-panel p-5 mb-6 grid gap-4 md:grid-cols-3" aria-label="筛选试题">
        <label className="text-sm font-medium">搜索<input className="mt-2 w-full rounded-lg border px-3 py-2 text-gray-900" placeholder="例如：几何 2022 期中" value={query} onChange={e => {setQuery(e.target.value);setLimit(50);}} /></label>
        <label className="text-sm font-medium">学期<select className="mt-2 w-full rounded-lg border px-3 py-2 text-gray-900" value={semester} onChange={e => {setSemester(e.target.value);setCourse('全部');setLimit(50);}}><option>全部</option>{semesters.map(s => <option key={s}>{s}</option>)}</select></label>
        <label className="text-sm font-medium">课程<select className="mt-2 w-full rounded-lg border px-3 py-2 text-gray-900" value={course} onChange={e => {setCourse(e.target.value);setLimit(50);}}><option>全部</option>{courses.map(c => <option key={c}>{c}</option>)}</select></label>
      </section>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300" aria-live="polite">找到 {results.length} 份文件</p>
      {error && <p role="alert" className="mb-4 text-red-700">{error}</p>}
      <ul className="space-y-3">{results.slice(0, limit).map(file => {
        const parts = file.path.split('/'); const name = parts.pop() || file.path;
        return <li key={file.path} className="paper-panel p-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between min-w-0">
          <div className="min-w-0"><div className="font-medium text-gray-900 dark:text-white break-words">{name}</div><div className="text-sm text-gray-500 dark:text-gray-400 break-words mt-1">{parts.join(' / ')} · {(file.size / 1048576).toFixed(1)} MB</div></div>
          <div className="flex gap-3 shrink-0"><a className="text-pku-blue underline" href={rawUrl(file.path)} target="_blank" rel="noreferrer">打开</a><button className="text-pku-red underline" onClick={() => download(file.path)}>下载</button></div>
        </li>;
      })}</ul>
      {results.length === 0 && <p className="py-8 text-gray-500">没有找到符合条件的文件，请尝试其他关键词。</p>}
      {limit < results.length && <button className="mt-6 rounded-lg border border-gray-300 px-5 py-2 dark:text-white" onClick={() => setLimit(n => n + 50)}>加载更多</button>}
    </main><Footer />
  </div>;
}
