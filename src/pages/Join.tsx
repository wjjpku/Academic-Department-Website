import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Users, BookOpen, Coffee, TrendingUp, Mail, MessageSquare } from 'lucide-react';

const Join = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8 text-pku-red" />,
      title: '丰富的学术活动',
      desc: '定期举办讲座、研讨会，拓宽学术视野，近距离接触知名教授'
    },
    {
      icon: <Coffee className="w-8 h-8 text-pku-blue" />,
      title: '轻松的工作氛围',
      desc: '合理分配工作量，兼顾学业与生活，享受快乐的学生工作'
    },
    {
      icon: <Users className="w-8 h-8 text-pku-red" />,
      title: '温馨的团队文化',
      desc: '定期团建与例会，结识志同道合的伙伴，收获真挚友谊'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-pku-blue" />,
      title: '个人成长机会',
      desc: '提升组织策划能力，拓展人脉资源，参与有影响力的项目'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="relative h-[60vh] bg-pku-blue overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/homepage.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            加入我们，点亮你的大学生活！
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-light opacity-90"
          >
            这里有最有趣的活动、最温暖的伙伴、最广阔的舞台
          </motion.p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">在我们这里，你可以获得</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-pku-red"
              >
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <img src="/images/QR.jpg" alt="招新群二维码" className="max-w-[200px] rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6 text-pku-blue">如何加入我们？</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 text-green-600">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">微信联系</h4>
                    <p className="text-gray-600 mt-1">wjj05170032</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">邮箱联系</h4>
                    <a href="mailto:wjj_math@stu.pku.edu.cn" className="text-pku-red hover:underline mt-1 block">
                      wjj_math@stu.pku.edu.cn
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-500 font-medium">扫码加入招新群，期待你的到来！</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Join;
