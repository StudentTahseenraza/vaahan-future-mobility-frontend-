// src/components/DashboardPreview.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const DashboardPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { label: 'Vehicle Health', value: '98%', icon: '🔧', trend: '+2%', color: '#00FFAA' },
    { label: 'Battery Status', value: '87%', icon: '🔋', trend: '-5%', color: '#00E5FF' },
    { label: 'AI Analytics', value: '124', icon: '📊', trend: '+12', color: '#4F46E5' },
    { label: 'Latency', value: '23ms', icon: '⏱️', trend: '-3ms', color: '#00FFAA' },
    { label: 'OTA Status', value: 'Active', icon: '📡', trend: 'v2.4.1', color: '#00E5FF' },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engineering <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time vehicle and system analytics at your fingertips
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-6 text-center group cursor-pointer"
            >
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="text-2xl font-orbitron font-bold mb-1" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
              <div className={`text-xs ${metric.trend.startsWith('+') ? 'text-accent' : 'text-primary'}`}>
                {metric.trend}
              </div>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full mx-auto"
                initial={{ width: 0 }}
                whileHover={{ width: '80%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Animated Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 glass-effect p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">System Performance</h3>
            <div className="text-xs text-primary">Live Data</div>
          </div>
          <div className="h-32 flex items-end gap-2">
            {[65, 78, 82, 74, 88, 92, 85, 79, 91, 86, 83, 77].map((height, idx) => (
              <motion.div
                key={idx}
                initial={{ height: 0 }}
                animate={isInView ? { height: `${height}%` } : {}}
                transition={{ delay: 0.5 + idx * 0.05, duration: 0.8 }}
                className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;