import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Github, Globe, GitPullRequest, GitBranch, ArrowRight } from 'lucide-react';
import { aboutConfig } from '../config';

const About = () => {
  const { intro, author, features, techStack, contact, openSource } = aboutConfig;

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

          {/* Open Source Section - New Added */}
          {openSource && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-pku-blue border-l-4 border-pku-red pl-4">
                    {openSource.title}
                  </h2>
                  <a 
                    href={openSource.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-black transition-colors"
                  >
                    <Github size={24} className="mr-2" />
                    <span className="font-medium">Star on GitHub</span>
                  </a>
                </div>

                <div className="prose max-w-none text-gray-600 leading-relaxed mb-8">
                  {openSource.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <GitPullRequest size={20} className="mr-2 text-pku-red" />
                    如何参与贡献？
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {openSource.guide.map((step, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pku-blue text-white flex items-center justify-center text-xs font-bold mt-0.5 mr-3">
                          {idx + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                    <a 
                      href={openSource.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors"
                    >
                      <GitBranch size={16} className="mr-2" />
                      前往 GitHub 仓库
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Author Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-pku-blue mb-6 border-l-4 border-pku-red pl-4">{author.title}</h2>
            <div className="prose max-w-none text-gray-600 leading-relaxed">
              {author.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
              <div className="flex space-x-4 mt-6">
                {author.social.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-pku-blue hover:text-pku-red transition-colors bg-gray-50 px-4 py-2 rounded-lg"
                  >
                    {item.name === 'GitHub' ? <Github size={20} /> : <Globe size={20} />}
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
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
            transition={{ delay: 0.25 }}
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
