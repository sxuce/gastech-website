
import React from 'react';
import { CheckCircleIcon } from './IconComponents';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605379649098-15d71b3e8e39?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Gas, Heating & Boiler Services You Can Rely On
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-6 text-blue-100">
              Your local, trusted experts for boiler repair, installation, and servicing.
            </p>
            <ul className="space-y-3 text-lg text-left inline-block">
                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-yellow-400 mr-3" /> Gas Safe Registered Engineers</li>
                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-yellow-400 mr-3" /> No Call Out Charge</li>
                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-yellow-400 mr-3" /> 5-Star Rated Service</li>
                <li className="flex items-center"><CheckCircleIcon className="h-6 w-6 text-yellow-400 mr-3" /> Fast Emergency Response</li>
            </ul>
          </div>
          
          {/* Right Column: WhatsApp CTA */}
          <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready for a Free Quote?</h3>
            <p className="text-gray-600 mb-6">Click below to chat with us directly on WhatsApp for a fast, free, no-obligation quote.</p>
            <a 
                href="https://wa.me/447809763590"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs bg-green-500 text-white hover:bg-green-600 font-bold py-4 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center space-x-3 text-lg"
            >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/></svg>
                <span>Chat on WhatsApp</span>
            </a>
            <p className="text-xs text-gray-500 text-center pt-4">We're available to help now!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;