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
    <div className="bg-white text-gray-700 font-sans">
      <Header />
      <PromoBanner />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="trusted-brands">
          <TrustedBrands />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="areas-covered">
          <AreasCovered />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;