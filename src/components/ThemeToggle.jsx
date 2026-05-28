// src/components/ThemeToggle.jsx - Fixed version
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.body.classList.add('light-mode');
    } else if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.remove('light-mode');
    } else {
      // Default to dark mode
      setIsDark(true);
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const newIsDark = !isDark;
      setIsDark(newIsDark);
      
      if (newIsDark) {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      }
      
      setTimeout(() => setIsAnimating(false), 500);
    }, 200);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full glass-effect flex items-center justify-center overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-md"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated ring on toggle */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;