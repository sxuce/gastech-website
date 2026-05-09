import React from 'react';

const PromoBanner: React.FC = () => {
  const boilerServiceMessage = encodeURIComponent("I'd like to book a boiler service for £64.99");
  const landlordCertMessage = encodeURIComponent("I'd like to book a landlord certificate for £49.99");
  const emergencyCalloutMessage = encodeURIComponent("I need emergency callout service");

  return (
    <div className="relative mt-20 bg-primary-950 overflow-hidden">
      {/* Subtle diagonal divider line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-px h-full bg-white/10 -skew-x-12" />
        <div className="absolute top-0 right-2/3 w-px h-full bg-white/5 -skew-x-12" />
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {/* Boiler Service */}
        <a
          href={`https://wa.me/447809763590?text=${boilerServiceMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 flex items-center justify-between px-6 py-5 hover:bg-white/5 transition-all duration-300"
          aria-label="Book boiler service for £64.99"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-secondary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-500/30 transition-colors duration-300">
              <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-semibold text-secondary-400 uppercase tracking-widest mb-0.5">Special Offer</p>
              <p className="text-white font-bold text-base leading-tight">Boiler Service</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 ml-4">
            <span className="text-2xl font-bold text-white">£64.99</span>
            <div className="flex items-center space-x-1 text-secondary-400 group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs font-semibold uppercase tracking-wide">Book</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>

        {/* Landlord Certificate */}
        <a
          href={`https://wa.me/447809763590?text=${landlordCertMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 flex items-center justify-between px-6 py-5 hover:bg-white/5 transition-all duration-300"
          aria-label="Book landlord certificate for £49.99"
        >
          <div className="flex items-center space-x-4">
            <div
              className="w-10 h-10 rounded-xl bg-secondary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-500/30 transition-colors duration-300"
            >
              <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div>
              <p className="text-xs font-semibold text-secondary-400 uppercase tracking-widest mb-0.5">Special Offer</p>
              <p className="text-white font-bold text-base leading-tight">Landlord Certificate</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 ml-4">
            <span className="text-2xl font-bold text-white">£49.99</span>
            <div className="flex items-center space-x-1 text-secondary-400 group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs font-semibold uppercase tracking-wide">Book</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>

        {/* Emergency */}
        <a
          href={`https://wa.me/447809763590?text=${emergencyCalloutMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 flex items-center justify-between px-6 py-5 bg-red-600/20 hover:bg-red-600/30 transition-all duration-300"
          aria-label="Emergency callout service"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors duration-300">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div>
              <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-0.5">Emergency</p>
              <p className="text-white font-bold text-base leading-tight">24/7 Callout</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 ml-4">
            <span className="text-2xl font-bold text-white">£140<span className="text-base font-medium">/hr</span></span>
            <div className="flex items-center space-x-1 text-red-400 group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-xs font-semibold uppercase tracking-wide">Call</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PromoBanner;
