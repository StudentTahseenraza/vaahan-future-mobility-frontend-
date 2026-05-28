// src/components/Services.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      title: 'SDV',
      subtitle: 'Software Defined Vehicles',
      description: 'Vehicle OS visualization and complete software-defined architecture for next-gen vehicles.',
      icon: '🚗',
      gradient: 'from-primary to-secondary',
      features: ['Cloud Integration', 'Middleware', 'OTA Updates'],
    },
    {
      title: 'Automotive Software',
      subtitle: 'Intelligent Systems',
      description: 'Code particles and real-time software solutions for automotive applications.',
      icon: '💻',
      gradient: 'from-secondary to-accent',
      features: ['Real-time Processing', 'Safety Critical', 'ISO 26262'],
    },
    {
      title: 'Embedded Systems',
      subtitle: 'Hardware Integration',
      description: 'Circuit animation and low-level firmware development for automotive ECUs.',
      icon: '🔧',
      gradient: 'from-accent to-primary',
      features: ['Firmware', 'RTOS', 'CAN/LIN'],
    },
    {
      title: 'AI Mobility',
      subtitle: 'Neural Networks',
      description: 'Neural animation and AI-driven decision making for autonomous systems.',
      icon: '🧠',
      gradient: 'from-primary to-accent',
      features: ['ML Models', 'Computer Vision', 'Predictive Analytics'],
    },
    {
      title: 'EV Ecosystem',
      subtitle: 'Electric Future',
      description: 'Battery flow visualization and complete EV infrastructure solutions.',
      icon: '⚡',
      gradient: 'from-secondary to-primary',
      features: ['BMS', 'Charging', 'Energy Management'],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized expertise across the entire automotive technology stack
          </p>
        </motion.div>

        <div className="relative overflow-x-auto pb-8 scrollbar-thin">
          <div className="flex gap-6 min-w-max px-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="w-80 glass-effect p-6 group cursor-pointer transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                  {service.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3">{service.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300"
                  whileHover={{ boxShadow: '0 0 30px rgba(0,229,255,0.2)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;