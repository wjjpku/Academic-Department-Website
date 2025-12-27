import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FileText, Download, ChevronRight, CheckCircle } from 'lucide-react';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import 'github-markdown-css/github-markdown-light.css';
import 'katex/dist/katex.min.css';
import { challengesConfig } from '../config';

// Configure marked with KaTeX support
marked.use(markedKatex({
  throwOnError: false
}));

const Challenges = () => {
  // Use the first issue's ID as default, or fallback to 1
  const defaultIssueId = challengesConfig.issues && challengesConfig.issues.length > 0 
    ? challengesConfig.issues[0].id 
    : 1;

  const [selectedIssueId, setSelectedIssueId] = useState<number>(defaultIssueId);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Get current issue object
  const currentIssue = challengesConfig.issues.find(i => i.id === selectedIssueId) || { 
    id: selectedIssueId, 
    title: `第 ${selectedIssueId} 期`,
    contentPath: `/challenges/issue${selectedIssueId}.md`,
    pdfPath: `/pdfs/challenge${selectedIssueId}.pdf`,
    solutionPath: null
  };

  useEffect(() => {
    const fetchMarkdown = async () => {
      setLoading(true);
      try {
        const path = currentIssue.contentPath || `/challenges/issue${selectedIssueId}.md`;
        const response = await fetch(path);
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
  }, [selectedIssueId, currentIssue.contentPath]);

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
            {challengesConfig.title}
          </motion.h1>
          <p className="text-white/80">{challengesConfig.subtitle}</p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-bold mb-4 border-b pb-2">往期回顾</h3>
            <div className="space-y-2">
              {challengesConfig.issues.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssueId(issue.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors ${
                    selectedIssueId === issue.id 
                      ? 'bg-pku-red text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">第 {issue.id} 期</span>
                    {issue.title && <span className={`text-xs ${selectedIssueId === issue.id ? 'text-white/80' : 'text-gray-500'}`}>{issue.title}</span>}
                  </div>
                  {selectedIssueId === issue.id && <ChevronRight size={16} />}
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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4 gap-4">
                  <h2 className="text-2xl font-bold text-pku-red flex items-center">
                    <FileText className="mr-2" /> 第 {selectedIssueId} 期题目
                  </h2>
                  
                  <div className="flex gap-3">
                    {currentIssue.pdfPath && (
                      <a 
                        href={currentIssue.pdfPath} 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors"
                      >
                        <Download size={14} className="mr-2" /> 优秀解答 PDF
                      </a>
                    )}
                    
                    {currentIssue.solutionPath && (
                      <a 
                        href={currentIssue.solutionPath} 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm bg-green-50 hover:bg-green-100 text-green-700 px-4 py-2 rounded-full transition-colors border border-green-200"
                      >
                        <CheckCircle size={14} className="mr-2" /> 参考解答
                      </a>
                    )}
                  </div>
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
