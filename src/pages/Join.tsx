import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import { joinConfig } from '../config';

const Join = () => {
  const { hero, benefits, contact } = joinConfig;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="relative h-[60vh] bg-pku-blue overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${hero.bgImage}')` }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            {hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-light opacity-90"
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">{joinConfig.benefitsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-pku-red"
              >
                <div className="mb-6 flex justify-center">
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <img src={contact.qrImage} alt="招新群二维码" className="max-w-[200px] rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6 text-pku-blue">{contact.title}</h2>
              <div className="space-y-6">
                {contact.methods.map((method, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className={`p-3 rounded-full mr-4 ${method.type === 'wechat' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                      {method.type === 'wechat' ? <MessageSquare size={20} /> : <Mail size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{method.label}</h4>
                      {method.isLink ? (
                        <a href={`mailto:${method.value}`} className="text-pku-red hover:underline mt-1 block">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 mt-1">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-500 font-medium">{contact.qrTip}</p>
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
