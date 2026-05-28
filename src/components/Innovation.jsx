// src/components/Innovation.jsx - Ensure it has the innovation id
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Innovation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Connected Mobility', icon: '🌐', content: { title: 'Connected Vehicle Architecture', description: 'Seamless integration between cloud, middleware, and vehicle systems enabling real-time data exchange and remote updates.', diagram: ['Cloud', '↓', 'Middleware', '↓', 'Vehicle Gateway', '↓', 'ECUs', '↓', 'Sensors'] } },
    { title: 'AI Systems', icon: '🧠', content: { title: 'Neural Decision Engine', description: 'Advanced AI models for autonomous decision making, path planning, and predictive maintenance.', diagram: ['Data Input', '→', 'ML Models', '→', 'Inference', '→', 'Action'] } },
    { title: 'Cloud Integration', icon: '☁️', content: { title: 'Edge-Cloud Platform', description: 'Hybrid edge computing with cloud orchestration for low-latency vehicle operations.', diagram: ['Edge Nodes', '↗', 'Cloud', '↖', 'Analytics'] } },
    { title: 'Embedded Control', icon: '🔌', content: { title: 'Real-time Control Systems', description: 'Low-latency embedded software for critical vehicle functions and safety systems.', diagram: ['Sensors', '→', 'ECU', '→', 'Actuators', '→', 'Feedback'] } },
    { title: 'Digital Twin', icon: '🔄', content: { title: 'Virtual Vehicle Simulation', description: 'Complete digital replication of vehicle systems for testing and validation.', diagram: ['Physical', '↔', 'Digital', '↔', 'Simulation'] } },
  ];

  return (
    <section id="innovation" ref={ref} className="py-24 px-6 md:px-20 relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built For The <span className="gradient-text">Future</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the technologies that power tomorrow's mobility
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'glass-effect text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="font-medium">{tab.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-effect p-8 md:p-12 rounded-3xl"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                  {tabs[activeTab].content.title}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {tabs[activeTab].content.description}
                </p>
                <div className="space-y-4">
                  {tabs[activeTab].content.diagram.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-orbitron text-sm">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="h-12 flex items-center px-4 bg-white/5 rounded-lg border border-white/10 font-mono text-sm">
                          {item}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Animated Visualization */}
              <div className="relative h-64 md:h-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-3xl" />
                <div className="relative z-10 flex flex-wrap justify-center gap-4">
                  {tabs[activeTab].content.diagram.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1, type: 'spring' }}
                      className="px-4 py-2 glass-effect rounded-lg text-center"
                    >
                      <span className="text-sm font-orbitron text-primary">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-primary/30 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-secondary/30 rounded-full"
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'linear', delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Innovation;