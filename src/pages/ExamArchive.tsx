import { useEffect, useMemo, useState } from 'react';
import { Search, BookOpen, FileText, Download, ExternalLink, ChevronRight } from 'lucide-react';

type Archive = { revision: string; files: { path: string; size: number }[] };
const rawUrl = (revision: string, path: string) => `https://raw.githubusercontent.com/wjjpku/PKUsmsExam/${revision}/${path.split('/').map(encodeURIComponent).join('/')}`;
const PAGE_SIZE = 20;
const semesters = ['大一上', '大一下', '大二上', '大二下', '大三大四'];

export default function ExamArchive() {
  const [query, setQuery] = useState('');
  const [semester, setSemester] = useState('全部');
  const [course, setCourse] = useState('全部');
  const [page, setPage] = useState(1);
  const [archive, setArchive] = useState<Archive | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    fetch('/data/exam-archive.json').then(response => { if (!response.ok) throw new Error('目录加载失败'); return response.json() as Promise<Archive>; }).then(data => { if (active) setArchive(data); }).catch(() => { if (active) setLoadError(true); });
    return () => { active = false; };
  }, [attempt]);
  const [error, setError] = useState('');
  const courses = useMemo(() => {
    const counts = new Map<string, number>();
    archive?.files.forEach(f => {
      const parts = f.path.split('/');
      if (parts.length < 3 || (semester !== '全部' && parts[0] !== semester)) return;
      counts.set(parts[1], (counts.get(parts[1]) || 0) + 1);
    });
    return [...counts].sort(([a], [b]) => a.localeCompare(b, 'zh'));
  }, [semester, archive]);
  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return (archive?.files ?? []).filter(f => {
      const parts = f.path.split('/');
      return (semester === '全部' || parts[0] === semester) && (course === '全部' || parts[1] === course) && terms.every(t => f.path.toLowerCase().includes(t));
    });
  }, [query, semester, course, archive]);
  async function download(path: string) {
    setError('');
    if (!archive) return;
    try {
      const response = await fetch(rawUrl(archive.revision, path));
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
  if (!archive) return <div className="paper-panel p-8 text-center" role="status">{loadError ? <><p>题目目录加载失败，请检查网络后重试。</p><button className="mt-4 rounded-full bg-pku-blue px-5 py-2 text-white" onClick={() => { setLoadError(false); setAttempt(n => n + 1); }}>重试</button></> : '正在加载题目目录…'}</div>;
  const totalPages = Math.ceil(results.length / PAGE_SIZE);
  const currentPage = Math.min(page, Math.max(1, totalPages));
  return <section aria-label="数院往年题">
      <div className="flex flex-col lg:flex-row items-start gap-7">
        <aside className="paper-panel p-5 w-full lg:w-64 shrink-0 lg:sticky lg:top-24" aria-label="学期筛选">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100"><BookOpen size={19} className="text-pku-red" />学期</h2>
          <p className="mt-1 mb-4 text-xs text-gray-500 dark:text-gray-400">选择学期，查看对应科目</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
            {['全部', ...semesters].map(s => <button key={s} type="button" aria-pressed={semester === s} onClick={() => {setSemester(s);setCourse('全部');setPage(1);}} className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-colors ${semester === s ? 'bg-pku-blue text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700/50'}`}><span>{s === '全部' ? '全部学期' : s}</span><ChevronRight size={15} className={semester === s ? 'text-white' : 'text-gray-400'} /></button>)}
          </div>
        </aside>
        <div className="w-full min-w-0 flex-1 space-y-6">
          <section className="paper-panel p-5 sm:p-7" aria-label="搜索试题">
            <label htmlFor="exam-search" className="block text-lg font-bold text-gray-900 dark:text-gray-100">搜索试题</label>
            <p className="mt-1 mb-4 text-sm text-gray-500 dark:text-gray-400">输入科目、年份、教师或考试类型，多个关键词用空格分开。</p>
            <div className="relative"><Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" /><input id="exam-search" className="w-full rounded-xl border border-gray-200 bg-gray-50/80 py-3 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:border-pku-blue focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" placeholder="例如：几何 2022 期中" value={query} onChange={e => {setQuery(e.target.value);setPage(1);}} /></div>
          </section>
          <section className="paper-panel p-5 sm:p-7" aria-label="科目分类">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5"><div><h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">按科目浏览</h2><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{semester === '全部' ? '全部学期' : semester} · 选择科目查看相关文件</p></div><button type="button" aria-pressed={course === '全部'} onClick={() => {setCourse('全部');setPage(1);}} className={`text-sm px-4 py-2 rounded-full border transition-colors ${course === '全部' ? 'bg-pku-red text-white border-pku-red' : 'text-gray-600 dark:text-gray-200 border-gray-200 dark:border-gray-600 hover:border-pku-red'}`}>全部科目</button></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{courses.map(([name, count]) => <button key={name} type="button" aria-pressed={course === name} onClick={() => {setCourse(name);setPage(1);}} className={`group text-left rounded-xl border px-4 py-4 transition-all ${course === name ? 'border-pku-red bg-pku-red-tint dark:bg-red-950/40 shadow-sm' : 'border-gray-100 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40 hover:border-red-200 hover:shadow-sm'}`}><span className="block font-semibold text-gray-800 dark:text-gray-100 break-words group-hover:text-pku-red dark:group-hover:text-red-300">{name}</span><span className="block mt-2 text-xs text-gray-500 dark:text-gray-400">{count} 份文件</span></button>)}</div>
          </section>
          <section className="paper-panel overflow-hidden" aria-label="试题列表">
            <div className="px-5 sm:px-7 py-5 flex flex-wrap items-end justify-between gap-3 border-b border-gray-100 dark:border-gray-700"><div><h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{course === '全部' ? '全部文件' : course}</h2><p className="mt-1 text-sm text-gray-500 dark:text-gray-400" aria-live="polite">找到 {results.length} 份文件</p></div><span className="text-xs text-gray-400">共 {archive.files.length} 份资料</span></div>
            {error && <p role="alert" className="mx-5 mt-4 text-red-700">{error}</p>}
            <ul className="divide-y divide-gray-100 dark:divide-gray-700">{results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE).map(file => {
              const parts = file.path.split('/'); const name = parts.pop() || file.path;
              return <li key={file.path} className="px-5 sm:px-7 py-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between min-w-0 hover:bg-gray-50/60 dark:hover:bg-gray-800/30 transition-colors"><div className="flex gap-3 min-w-0"><span className="mt-0.5 shrink-0 rounded-lg bg-blue-50 dark:bg-blue-900/30 p-2 text-pku-blue dark:text-blue-300"><FileText size={17} /></span><div className="min-w-0"><div className="font-medium text-gray-900 dark:text-gray-100 break-words">{name}</div><div className="text-xs text-gray-500 dark:text-gray-400 break-words mt-1.5">{parts.join(' / ')} · {(file.size / 1048576).toFixed(1)} MB</div></div></div><div className="flex gap-2 shrink-0 pl-11 sm:pl-0"><a className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-pku-blue dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700" href={rawUrl(archive.revision, file.path)} target="_blank" rel="noreferrer"><ExternalLink size={15} />打开</a><button className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-pku-red dark:text-red-300 hover:bg-red-50 dark:hover:bg-gray-700" onClick={() => download(file.path)}><Download size={15} />下载</button></div></li>;
            })}</ul>
            {results.length === 0 && <p className="px-7 py-10 text-sm text-gray-500">没有找到符合条件的文件，请尝试其他关键词。</p>}
            {totalPages > 1 && <nav aria-label="试题分页" className="p-5 flex flex-wrap items-center justify-center gap-3 border-t border-gray-100 dark:border-gray-700"><button disabled={currentPage === 1} className="rounded-full border border-gray-200 px-5 py-2 text-sm text-gray-600 disabled:opacity-40 dark:text-gray-200 dark:border-gray-600" onClick={() => setPage(n => Math.max(1, n - 1))}>上一页</button><span className="text-sm text-gray-600 dark:text-gray-300" aria-live="polite">第 {currentPage} / {totalPages} 页</span><button disabled={currentPage === totalPages} className="rounded-full border border-gray-200 px-5 py-2 text-sm text-gray-600 disabled:opacity-40 dark:text-gray-200 dark:border-gray-600" onClick={() => setPage(n => Math.min(totalPages, n + 1))}>下一页</button></nav>}
          </section>
        </div>
      </div>
    </section>;
}
