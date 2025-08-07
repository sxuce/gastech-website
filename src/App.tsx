import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AreasCovered from './components/AreasCovered';
import Testimonials from './components/Testimonials';
import PromoBanner from './components/PromoBanner';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans min-h-screen">
      <Header />
      <PromoBanner />
      <main className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <section className="relative">
          <Hero />
        </section>
        
        <section className="relative">
          <TrustedBrands />
        </section>
        
        <section className="relative">
          <Services />
        </section>
        
        <section className="relative">
          <WhyChooseUs />
        </section>
        
        <section className="relative">
          <Testimonials />
        </section>
        
        <section className="relative">
          <AreasCovered />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;