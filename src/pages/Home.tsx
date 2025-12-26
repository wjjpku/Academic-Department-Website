import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ActivityShowcase from '../components/ActivityShowcase';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { homeConfig } from '../config';

const Home = () => {
  const { intro } = homeConfig;

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
                src={intro.image} 
                alt={intro.title} 
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
                {intro.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg whitespace-pre-line">
                {intro.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {intro.features.map((feature, index) => (
                  <div key={index} className={`border-l-4 ${feature.color === 'pku-red' ? 'border-pku-red' : 'border-pku-blue'} pl-4`}>
                    <h4 className="font-bold text-xl mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                ))}
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
