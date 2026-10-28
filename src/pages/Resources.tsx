import { lazy, Suspense, useState } from 'react';
const ExamArchive = lazy(() => import('./ExamArchive'));
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Seo from '../components/Seo';
import { motion } from 'framer-motion';
import { resourcesConfig } from '../config';
import { FileText, Link as LinkIcon, Download, ExternalLink, Tag } from 'lucide-react';

const Resources = () => {
  const [tab, setTab] = useState<'exams' | 'resources'>('exams');
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={resourcesConfig.title} description={resourcesConfig.subtitle} path="/resources" />
      <Navbar />
      
      {/* Header */}
      <PageHero
        title={resourcesConfig.title}
        subtitle={resourcesConfig.subtitle}
        theme="blue"
      />

      {/* Resources Content */}
      <main id="main-content" tabIndex={-1} className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8 flex flex-wrap gap-2" aria-label="资源分类">
          <button type="button" aria-pressed={tab === 'exams'} onClick={() => setTab('exams')} className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${tab === 'exams' ? 'bg-pku-red text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 border border-gray-200 dark:border-gray-700'}`}>数院往年题</button>
          <button type="button" aria-pressed={tab === 'resources'} onClick={() => setTab('resources')} className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${tab === 'resources' ? 'bg-pku-red text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 border border-gray-200 dark:border-gray-700'}`}>学习资料</button>
        </div>
        {tab === 'exams' ? <Suspense fallback={<div className="paper-panel p-8" role="status">正在加载题目页面…</div>}><ExamArchive /></Suspense> : <div className="space-y-16">
          {resourcesConfig.categories.map((category, index) => (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="paper-panel p-8"
            >
              <SectionHeader 
                title={category.title} 
                description={category.description} 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <motion.div
                    key={item.id}
                    className="rounded-card flex flex-col"
                  >
                    {item.image && (
                      <div className="h-32 overflow-hidden bg-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <div className={`p-1.5 rounded-lg ${item.pdfPath ? 'bg-red-50 text-pku-red' : 'bg-blue-50 text-pku-blue'}`}>
                          {item.pdfPath ? <FileText size={16} /> : <LinkIcon size={16} />}
                        </div>
                        {item.date && (
                          <span className="text-[10px] text-gray-400 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                            {item.date}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1 line-clamp-1" title={item.title}>
                        {item.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 flex-grow line-clamp-2" title={item.description}>
                        {item.description}
                      </p>

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {item.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center text-[10px] text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                              <Tag size={10} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-700">
                        {item.link && (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-1.5 bg-pku-blue text-white rounded-lg hover:bg-blue-800 transition-colors text-xs font-medium"
                          >
                            <ExternalLink size={14} className="mr-1.5" />
                            访问链接
                          </a>
                        )}
                        {item.pdfPath && (
                          <a 
                            href={item.pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-1.5 bg-pku-red text-white rounded-lg hover:bg-red-700 transition-colors text-xs font-medium"
                          >
                            <Download size={14} className="mr-1.5" />
                            下载 PDF
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>}
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
