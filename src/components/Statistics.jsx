// src/components/Statistics.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from './CountUp';

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 50, suffix: '+', label: 'Innovation Partners', icon: '🤝' },
    { value: 10, suffix: 'M+', label: 'Connected Systems', icon: '🌐' },
    { value: 100, suffix: '%', label: 'Future Ready', icon: '⚡' },
    { value: 24, suffix: '/7', label: 'Engineering Support', icon: '🛡️' },
  ];

  return (
    <section ref={ref} className="py-16 px-6 md:px-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center glass-effect p-6 hover-glow transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-orbitron text-3xl md:text-4xl font-bold text-primary mb-2">
                {isInView ? <CountUp end={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-primary to-secondary mt-4 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: '60%' } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;