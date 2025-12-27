import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Download, ExternalLink } from 'lucide-react';
import { mockMidtermConfig } from '../config';

const MockMidterm = () => {
  // Group exams by year from config if available, otherwise use default structure or empty
  // Assuming exams have titles like "2024年秋季学期 数学分析I"
  const getYearFromTitle = (title: string) => {
    const match = title.match(/(\d{4})年/);
    return match ? parseInt(match[1]) : 0;
  };

  const examsByYear = mockMidtermConfig.exams 
    ? mockMidtermConfig.exams.reduce((acc, exam) => {
        const year = getYearFromTitle(exam.title);
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(exam);
        return acc;
      }, {} as Record<number, typeof mockMidtermConfig.exams>)
    : {};

  // Sort years in descending order
  const years = Object.keys(examsByYear).map(Number).sort((a, b) => b - a);
  
  const [expandedYear, setExpandedYear] = useState<number | null>(years[0] || null);

  const toggleYear = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-pku-blue pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            {mockMidtermConfig.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            {mockMidtermConfig.subtitle}
          </motion.p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Intro Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-xl shadow-md overflow-hidden"
          >
            <div className={`flex flex-col ${mockMidtermConfig.intro.image ? 'md:flex-row' : ''} gap-8 items-center`}>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-pku-blue mb-6 border-l-4 border-pku-red pl-4">
                  {mockMidtermConfig.intro.title}
                </h2>
                <div className="prose max-w-none text-gray-600 leading-relaxed">
                  {mockMidtermConfig.intro.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              {mockMidtermConfig.intro.image && (
                <div className="flex-1 w-full md:w-auto">
                  <img 
                    src={mockMidtermConfig.intro.image} 
                    alt="Mock Midterm Scene" 
                    className="rounded-lg shadow-md w-full object-cover h-64 md:h-80 hover:scale-[1.02] transition-transform duration-300" 
                  />
                </div>
              )}
            </div>
          </motion.section>

          {/* Exams List */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {years.length > 0 ? (
              years.map((year) => (
                <div key={year} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleYear(year)}
                    className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                      <span className="w-2 h-8 bg-pku-red mr-4 rounded-full"></span>
                      {year} 年模拟期中
                    </h3>
                    <ChevronDown 
                      className={`transform transition-transform duration-300 text-gray-500 ${
                        expandedYear === year ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedYear === year && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-gray-100">
                          {/* Report Link */}
                          {mockMidtermConfig.reports?.find(r => r.year === year) && (
                            <div className="px-6 pt-6">
                              <a 
                                href={mockMidtermConfig.reports.find(r => r.year === year)?.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-white bg-pku-red hover:bg-red-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium shadow-sm"
                              >
                                <ExternalLink size={16} className="mr-2" />
                                {mockMidtermConfig.reports.find(r => r.year === year)?.title || '查看成绩报告'}
                              </a>
                            </div>
                          )}

                          <div className="px-6 pb-6 pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {examsByYear[year].map((exam, idx) => (
                                <div key={idx} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                                  <h4 className="font-bold text-lg mb-3 text-pku-blue flex items-center">
                                    <FileText size={18} className="mr-2" />
                                    {exam.title}
                                  </h4>
                                  <div className="flex space-x-3">
                                    {exam.pdfPath && (
                                      <a 
                                        href={exam.pdfPath}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-pku-red bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                                      >
                                        <Download size={14} className="mr-2" />
                                        试题 PDF
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 bg-white rounded-xl shadow-md">
                暂无试题信息
              </div>
            )}
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MockMidterm;
