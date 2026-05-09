import React, { useState } from 'react';
import type { Service } from '../types';
import {
  BoilerIcon, WrenchIcon, ShieldCheckIcon, FireIcon, HomeIcon,
  DocumentTextIcon, WaterDropIcon, TapIcon, ToiletIcon, ShowerIcon,
} from './IconComponents';

const WA = 'https://wa.me/447809763590';

const gasServicesData: Service[] = [
  { icon: <BoilerIcon className="h-7 w-7" />, title: 'Boiler Installation Leicester', description: 'Expert installation of high-efficiency boilers from leading brands to keep your home warm and energy-efficient.' },
  { icon: <WrenchIcon className="h-7 w-7" />, title: 'Boiler Repair Leicester', description: 'Fast and reliable boiler repair in Leicester to get your heating and hot water back running quickly.' },
  { icon: <ShieldCheckIcon className="h-7 w-7" />, title: 'Boiler Service Leicester', description: 'Annual boiler servicing to ensure your system is safe, efficient, and reliable all year round. From £64.99.' },
  { icon: <DocumentTextIcon className="h-7 w-7" />, title: 'Landlord Certificate Leicester', description: 'Gas Safety Certificates (CP12) for landlords ensuring your property is fully compliant and safe. From £49.99.' },
  { icon: <FireIcon className="h-7 w-7" />, title: 'Gas Fire Services Leicester', description: 'Installation, servicing, and repair of all types of gas fires and surrounds throughout Leicestershire.' },
  { icon: <HomeIcon className="h-7 w-7" />, title: 'Central Heating Leicester', description: 'Full central heating system installations, power flushing, and radiator repairs for optimal home comfort.' },
];

const plumbingServicesData: Service[] = [
  { icon: <WaterDropIcon className="h-7 w-7" />, title: 'Emergency Plumbing Leicester', description: '24/7 emergency response for leaks, bursts, and all urgent plumbing issues in Leicester.' },
  { icon: <TapIcon className="h-7 w-7" />, title: 'Tap Installation & Repair Leicester', description: 'Fixing dripping taps or installing stylish new ones for your kitchen and bathroom.' },
  { icon: <ToiletIcon className="h-7 w-7" />, title: 'Toilet Repair & Installation Leicester', description: 'Resolving all toilet-related problems from blockages to new installations throughout Leicester.' },
  { icon: <ShowerIcon className="h-7 w-7" />, title: 'Shower & Bath Services Leicester', description: 'Professional installation and repair of showers, baths, and associated pipework.' },
  { icon: <WrenchIcon className="h-7 w-7" />, title: 'Leak Detection & Repair Leicester', description: 'Advanced detection to find and fix hidden leaks in your pipework efficiently.' },
  { icon: <HomeIcon className="h-7 w-7" />, title: 'General Pipework Leicester', description: 'Comprehensive services for pipe repairs, replacements, and clearing stubborn blockages.' },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <div
    className="card card-hover card-accent p-7 flex flex-col group"
    style={{ transitionDelay: `${index * 0.06}s` }}
  >
    {/* Icon */}
    <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-secondary-50 group-hover:text-secondary-600 transition-all duration-300">
      {service.icon}
    </div>

    <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-primary-700 transition-colors duration-300 leading-snug">
      {service.title}
    </h3>

    <p className="text-gray-500 text-sm leading-relaxed flex-grow">
      {service.description}
    </p>

    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center space-x-1.5 text-sm font-semibold text-primary-600 group-hover:text-secondary-600 transition-colors duration-300"
      aria-label={`Get a quote for ${service.title}`}
    >
      <span>Get a Quote</span>
      <svg
        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gas' | 'plumbing'>('gas');
  const services = activeTab === 'gas' ? gasServicesData : plumbingServicesData;

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden scroll-mt-24">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-50 rounded-full opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-50 rounded-full opacity-60 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <div className="section-label bg-primary-50 text-primary-700 mb-5">
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Professional{' '}
            <span className="gradient-text">Gas & Plumbing</span>
            <br />Services in Leicester
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From emergency boiler repairs to brand new installations — complete gas and heating
            solutions delivered to the highest standards of safety and quality.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12 reveal">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 gap-1">
            {(['gas', 'plumbing'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  activeTab === tab
                    ? 'bg-white text-primary-700 shadow-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                aria-pressed={activeTab === tab}
              >
                {tab === 'gas' ? 'Gas Services' : 'Plumbing Services'}
              </button>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 0.07}s` }}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 reveal">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 to-primary-950 p-10 md:p-14 text-center">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Need Emergency Service in Leicester?
              </h3>
              <p className="text-blue-200/80 mb-8 max-w-xl mx-auto">
                Don't wait — small issues become big problems. Contact us now for fast, reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center space-x-2.5"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                  </svg>
                  <span>Get Emergency Quote</span>
                </a>
                <a
                  href="tel:07809763590"
                  className="btn-outline flex items-center justify-center space-x-2.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
