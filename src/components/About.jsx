// src/components/About.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    { title: 'Vision', description: 'To revolutionize mobility through intelligent, connected, and sustainable vehicle technologies.', icon: '👁️', color: '#00E5FF' },
    { title: 'Innovation', description: 'Pushing boundaries with AI-driven software and next-generation embedded systems.', icon: '💡', color: '#4F46E5' },
    { title: 'Scalability', description: 'Building platforms that grow with the evolving needs of global automotive ecosystems.', icon: '📈', color: '#00FFAA' },
    { title: 'Sustainability', description: 'Commitment to eco-friendly mobility solutions and reduced carbon footprint.', icon: '🌱', color: '#00E5FF' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engineering{' '}
            <span className="gradient-text">Story</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building the future of automotive technology with cutting-edge solutions and unparalleled expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
              <div className="space-y-6">
                {[
                  { year: '2020', title: 'Founded', description: 'Started with a vision for SDV' },
                  { year: '2022', title: 'Global Expansion', description: 'Reached 10+ countries' },
                  { year: '2024', title: 'AI Integration', description: 'Launched AI-powered solutions' },
                  { year: '2026', title: 'Future Ready', description: 'Leading EV ecosystem' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="font-orbitron text-primary font-bold text-lg min-w-[80px]">{item.year}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect p-6 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;