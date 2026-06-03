import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  theme?: 'red' | 'blue';
}

const PageHero = ({ title, subtitle, children, theme = 'blue' }: PageHeroProps) => {
  const bgClass = theme === 'red'
    ? 'bg-gradient-to-br from-pku-red-dark via-pku-red-dark to-[#48000a]'
    : 'bg-gradient-to-br from-pku-blue via-pku-blue to-[#001a3a]';

  return (
    <div className={`${bgClass} pt-28 pb-16 text-white text-center relative overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>
      {/* 底部细微高光，与下方内容衔接更柔和 */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-serif mb-5 tracking-tightish"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-white/70 to-transparent"
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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