// src/components/MobilityExperience.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobilityExperience = () => {
  const [selectedType, setSelectedType] = useState('SDV');
  const [particles, setParticles] = useState([]);

  const types = [
    { id: 'SDV', name: 'Software Defined Vehicle', icon: '🚗', bgGradient: 'from-primary/20 via-primary/5 to-transparent', accent: '#00E5FF' },
    { id: 'AI', name: 'Artificial Intelligence', icon: '🧠', bgGradient: 'from-secondary/20 via-secondary/5 to-transparent', accent: '#4F46E5' },
    { id: 'EV', name: 'Electric Vehicle', icon: '⚡', bgGradient: 'from-accent/20 via-accent/5 to-transparent', accent: '#00FFAA' },
  ];

  useEffect(() => {
    // Generate particles when type changes
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [selectedType]);

  const getContent = () => {
    switch (selectedType) {
      case 'SDV':
        return {
          title: 'Software Defined Vehicle Platform',
          metrics: [
            { label: 'OTA Updates', value: '2M+' },
            { label: 'Lines of Code', value: '50M+' },
            { label: 'Active Vehicles', value: '100K+' },
          ],
          features: ['Cloud-Native Architecture', 'Real-time Middleware', 'Over-the-Air Updates', 'Vehicle APIs'],
        };
      case 'AI':
        return {
          title: 'Neural Mobility Intelligence',
          metrics: [
            { label: 'AI Models', value: '250+' },
            { label: 'Inference Speed', value: '<10ms' },
            { label: 'Accuracy', value: '99.9%' },
          ],
          features: ['Predictive Analytics', 'Computer Vision', 'Natural Language', 'Reinforcement Learning'],
        };
      case 'EV':
        return {
          title: 'Electric Vehicle Ecosystem',
          metrics: [
            { label: 'Battery Life', value: '500k mi' },
            { label: 'Charging Speed', value: '350kW' },
            { label: 'Range', value: '500mi+' },
          ],
          features: ['Battery Management', 'Thermal Control', 'Energy Recovery', 'Smart Charging'],
        };
      default:
        return {};
    }
  };

  const content = getContent();

  return (
    <section className="py-24 px-6 md:px-20 relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${types.find(t => t.id === selectedType)?.bgGradient} transition-all duration-700`} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Future <span className="gradient-text">Mobility Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your mobility type and experience the future
          </p>
        </motion.div>

        {/* Type Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {types.map((type) => (
            <motion.button
              key={type.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedType(type.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                selectedType === type.id
                  ? `bg-gradient-to-r from-${type.id === 'SDV' ? 'primary' : type.id === 'AI' ? 'secondary' : 'accent'} to-${type.id === 'SDV' ? 'secondary' : type.id === 'AI' ? 'accent' : 'primary'} text-white shadow-lg`
                  : 'glass-effect text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-xl">{type.icon}</span>
              <span className="font-medium">{type.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="glass-effect p-8 md:p-12 rounded-3xl"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                  {content?.title}
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {content?.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="font-orbitron text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-3">
                  {content?.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 p-3 glass-effect rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Particle Animation */}
              <div className="relative h-64 md:h-auto bg-black/30 rounded-2xl overflow-hidden">
                {particles.map((particle, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute rounded-full"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      width: particle.size,
                      height: particle.size,
                      backgroundColor: types.find(t => t.id === selectedType)?.accent,
                    }}
                    animate={{
                      y: [0, -50, 0],
                      x: [0, (Math.random() - 0.5) * 50, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">{types.find(t => t.id === selectedType)?.icon}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MobilityExperience;