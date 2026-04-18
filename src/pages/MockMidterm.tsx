import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHero 
        title={mockMidtermConfig.title} 
        subtitle={mockMidtermConfig.subtitle}
        theme="blue"
      />

      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Intro Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="paper-panel p-8 md:p-10 overflow-hidden"
          >
            <div className={`flex flex-col ${mockMidtermConfig.intro.image ? 'md:flex-row' : ''} gap-10 items-center`}>
              <div className="flex-1">
                <SectionHeader title={mockMidtermConfig.intro.title} />
                <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                  {mockMidtermConfig.intro.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              {mockMidtermConfig.intro.image && (
                <div className="flex-1 w-full md:w-auto relative group">
                  <div className="absolute inset-0 bg-pku-blue/10 rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                  <img 
                    src={mockMidtermConfig.intro.image} 
                    alt="Mock Midterm Scene" 
                    loading="lazy"
                    className="relative rounded-2xl shadow-md w-full object-cover h-64 md:h-80 hover:shadow-xl transition-all duration-300" 
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
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionHeader title="历年试题与报告" />
            
            {years.length > 0 ? (
              years.map((year) => (
                <div key={year} className="paper-panel overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button
                    onClick={() => toggleYear(year)}
                    className="w-full flex justify-between items-center p-6 hover:bg-gray-50/50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                      <span className="w-1.5 h-6 bg-pku-red mr-4 rounded-full"></span>
                      {year} 年模拟期中
                    </h3>
                    <div className={`p-2 rounded-full transition-colors ${expandedYear === year ? 'bg-red-50 text-pku-red' : 'bg-gray-50 text-gray-400'}`}>
                      <ChevronDown 
                        className={`transform transition-transform duration-300 ${
                          expandedYear === year ? 'rotate-180' : ''
                        }`} 
                        size={20}
                      />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedYear === year && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="border-t border-gray-100 bg-gray-50/30">
                          {/* Report and Award Links */}
                          <div className="px-8 pt-8 flex flex-wrap gap-4">
                            {mockMidtermConfig.reports?.find(r => r.year === year) && (
                              <a 
                                href={mockMidtermConfig.reports.find(r => r.year === year)?.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-white bg-pku-red hover:bg-red-700 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm font-medium shadow-md hover:shadow-lg"
                              >
                                <ExternalLink size={16} className="mr-2" />
                                {mockMidtermConfig.reports.find(r => r.year === year)?.title || '查看成绩报告'}
                              </a>
                            )}
                            
                            {mockMidtermConfig.awards?.find(r => r.year === year) && (
                              <a 
                                href={mockMidtermConfig.awards.find(r => r.year === year)?.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-pku-red bg-white hover:bg-red-50 border border-red-100 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm font-medium shadow-sm hover:shadow"
                              >
                                <ExternalLink size={16} className="mr-2" />
                                {mockMidtermConfig.awards.find(r => r.year === year)?.title || '查看获奖名单'}
                              </a>
                            )}
                          </div>

                          <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              {examsByYear[year].map((exam, idx) => (
                                <div key={idx} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-pku-red/30 hover:shadow-md transition-all group">
                                  <h4 className="font-bold text-lg mb-4 text-gray-800 flex items-center group-hover:text-pku-red transition-colors">
                                    <div className="p-2 bg-blue-50 text-pku-blue rounded-lg mr-3 group-hover:bg-red-50 group-hover:text-pku-red transition-colors">
                                      <FileText size={18} />
                                    </div>
                                    {exam.title}
                                  </h4>
                                  <div className="flex space-x-3">
                                    {exam.pdfPath && (
                                      <a 
                                        href={exam.pdfPath}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center px-4 py-2.5 text-sm font-medium text-pku-red bg-red-50/50 hover:bg-red-50 rounded-lg transition-colors border border-red-100/50"
                                      >
                                        <Download size={16} className="mr-2" />
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
              <div className="text-center py-12 text-gray-500 paper-panel border-none shadow-sm">
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
