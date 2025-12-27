import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { resourcesConfig } from '../config';
import { FileText, Link as LinkIcon, Download, ExternalLink, Tag, Send } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-pku-blue pt-24 pb-12 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold font-serif mb-2"
          >
            {resourcesConfig.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-sm md:text-base mb-6"
          >
            {resourcesConfig.subtitle}
          </motion.p>
          
          {resourcesConfig.submitUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={resourcesConfig.submitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-pku-red hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                <Send size={16} className="mr-2" />
                提交资源
              </a>
              <p className="text-white/60 text-xs mt-2">
                欢迎分享优质学术资源，共建学术社区
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Resources Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-10">
          {resourcesConfig.categories.map((category, index) => (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-1.5 h-6 bg-pku-red mr-3 rounded-full"></div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                  {category.description && (
                    <p className="text-gray-500 text-xs mt-0.5">{category.description}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
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
                          <span className="text-[10px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">
                            {item.date}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1" title={item.title}>
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-xs mb-3 flex-grow line-clamp-2" title={item.description}>
                        {item.description}
                      </p>

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {item.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                              <Tag size={10} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-3 border-t border-gray-50">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
