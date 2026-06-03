import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { homeConfig } from '../config';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { images } = homeConfig.hero;
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // 用户偏好减弱动态、或鼠标悬停/聚焦时，暂停自动轮播
    if (paused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, paused, prefersReducedMotion]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      role="region"
      aria-roledescription="轮播图"
      aria-label="首页图片轮播"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* 屏幕阅读器播报当前轮播位置 */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        第 {current + 1} 张，共 {images.length} 张
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-4xl text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6 tracking-wide drop-shadow-lg"
          >
            {homeConfig.hero.title}
            <br />
            <span className="text-3xl md:text-5xl mt-4 block">{homeConfig.hero.subtitle}</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl font-light tracking-widest drop-shadow-md"
          >
            {homeConfig.hero.slogan}
          </motion.p>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        aria-label="上一张"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all backdrop-blur-sm z-20 group"
      >
        <ChevronLeft size={32} className="group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="下一张"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all backdrop-blur-sm z-20 group"
      >
        <ChevronRight size={32} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`跳转到第 ${idx + 1} 张`}
            aria-current={current === idx ? 'true' : undefined}
            className={`h-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
              current === idx ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
