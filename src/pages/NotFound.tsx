import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { AlertCircle, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex justify-center mb-6 text-pku-red">
              <AlertCircle size={80} strokeWidth={1.5} />
            </div>
            <h1 className="text-6xl font-bold font-serif text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">页面未找到</h2>
            <p className="text-gray-600 mb-8">
              抱歉，您访问的页面不存在或已被移除。请检查网址是否正确，或返回首页继续浏览。
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-pku-red text-white rounded-full hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
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
