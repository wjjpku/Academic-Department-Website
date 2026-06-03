import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Download, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { mockMidtermConfig } from '../config';
import MarkdownRenderer from '../components/MarkdownRenderer';

const MockMidterm = () => {
  // Group exams by year from config if available, otherwise use default structure or empty
  // For exams like "首届数学组", we'll assign them to a special "早期档案" category
  const getYearFromTitle = (title: string) => {
    const match = title.match(/(\d{4})年/);
    return match ? parseInt(match[1]) : 0; // 0 for old/special exams
  };

  const examsByYear = mockMidtermConfig.exams 
    ? mockMidtermConfig.exams.reduce((acc, exam) => {
        const year = getYearFromTitle(exam.title);
        const yearKey = year === 0 ? '早期档案' : year.toString();
        if (!acc[yearKey]) {
          acc[yearKey] = [];
        }
        acc[yearKey].push(exam);
        return acc;
      }, {} as Record<string, typeof mockMidtermConfig.exams>)
    : {};

  // Sort years in descending order, put "早期档案" at the end
  const yearKeys = Object.keys(examsByYear).sort((a, b) => {
    if (a === '早期档案') return 1;
    if (b === '早期档案') return -1;
    return parseInt(b) - parseInt(a);
  });
  
  const [selectedYearKey, setSelectedYearKey] = useState<string>(yearKeys[0] || '');
  const [selectedExamId, setSelectedExamId] = useState<number | null>(
    examsByYear[yearKeys[0]]?.[0]?.id || null
  );
  
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Auto-select first exam when year changes
  useEffect(() => {
    if (selectedYearKey && examsByYear[selectedYearKey]?.length > 0) {
      // Only change selected exam if current one is not in the newly selected year
      const currentExamInNewYear = examsByYear[selectedYearKey].find(e => e.id === selectedExamId);
      if (!currentExamInNewYear) {
        setSelectedExamId(examsByYear[selectedYearKey][0].id);
      }
    }
  }, [selectedYearKey]);

  const currentExam = mockMidtermConfig.exams?.find(e => e.id === selectedExamId);

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!currentExam || !currentExam.contentPath) {
        setMarkdownContent('# 暂无详细内容\n\n请点击上方按钮下载 PDF 查看试卷。');
        return;
      }
      
      setLoading(true);
      try {
        const response = await fetch(currentExam.contentPath);
        if (response.ok) {
          const text = await response.text();
          setMarkdownContent(text);
        } else {
          setMarkdownContent('# 内容加载失败\n\n可能是文件不存在，请点击上方按钮下载 PDF 查看。');
        }
      } catch (error) {
        setMarkdownContent('# 加载出错了\n\n网络请求失败，请稍后重试或下载 PDF。');
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [currentExam]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F7]">
      <Navbar />
      
      <PageHero 
        title={mockMidtermConfig.title} 
        subtitle={mockMidtermConfig.subtitle}
        theme="blue"
      />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section - Now more compact at top */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="paper-panel p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1.5 h-5 bg-pku-red mr-3 rounded-full"></div>
                {mockMidtermConfig.intro.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {mockMidtermConfig.intro.content.join(' ')}
              </p>
            </div>
            {mockMidtermConfig.intro.image && (
              <div className="hidden md:block w-48 h-32 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                <img 
                  src={mockMidtermConfig.intro.image} 
                  alt="Mock Midterm Scene" 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
          </div>
        </motion.section>

        {/* Split Pane Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar: Year Navigation */}
          <div className="lg:w-1/4 flex flex-col gap-4">
            <div className="paper-panel p-5 sticky top-24">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center border-b border-gray-100 pb-3">
                <Calendar size={18} className="mr-2 text-pku-blue" />
                往年试卷集
              </h3>
              
              <div className="space-y-2">
                {yearKeys.map((yearKey) => (
                  <button
                    key={yearKey}
                    onClick={() => setSelectedYearKey(yearKey)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                      selectedYearKey === yearKey 
                        ? 'bg-pku-blue text-white shadow-md transform scale-[1.02]' 
                        : 'hover:bg-blue-50 text-gray-600 hover:text-pku-blue'
                    }`}
                  >
                    <span className="font-medium">
                      {yearKey === '早期档案' ? yearKey : `${yearKey} 年`}
                    </span>
                    <ChevronRight size={16} className={selectedYearKey === yearKey ? 'text-white' : 'text-gray-400'} />
                  </button>
                ))}
              </div>

              {/* Reports and Awards for selected year */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedYearKey}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 space-y-3"
                >
                  {selectedYearKey !== '早期档案' && mockMidtermConfig.reports?.find(r => r.year.toString() === selectedYearKey) && (
                    <a 
                      href={mockMidtermConfig.reports.find(r => r.year.toString() === selectedYearKey)?.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full bg-red-50 hover:bg-red-100 text-pku-red py-2.5 rounded-lg text-sm font-medium transition-colors border border-red-100"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      查看成绩报告
                    </a>
                  )}
                  {selectedYearKey !== '早期档案' && mockMidtermConfig.awards?.find(r => r.year.toString() === selectedYearKey) && (
                    <a 
                      href={mockMidtermConfig.awards.find(r => r.year.toString() === selectedYearKey)?.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full bg-blue-50 hover:bg-blue-100 text-pku-blue py-2.5 rounded-lg text-sm font-medium transition-colors border border-blue-100"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      查看获奖名单
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Area: Exam Selection & Markdown Viewer */}
          <div className="lg:w-3/4 flex flex-col gap-6">
            
            {/* Exam Pills */}
            <motion.div 
              key={`exams-${selectedYearKey}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="paper-panel p-4"
            >
              <div className="flex flex-wrap gap-2">
                {examsByYear[selectedYearKey]?.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => setSelectedExamId(exam.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedExamId === exam.id
                        ? 'bg-pku-red text-white shadow-md'
                        : 'bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-pku-red border border-gray-200'
                    }`}
                  >
                    {exam.title.replace(`${selectedYearKey}年 `, '')}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Markdown Workspace */}
            <motion.div 
              key={`content-${selectedExamId}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="paper-panel p-8 min-h-[600px] flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-gray-100 gap-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <BookOpen className="mr-3 text-pku-red" />
                  {currentExam?.title || '试题详情'}
                </h2>
                
                {currentExam?.pdfPath && (
                  <a 
                    href={currentExam.pdfPath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-gray-900 hover:bg-black text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <Download size={16} className="mr-2" />
                    下载 PDF 原件
                  </a>
                )}
              </div>

              {loading ? (
                <div className="flex-grow flex justify-center items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pku-red"></div>
                </div>
              ) : (
                <div className="flex-grow bg-white/50 rounded-xl">
                  <MarkdownRenderer
                    content={markdownContent}
                    className="markdown-body !bg-transparent !text-gray-800 prose prose-slate max-w-none prose-headings:text-pku-blue prose-a:text-pku-red"
                  />
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MockMidterm;
