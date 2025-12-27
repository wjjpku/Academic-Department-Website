import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { teamConfig } from '../config';

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
            {teamConfig.title}
          </motion.h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            {teamConfig.subtitle}
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {(teamConfig.members || []).map((member, index) => (
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
                    {member.description || teamConfig.defaultRoleDescription}
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

        {teamConfig.memberLists && (
          <div className="mt-24 mb-12">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold font-serif text-gray-900 mb-4"
              >
                {teamConfig.memberLists.title}
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamConfig.memberLists.groups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <h3 className="text-xl font-bold text-pku-red mb-4 border-b pb-2">
                    {group.year} 届成员
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.names.map((name, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm hover:bg-pku-red hover:text-white transition-colors cursor-default"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {teamConfig.gallery && (
          <div className="mt-24 mb-12">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold font-serif text-gray-900 mb-4"
              >
                {teamConfig.gallery.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                {teamConfig.gallery.description}
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamConfig.gallery.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-md aspect-[16/9]"
                >
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Team;
