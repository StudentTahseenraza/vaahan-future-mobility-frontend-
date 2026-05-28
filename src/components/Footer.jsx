// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Vaahan International</h3>
            <p className="text-gray-500 text-sm">Engineering Tomorrow's Mobility</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Careers</a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
          >
            <svg className="w-5 h-5 text-primary group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">&copy; 2024 Vaahan International. All rights reserved. Building the future of mobility.</p>
        </div>
      </div>

      {/* Animated Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </footer>
  );
};

export default Footer;