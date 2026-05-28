// src/components/Testimonials.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, AutoTech Solutions',
      content: 'Vaahan International has transformed our approach to software-defined vehicles. Their expertise is unmatched.',
      rating: 5,
      avatar: '👩‍💻',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Innovation, EV Motors',
      content: 'The team delivered beyond expectations. The AI integration platform is revolutionary for our fleet.',
      rating: 5,
      avatar: '👨‍🔧',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, Mobility Labs',
      content: 'Cutting-edge solutions with exceptional support. A true partner in automotive innovation.',
      rating: 5,
      avatar: '👩‍🔬',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What our partners say about our technology and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-6 relative group"
            >
              <div className="absolute top-4 right-4 text-primary text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                "
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300"
                whileHover={{ boxShadow: '0 0 40px rgba(0,229,255,0.1)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;