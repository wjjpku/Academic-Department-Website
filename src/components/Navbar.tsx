import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, navConfig } from '../config';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className={`text-2xl font-bold font-serif ${scrolled ? 'text-pku-red' : 'text-white'}`}>
            {siteConfig.shortTitle}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navConfig.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors hover:text-pku-red-light ${
                    scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white/90'
                  } ${isActive ? 'text-pku-red dark:text-pku-red-light font-bold' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <ThemeToggle className={scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} />
          </div>

          {/* Mobile: theme toggle + menu button */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle className={scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="移动端导航"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navConfig.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-base font-medium ${
                      isActive ? 'text-pku-red dark:text-pku-red-light' : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
