// src/components/Contact.jsx
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your mobility solutions? Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map / Location */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect p-6"
          >
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-primary">📍</span>
                <span>123 Innovation Drive, Silicon Valley, CA 94025</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-primary">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-primary">✉️</span>
                <span>hello@vaahan.com</span>
              </div>
            </div>
            {/* Animated Map Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                style={{
                  background: 'radial-gradient(circle at 30% 40%, rgba(0,229,255,0.3) 0%, transparent 50%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
                  <div className="w-4 h-4 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-effect p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                {submitted && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 z-20"
                  >
                    <span className="text-accent">✓ Sent!</span>
                  </motion.div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;