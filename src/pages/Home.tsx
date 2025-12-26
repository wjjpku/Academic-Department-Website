import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ActivityShowcase from '../components/ActivityShowcase';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ActivityShowcase />
      
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img 
                src="/images/homepage3.jpg" 
                alt="About Us" 
                className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900">
                关于学术组
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                北京大学数学科学学院学生会学术组致力于搭建师生交流平台，推动学术氛围建设。
                我们通过举办学术讲座、经验分享会、模拟面试等多样化活动，帮助同学们开阔视野，
                提升学术素养，规划未来发展。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-pku-red pl-4">
                  <h4 className="font-bold text-xl mb-1">学术交流</h4>
                  <p className="text-gray-500 text-sm">连接教授与学生，传递前沿知识</p>
                </div>
                <div className="border-l-4 border-pku-blue pl-4">
                  <h4 className="font-bold text-xl mb-1">生涯规划</h4>
                  <p className="text-gray-500 text-sm">分享保研经验，助力未来发展</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
