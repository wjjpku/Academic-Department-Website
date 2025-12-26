import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { teamMembers } from '../data/team';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Team = () => {
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
            团队风采
          </motion.h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            一群热爱数学、乐于奉献的伙伴，共同打造温暖的学术家园
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative pt-[100%] overflow-hidden bg-gray-100">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <User size={64} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-light">
                    {member.description || '北京大学数学科学学院学生会学术组'}
                  </p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sm text-pku-red font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
