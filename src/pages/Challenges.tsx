import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FileText, Download, ChevronRight } from 'lucide-react';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import 'github-markdown-css/github-markdown-light.css';
import 'katex/dist/katex.min.css';

// Configure marked with KaTeX support
marked.use(markedKatex({
  throwOnError: false
}));

const Challenges = () => {
  const [selectedIssue, setSelectedIssue] = useState<number>(1);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/challenges/issue${selectedIssue}.md`);
        if (response.ok) {
          const text = await response.text();
          setMarkdownContent(text);
        } else {
          setMarkdownContent('# 暂无该期内容');
        }
      } catch (error) {
        setMarkdownContent('# 加载失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [selectedIssue]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="bg-pku-blue pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            九章征解
          </motion.h1>
          <p className="text-white/80">挑战思维极限，享受解题乐趣</p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-bold mb-4 border-b pb-2">往期回顾</h3>
            <div className="space-y-2">
              {[1].map((issue) => (
                <button
                  key={issue}
                  onClick={() => setSelectedIssue(issue)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
                    selectedIssue === issue 
                      ? 'bg-pku-red text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span>第 {issue} 期</span>
                  {selectedIssue === issue && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-xl shadow-md p-8 min-h-[500px]">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pku-red"></div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                  <h2 className="text-2xl font-bold text-pku-red flex items-center">
                    <FileText className="mr-2" /> 第 {selectedIssue} 期题目
                  </h2>
                  <a 
                    href={`/pdfs/midterm${selectedIssue}.pdf`} 
                    target="_blank"
                    className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors"
                  >
                    <Download size={14} className="mr-2" /> 下载 PDF
                  </a>
                </div>
                <article 
                  className="markdown-body !bg-white !text-gray-800" 
                  style={{ backgroundColor: 'white', color: '#24292f' }}
                  dangerouslySetInnerHTML={{ __html: marked(markdownContent) as string }} 
                />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Challenges;
