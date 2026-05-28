// src/components/Hero.jsx (updated for theme compatibility)
import { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import InteractiveVehicle from './InteractiveVehicle';

const Hero = () => {
  const heroRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className="relative h-screen overflow-hidden pt-16">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0a0a2a] to-[#050816] light:from-gray-50 light:via-gray-100 light:to-gray-50 transition-colors duration-300">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
          <Suspense fallback={null}>
            <Environment preset="night" />
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <InteractiveVehicle />
            </Float>
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex items-center px-6 md:px-20"
      >
        <div className="max-w-3xl">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-primary font-orbitron text-sm tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/30 light:bg-primary/5">
              Engineering Tomorrow's Mobility
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Future Mobility
            <span className="gradient-text block">Starts Here</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 light:text-gray-600 mb-8 max-w-xl">
            Engineering software for Software Defined Vehicles. 
            Building the next generation of automotive technology with AI, 
            embedded systems, and connected mobility.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10">Explore Innovation</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400 light:text-gray-500">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 light:border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;