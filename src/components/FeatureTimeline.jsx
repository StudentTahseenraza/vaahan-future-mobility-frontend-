// src/components/FeatureTimeline.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FeatureTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    { year: '2026', title: 'Software Defined Vehicle', description: 'Full SDV platform with cloud-native architecture', status: 'current' },
    { year: '2028', title: 'AI Powered Fleet', description: 'Autonomous fleet management with predictive AI', status: 'upcoming' },
    { year: '2030', title: 'Autonomous Ecosystem', description: 'Complete autonomous mobility ecosystem', status: 'future' },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Paving the way for future mobility innovations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex-1 md:pr-12 text-right">
                <div className="font-orbitron text-4xl md:text-5xl font-bold text-primary mb-2">{item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
              <div className="relative z-10 mx-4">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
                  className={`w-4 h-4 rounded-full ${
                    item.status === 'current' ? 'bg-primary' : item.status === 'upcoming' ? 'bg-secondary' : 'bg-accent'
                  } shadow-lg shadow-primary/50`}
                />
              </div>
              <div className="flex-1 md:pl-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTimeline;