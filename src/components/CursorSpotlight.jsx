// src/components/CursorSpotlight.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('button, a, .card, .service-card');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, rgba(79,70,229,0.08) 50%, transparent 70%)',
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 20,
        }}
        style={{
          width: '16px',
          height: '16px',
          background: '#00E5FF',
          borderRadius: '50%',
          boxShadow: '0 0 20px #00E5FF',
        }}
      />
    </>
  );
};

export default CursorSpotlight;