import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ActivityShowcase from '../components/ActivityShowcase';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { homeConfig } from '../config';

const Home = () => {
  const { intro } = homeConfig;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ActivityShowcase />
      
      {/* Introduction Section */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="paper-panel p-8 md:p-12 border-none shadow-lg overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pku-blue opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md">
                <img 
                  src={intro.image} 
                  alt={intro.title} 
                  className="w-full object-cover h-[400px] transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full"
            >
              <SectionHeader title={intro.title} />
              <p className="text-gray-600 leading-relaxed mb-10 text-lg whitespace-pre-line">
                {intro.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {intro.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50/80 p-5 rounded-xl border border-gray-100 hover:border-pku-red/20 transition-colors group">
                    <div className="flex items-center mb-3">
                      <div className={`w-1.5 h-6 rounded-full mr-3 ${feature.color === 'pku-red' ? 'bg-pku-red' : 'bg-pku-blue'}`}></div>
                      <h4 className="font-bold text-lg text-gray-800 group-hover:text-pku-red transition-colors">{feature.title}</h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
