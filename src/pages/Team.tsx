import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import Seo from '../components/Seo';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { teamConfig } from '../config';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title={teamConfig.title} description={teamConfig.subtitle} path="/team" />
      <Navbar />

      <PageHero
        title={teamConfig.title}
        subtitle={teamConfig.subtitle}
        theme="blue"
      />

      <main id="main-content" tabIndex={-1} className="flex-grow container mx-auto px-4 py-16">
        {[
          { title: '本届负责人及骨干', members: teamConfig.members },
          { title: '往届成员', members: teamConfig.formerMembers },
        ].map((group) => (
          <section key={group.title} className="mb-16">
            <SectionHeader title={group.title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {group.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-card group"
                >
                  <div className="relative pt-[100%] overflow-hidden bg-gray-100">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
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
                  <div className="p-4 text-center bg-white dark:bg-gray-800">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">{member.name}</h3>
                    <p className="text-sm text-pku-red dark:text-pku-red-light font-medium">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {teamConfig.memberLists && (
          <div className="mt-24 mb-12">
            <div className="mb-12">
              <SectionHeader 
                title={teamConfig.memberLists.title} 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamConfig.memberLists.groups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="paper-panel p-6 hover:border-pku-red/20 transition-colors"
                >
                  <h3 className="text-xl font-bold text-pku-red dark:text-pku-red-light mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                    {group.year} 届成员
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.names.map((name, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm hover:bg-pku-red hover:text-white hover:border-pku-red transition-all cursor-default"
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
            <div className="mb-12">
              <SectionHeader 
                title={teamConfig.gallery.title} 
                description={teamConfig.gallery.description}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamConfig.gallery.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-md aspect-[16/9]"
                >
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    loading="lazy"
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
