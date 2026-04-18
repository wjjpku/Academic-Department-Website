import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { resourcesConfig } from '../config';
import { FileText, Link as LinkIcon, Download, ExternalLink, Tag, Send } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <PageHero 
        title={resourcesConfig.title} 
        subtitle={resourcesConfig.subtitle}
        theme="blue"
      >
        {resourcesConfig.submitUrl && (
          <div className="mt-6">
            <a
              href={resourcesConfig.submitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-pku-red hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              <Send size={16} className="mr-2" />
              提交资源
            </a>
            <p className="text-white/60 text-xs mt-3">
              欢迎分享优质学术资源，共建学术社区
            </p>
          </div>
        )}
      </PageHero>

      {/* Resources Content */}
      <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-16">
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
