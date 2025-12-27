import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { resourcesConfig } from '../config';
import { FileText, Link as LinkIcon, Download, ExternalLink, Tag } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-pku-blue pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            {resourcesConfig.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            {resourcesConfig.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Resources Content */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-16">
          {resourcesConfig.categories.map((category, index) => (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="w-1.5 h-8 bg-pku-red mr-4 rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  {category.description && (
                    <p className="text-gray-500 text-sm mt-1">{category.description}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                  >
                    {item.image && (
                      <div className="h-40 overflow-hidden bg-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-2 rounded-lg ${item.pdfPath ? 'bg-red-50 text-pku-red' : 'bg-blue-50 text-pku-blue'}`}>
                          {item.pdfPath ? <FileText size={20} /> : <LinkIcon size={20} />}
                        </div>
                        {item.date && (
                          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                            {item.date}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-grow">
                        {item.description}
                      </p>

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                              <Tag size={10} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-4 border-t border-gray-50">
                        {item.link && (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-2 bg-pku-blue text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            访问链接
                          </a>
                        )}
                        {item.pdfPath && (
                          <a 
                            href={item.pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-2 bg-pku-red text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                          >
                            <Download size={16} className="mr-2" />
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
