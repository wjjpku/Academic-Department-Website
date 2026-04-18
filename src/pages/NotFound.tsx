import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AlertCircle, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pku-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pku-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-lg mx-auto paper-panel p-12 shadow-xl border-none"
          >
            <motion.div 
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8 text-pku-red/80"
            >
              <div className="p-6 bg-red-50 rounded-full">
                <AlertCircle size={64} strokeWidth={2} />
              </div>
            </motion.div>
            <h1 className="text-7xl md:text-8xl font-bold font-serif text-gray-900 mb-2 tracking-tighter">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">页面未找到</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              抱歉，您访问的页面不存在或已被移除。请检查网址是否正确，或返回首页继续浏览。
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white rounded-full hover:bg-pku-red transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 duration-300 font-medium"
            >
              <Home size={18} className="mr-2" />
              返回首页
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
