import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { motion } from 'framer-motion';
import { FileText, Download, ChevronRight, CheckCircle, Send } from 'lucide-react';
import 'github-markdown-css/github-markdown-light.css';
import 'katex/dist/katex.min.css';
import { challengesConfig } from '../config';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

// Optional: preprocessing to fix common markdown math issues
const preprocessMarkdown = (text: string) => {
  if (!text) return '';
  let processed = text;
  
  // 1. 修复多行公式中常见的 \\ 被 markdown 吞掉的问题
  processed = processed.replace(/\\\\/g, '\\\\\\\\');

  return processed;
};

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHero 
        title={challengesConfig.title} 
        subtitle={challengesConfig.subtitle}
        theme="blue"
      />

      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="paper-panel p-6 sticky top-24 border-none shadow-sm">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-100 pb-2 text-gray-800">往期回顾</h3>
            <div className="space-y-2">
              {challengesConfig.issues.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssueId(issue.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all duration-300 ${
                    selectedIssueId === issue.id 
                      ? 'bg-pku-red text-white shadow-md transform scale-[1.02]' 
                      : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">第 {issue.id} 期</span>
                    {issue.title && <span className={`text-xs mt-0.5 ${selectedIssueId === issue.id ? 'text-white/80' : 'text-gray-400'}`}>{issue.title}</span>}
                  </div>
                  {selectedIssueId === issue.id && <ChevronRight size={16} className="text-white/90" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/4">
          <motion.div 
            key={selectedIssueId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="paper-panel p-8 min-h-[600px] border-none shadow-sm"
          >
            {loading ? (
              <div className="flex justify-center items-center h-full min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pku-red"></div>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-6 gap-4">
                  <h2 className="text-2xl font-bold text-pku-red flex items-center tracking-tight">
                    <FileText className="mr-3" /> 第 {selectedIssueId} 期题目
                  </h2>
                  
                  <div className="flex flex-wrap gap-3">
                    {currentIssue.pdfPath && (
                      <a 
                        href={currentIssue.pdfPath} 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full transition-colors border border-gray-200 shadow-sm hover:shadow"
                      >
                        <Download size={14} className="mr-2" /> 优秀解答 PDF
                      </a>
                    )}
                    
                    {currentIssue.solutionPath && (
                      <a 
                        href={currentIssue.solutionPath} 
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm bg-green-50 hover:bg-green-100 text-green-700 px-4 py-2 rounded-full transition-colors border border-green-200 shadow-sm hover:shadow"
                      >
                        <CheckCircle size={14} className="mr-2" /> 参考解答
                      </a>
                    )}
                  </div>
                </div>
                
                <article className="markdown-body !bg-transparent !text-gray-800 flex-grow mb-8 prose prose-slate max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[
                      [rehypeKatex, {
                        strict: false,
                        macros: {
                          "\\nmid": "\\not\\mid"
                        }
                      }]
                    ]}
                  >
                    {preprocessMarkdown(markdownContent)}
                  </ReactMarkdown>
                </article>

                {currentIssue.submitUrl && (
                  <div className="mt-auto pt-8 border-t border-gray-100 flex justify-center">
                    <a
                      href={currentIssue.submitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-3 bg-pku-red hover:bg-red-700 text-white font-medium rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Send size={18} className="mr-2" />
                      提交本期解答
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Challenges;
