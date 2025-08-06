import React, { useState } from 'react';
import type { Service } from '../types';
import { BoilerIcon, WrenchIcon, ShieldCheckIcon, FireIcon, HomeIcon, DocumentTextIcon, WaterDropIcon, TapIcon, ToiletIcon, ShowerIcon } from './IconComponents';

const gasServicesData: Service[] = [
  {
    icon: <BoilerIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Boiler Installation',
    description: 'Expert installation of high-efficiency boilers from leading brands to keep your home warm.',
  },
  {
    icon: <WrenchIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Boiler Repair',
    description: 'Fast and reliable repair services to get your heating and hot water back up and running.',
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Boiler Servicing',
    description: 'Annual servicing to ensure your boiler is safe, efficient, and reliable all year round.',
  },
  {
    icon: <DocumentTextIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Landlord Certificates',
    description: 'Gas Safety Certificates (CP12) for landlords, ensuring your property is compliant and safe.',
  },
  {
    icon: <FireIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Gas Fire Services',
    description: 'Installation, servicing, and repair of all types of gas fires and surrounds.',
  },
  {
    icon: <HomeIcon className="h-12 w-12 text-blue-600 mb-4" />,
    title: 'Central Heating',
    description: 'Full central heating system installations, power flushing, and radiator repairs.',
  },
];

const plumbingServicesData: Service[] = [
    {
      icon: <WaterDropIcon className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Emergency Plumbing',
      description: '24/7 emergency response for leaks, bursts, and all urgent plumbing issues.',
    },
    {
      icon: <TapIcon className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Tap Installation & Repair',
      description: 'Fixing dripping taps or installing stylish new ones for your kitchen and bathroom.',
    },
    {
      icon: <ToiletIcon className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Toilet Repair & Installation',
      description: 'Resolving all toilet-related problems from blockages to new installations.',
    },
    {
      icon: <ShowerIcon className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'Shower & Bath Services',
      description: 'Professional installation and repair of showers, baths, and associated pipework.',
    },
    {
        icon: <WrenchIcon className="h-12 w-12 text-blue-600 mb-4" />,
        title: 'Leak Detection & Repair',
        description: 'Advanced detection to find and fix hidden leaks in your pipework efficiently.',
    },
    {
      icon: <HomeIcon className="h-12 w-12 text-blue-600 mb-4" />,
      title: 'General Pipework',
      description: 'Comprehensive services for pipe repairs, replacements, and clearing stubborn blockages.',
    },
  ];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
    {service.icon}
    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
    <p className="text-gray-600 flex-grow">{service.description}</p>
     <a href="https://wa.me/447809763590" target="_blank" rel="noopener noreferrer" className="mt-6 font-semibold text-blue-600 hover:text-blue-800 group">
        Get a Quote <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
    </a>
  </div>
);

const Services: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'gas' | 'plumbing'>('gas');

    const servicesToDisplay = activeTab === 'gas' ? gasServicesData : plumbingServicesData;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Core Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to brand new installations, we provide a complete range of gas and heating solutions.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-12">
            <button
                onClick={() => setActiveTab('gas')}
                className={`text-lg font-bold py-3 px-10 rounded-lg cursor-pointer transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ${
                    activeTab === 'gas'
                    ? 'bg-blue-900 text-yellow-400 scale-105 shadow-lg'
                    : 'bg-white text-blue-800 border border-gray-300 hover:bg-blue-50'
                }`}
                aria-pressed={activeTab === 'gas'}
            >
                GAS
            </button>
            <button
                onClick={() => setActiveTab('plumbing')}
                className={`text-lg font-bold py-3 px-10 rounded-lg cursor-pointer transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 ${
                    activeTab === 'plumbing'
                    ? 'bg-blue-900 text-yellow-400 scale-105 shadow-lg'
                    : 'bg-white text-blue-800 border border-gray-300 hover:bg-blue-50'
                }`}
                aria-pressed={activeTab === 'plumbing'}
            >
                PLUMBING
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToDisplay.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;