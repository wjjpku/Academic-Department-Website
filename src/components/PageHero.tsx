import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  theme?: 'red' | 'blue';
}

const PageHero = ({ title, subtitle, children, theme = 'blue' }: PageHeroProps) => {
  const bgClass = theme === 'red' ? 'bg-pku-red-dark' : 'bg-pku-blue';

  return (
    <div className={`${bgClass} pt-28 pb-16 text-white text-center relative overflow-hidden shadow-inner`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-serif mb-4 tracking-wide"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>
        )}
        
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PageHero;