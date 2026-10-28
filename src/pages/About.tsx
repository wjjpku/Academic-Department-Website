import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Seo from '../components/Seo';
import { motion } from 'framer-motion';
import { Github, Globe, GitPullRequest, GitBranch, ArrowRight, Mail } from 'lucide-react';
import { aboutConfig, joinConfig } from '../config';

const About = () => {
  const { intro, author, features, techStack, contact: aboutContact, openSource } = aboutConfig;
  const { benefits, contact: joinContact } = joinConfig;

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="关于与加入"
        description="了解学术组的工作与本站，或加入我们——这里有最有趣的活动、最温暖的伙伴、最广阔的舞台。"
        path="/about"
      />
      <Navbar />

      <PageHero
        title="关于与加入"
        subtitle="了解我们的工作，或者成为我们的一员"
        theme="blue"
      />

      <main id="main-content" tabIndex={-1} className="flex-grow container mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-16">
          {/* Intro Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="paper-panel p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-pku-blue opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <SectionHeader title={intro.title} />
            <div className="prose max-w-none text-gray-600 dark:text-gray-300 leading-relaxed text-lg relative z-10">
              {intro.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Join Us Benefits Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="text-center mb-12 flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{joinConfig.benefitsTitle}</h2>
              <div className="w-16 h-1.5 bg-pku-red rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="paper-panel p-6 hover:border-pku-red/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="mb-5 flex justify-center">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl group-hover:bg-red-50 dark:group-hover:bg-gray-700 transition-colors duration-300 shadow-sm">
                      <item.icon className={`w-8 h-8 ${item.iconColor} group-hover:scale-110 transition-transform`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm text-center">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* How to Join Section */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="paper-panel overflow-hidden max-w-5xl mx-auto border-none shadow-xl"
          >
            <div className="p-8 md:p-12 bg-white dark:bg-gray-800">
              <SectionHeader title={joinContact.title} />
              <p className="mt-2 text-gray-600 dark:text-gray-300">有意加入学术组的同学，欢迎通过邮箱联系我们。</p>
              {joinContact.methods.map(method => (
                <a key={method.value} href={`mailto:${method.value}`} className="inline-flex items-center gap-3 mt-6 rounded-xl bg-blue-50 dark:bg-gray-700 px-5 py-4 text-pku-blue dark:text-blue-200 hover:text-pku-red transition-colors break-all">
                  <Mail size={21} className="shrink-0" />
                  <span>{method.value}</span>
                </a>
              ))}
            </div>
          </motion.section>

          {/* Open Source Section */}
          {openSource && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="paper-panel overflow-hidden border-none"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <SectionHeader title={openSource.title} />
                  <a 
                    href={openSource.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white rounded-full transition-colors border border-gray-200 dark:border-gray-600"
                  >
                    <Github size={18} className="mr-2" />
                    <span className="font-medium text-sm">Star on GitHub</span>
                  </a>
                </div>

                <div className="prose max-w-none text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {openSource.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/40 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
                    <GitPullRequest size={20} className="mr-2 text-pku-red" />
                    如何参与贡献？
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {openSource.guide.map((step, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pku-blue text-white flex items-center justify-center text-xs font-bold mt-0.5 mr-3 shadow-sm">
                          {idx + 1}
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                    <a 
                      href={openSource.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-black hover:shadow-md transition-all duration-200"
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
            viewport={{ once: true }}
            className="paper-panel p-8 md:p-10"
          >
            <SectionHeader title={author.title} />
            <div className="prose max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
              {author.content.map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-4 mt-8">
                {author.social.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-pku-blue hover:text-white hover:bg-pku-blue transition-colors bg-blue-50 px-5 py-2.5 rounded-full font-medium shadow-sm"
                  >
                    {item.name === 'GitHub' ? <Github size={18} /> : <Globe size={18} />}
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="paper-panel p-8"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <div className="w-1.5 h-5 bg-pku-red mr-3 rounded-full"></div>
                {features.title}
              </h2>
              <ul className="space-y-3">
                {features.list.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300 bg-gray-50/80 dark:bg-gray-700/40 p-3.5 rounded-xl border border-gray-100 dark:border-gray-700">
                    <span className="text-green-500 mr-3 font-bold mt-0.5">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Tech Stack Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="paper-panel p-8"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <div className="w-1.5 h-5 bg-pku-red mr-3 rounded-full"></div>
                {techStack.title}
              </h2>
              <div className="bg-[#1e1e1e] text-gray-300 p-6 rounded-xl font-mono text-sm shadow-inner h-[calc(100%-4rem)]">
                <div className="flex items-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <p className="mb-2"><span className="text-blue-400">const</span> <span className="text-yellow-300">stack</span> = {`{`}</p>
                <div className="pl-4 space-y-1.5">
                  <p><span className="text-blue-300">framework</span>: <span className="text-green-400">'React 19'</span>,</p>
                  <p><span className="text-blue-300">buildTool</span>: <span className="text-green-400">'Vite'</span>,</p>
                  <p><span className="text-blue-300">styling</span>: <span className="text-green-400">'Tailwind CSS'</span>,</p>
                  <p><span className="text-blue-300">animation</span>: <span className="text-green-400">'Framer Motion'</span>,</p>
                  <p><span className="text-blue-300">typeSafety</span>: <span className="text-green-400">'TypeScript'</span></p>
                </div>
                <p className="mt-2">{`}`};</p>
              </div>
            </motion.section>
          </div>

          {/* Contact Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pku-blue to-blue-900 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-2xl font-bold mb-6 relative z-10">{aboutContact.title}</h2>
            <div className="space-y-4 relative z-10">
              {aboutContact.info.map((item, idx) => (
                <p key={idx} className="text-white/90">
                  <strong className="text-white">{item.label}:</strong> {item.value}
                </p>
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
