
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AreasCovered from './components/AreasCovered';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-700 font-sans">
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
    </div>
  );
};

export default App;
