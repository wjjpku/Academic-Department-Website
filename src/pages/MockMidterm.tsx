import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Download } from 'lucide-react';
import { mockMidterms } from '../data/mockMidterms';
import { mockMidtermConfig } from '../config';

const MockMidterm = () => {
  const [expandedYear, setExpandedYear] = useState<number | null>(mockMidterms[0]?.year || null);

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
            className="bg-white p-8 rounded-xl shadow-md"
          >
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
          </motion.section>

          {/* Exams List */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {mockMidterms.map((yearData) => (
              <div key={yearData.year} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleYear(yearData.year)}
                  className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="w-2 h-8 bg-pku-red mr-4 rounded-full"></span>
                    {yearData.year} 年模拟期中
                  </h3>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 text-gray-500 ${
                      expandedYear === yearData.year ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {expandedYear === yearData.year && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                          {yearData.exams.map((exam, idx) => (
                            <div key={idx} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                              <h4 className="font-bold text-lg mb-3 text-pku-blue flex items-center">
                                <FileText size={18} className="mr-2" />
                                {exam.subject}
                              </h4>
                              <div className="flex space-x-3">
                                <a 
                                  href={exam.questionFile}
                                  target="_blank"
                                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-pku-red bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                                >
                                  <Download size={14} className="mr-2" />
                                  试题
                                </a>
                                <a 
                                  href={exam.answerFile}
                                  target="_blank"
                                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-pku-blue bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
                                >
                                  <Download size={14} className="mr-2" />
                                  解答
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MockMidterm;
