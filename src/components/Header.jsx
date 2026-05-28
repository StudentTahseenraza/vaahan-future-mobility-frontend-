// src/components/Header.jsx - Fixed with Innovation section
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'services', 'innovation', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 py-3' 
            : 'bg-transparent py-5'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(5, 8, 22, 0.9)' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                    <span className="text-white font-bold text-xs">V</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    Vaahan
                  </h1>
                  <p className="text-[8px] tracking-wider text-primary/60">INTERNATIONAL</p>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <ThemeToggle />
              
              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="hidden md:block px-5 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative w-10 h-10 rounded-full glass-effect flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-5 h-5">
                  <motion.span
                    className="absolute w-5 h-0.5 bg-white rounded-full"
                    animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute w-5 h-0.5 bg-white rounded-full"
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute w-5 h-0.5 bg-white rounded-full"
                    animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-[#050816]/95 backdrop-blur-xl z-40 pt-20 px-6 shadow-2xl border-l border-white/10 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === item.href.substring(1)
                      ? 'bg-primary/20 text-primary'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                onClick={() => { scrollToSection('#contact'); setMobileMenuOpen(false); }}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Get Started
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;