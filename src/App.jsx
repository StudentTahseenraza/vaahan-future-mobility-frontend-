// src/App.jsx (final)
import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Services from './components/Services';
import Innovation from './components/Innovation';
import FeatureTimeline from './components/FeatureTimeline';
import MobilityExperience from './components/MobilityExperience';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="noise-bg" />
      <CursorSpotlight />
      <Header />
      <Hero />
      <Statistics />
      <About />
      <Services />
      <Innovation />
      <FeatureTimeline />
      <MobilityExperience />
      <DashboardPreview />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;