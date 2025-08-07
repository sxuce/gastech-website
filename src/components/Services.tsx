import React, { useState } from 'react';
import type { Service } from '../types';
import { BoilerIcon, WrenchIcon, ShieldCheckIcon, FireIcon, HomeIcon, DocumentTextIcon, WaterDropIcon, TapIcon, ToiletIcon, ShowerIcon } from './IconComponents';

const gasServicesData: Service[] = [
  {
    icon: <BoilerIcon className="h-12 w-12 text-primary-600 mb-4" />,
    title: 'Boiler Installation',
    description: 'Expert installation of high-efficiency boilers from leading brands to keep your home warm.',
  },
  {
    icon: <WrenchIcon className="h-12 w-12 text-primary-600 mb-4" />,
    title: 'Boiler Repair',
    description: 'Fast and reliable repair services to get your heating and hot water back up and running.',
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-primary-600 mb-4" />,
    title: 'Boiler Servicing',
    description: 'Annual servicing to ensure your boiler is safe, efficient, and reliable all year round.',
  },
  {
    icon: <DocumentTextIcon className="h-12 w-12 text-primary-600 mb-4" />,
    title: 'Landlord Certificates',
    description: 'Gas Safety Certificates (CP12) for landlords, ensuring your property is compliant and safe.',
  },
  {
    icon: <FireIcon className="h-12 w-12 text-primary-600 mb-4" />,
    title: 'Gas Fire Services',
    description: 'Installation, servicing, and repair of all types of gas fires and surrounds.',
  },
  {
    icon: <HomeIcon className="h-12 w-12 text-primary-600 mb-4" />,
    title: 'Central Heating',
    description: 'Full central heating system installations, power flushing, and radiator repairs.',
  },
];

const plumbingServicesData: Service[] = [
    {
      icon: <WaterDropIcon className="h-12 w-12 text-primary-600 mb-4" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency response for leaks, bursts, and all urgent plumbing issues.',
    },
    {
      icon: <TapIcon className="h-12 w-12 text-primary-600 mb-4" />,
      title: 'Tap Installation & Repair',
      description: 'Fixing dripping taps or installing stylish new ones for your kitchen and bathroom.',
    },
    {
      icon: <ToiletIcon className="h-12 w-12 text-primary-600 mb-4" />,
      title: 'Toilet Repair & Installation',
      description: 'Resolving all toilet-related problems from blockages to new installations.',
    },
    {
      icon: <ShowerIcon className="h-12 w-12 text-primary-600 mb-4" />,
      title: 'Shower & Bath Services',
      description: 'Professional installation and repair of showers, baths, and associated pipework.',
    },
    {
        icon: <WrenchIcon className="h-12 w-12 text-primary-600 mb-4" />,
        title: 'Leak Detection & Repair',
        description: 'Advanced detection to find and fix hidden leaks in your pipework efficiently.',
    },
    {
      icon: <HomeIcon className="h-12 w-12 text-primary-600 mb-4" />,
      title: 'General Pipework',
      description: 'Comprehensive services for pipe repairs, replacements, and clearing stubborn blockages.',
    },
  ];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <div 
    className="card card-hover p-8 h-full flex flex-col items-center text-center group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300 shadow-lg">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-gray-600 flex-grow leading-relaxed">
      {service.description}
    </p>
    <a 
      href="https://wa.me/447809763590" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="mt-6 font-semibold text-primary-600 hover:text-primary-800 group/link flex items-center space-x-2 transition-all duration-300 hover:translate-x-1"
    >
      <span>Get a Quote</span>
      <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

const Services: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'gas' | 'plumbing'>('gas');

    const servicesToDisplay = activeTab === 'gas' ? gasServicesData : plumbingServicesData;

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden scroll-mt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional{' '}
            <span className="gradient-text">Gas & Plumbing</span>{' '}
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to brand new installations, we provide a complete range of gas and heating solutions 
            with the highest standards of safety and quality.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center space-x-2 mb-16">
          <button
            onClick={() => setActiveTab('gas')}
            className={`relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              activeTab === 'gas'
                ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-primary-300'
            }`}
            aria-pressed={activeTab === 'gas'}
          >
            <span className="relative z-10">Gas Services</span>
            {activeTab === 'gas' && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('plumbing')}
            className={`relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              activeTab === 'plumbing'
                ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-primary-300'
            }`}
            aria-pressed={activeTab === 'plumbing'}
          >
            <span className="relative z-10">Plumbing Services</span>
            {activeTab === 'plumbing' && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl"></div>
            )}
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Emergency Service?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't wait for a small issue to become a big problem. Contact us now for fast, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/447809763590"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                </svg>
                <span>Get Emergency Quote</span>
              </a>
              <a 
                href="tel:07809763590"
                className="btn-outline flex items-center justify-center space-x-3"
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
    </section>
  );
};

export default Services;