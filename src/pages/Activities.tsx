import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ActivityCard from '../components/ActivityCard';
import { motion } from 'framer-motion';
import { activitiesConfig } from '../config';

const Activities = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-pku-blue pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-4"
          >
            {activitiesConfig.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            {activitiesConfig.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Activities Grid */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {(activitiesConfig.activities || []).map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Activities;
