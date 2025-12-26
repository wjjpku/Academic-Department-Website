import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { aboutConfig } from '../config';

const About = () => {
  const { intro, features, techStack, contact } = aboutConfig;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="bg-pku-blue pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            {aboutConfig.title}
          </motion.h1>
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
            <h2 className="text-2xl font-bold text-pku-blue mb-6 border-l-4 border-pku-red pl-4">{intro.title}</h2>
            <div className="prose max-w-none text-gray-600 leading-relaxed">
              {intro.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-pku-blue mb-6 border-l-4 border-pku-red pl-4">{features.title}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.list.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
                  <span className="text-green-500 mr-3 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-pku-blue mb-6 border-l-4 border-pku-red pl-4">{techStack.title}</h2>
            <div className="bg-gray-900 text-gray-300 p-6 rounded-lg font-mono text-sm">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="mb-2"><span className="text-blue-400">const</span> stack = {`{`}</p>
              <div className="pl-4 space-y-1">
                <p>framework: <span className="text-green-400">'React 19'</span>,</p>
                <p>buildTool: <span className="text-green-400">'Vite'</span>,</p>
                <p>styling: <span className="text-green-400">'Tailwind CSS'</span>,</p>
                <p>animation: <span className="text-green-400">'Framer Motion'</span>,</p>
                <p>typeSafety: <span className="text-green-400">'TypeScript'</span></p>
              </div>
              <p>{`}`};</p>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-pku-blue to-blue-900 text-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6">{contact.title}</h2>
            <div className="space-y-4">
              {contact.info.map((item, idx) => (
                <p key={idx}><strong>{item.label}:</strong> {item.value}</p>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
