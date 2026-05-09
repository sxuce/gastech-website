import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AreasCovered from './components/AreasCovered';
import Testimonials from './components/Testimonials';
import PromoBanner from './components/PromoBanner';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen pb-16 lg:pb-0">
      <Header />
      <PromoBanner />
      <main>
        <Hero />
        <TrustedBrands />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <AreasCovered />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
