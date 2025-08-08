import React from 'react';

const PromoBanner: React.FC = () => {
  // Pre-filled messages for WhatsApp, URL encoded.
  const boilerServiceMessage = encodeURIComponent("I'd like to book a boiler service for £64.99");
  const landlordCertMessage = encodeURIComponent("I'd like to book a landlord certificate for £49.99");
  const emergencyCalloutMessage = encodeURIComponent("I need emergency callout service");

  return (
    <div className="relative mt-20 bg-white text-gray-800 font-bold shadow-lg border border-gray-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50/80"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-200/40 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row p-4">
        {/* Boiler Service Offer */}
        <a
          href={`https://wa.me/447809763590?text=${boilerServiceMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-6 px-8 hover:bg-amber-600 transition-all duration-300 group border-b sm:border-b-0 sm:border-r border-amber-400 relative overflow-hidden rounded-lg sm:mr-4 mb-4 sm:mb-0 bg-amber-500 text-white"
          aria-label="Boiler Service Offer: £64.99 including VAT. Click to book on WhatsApp."
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/40 to-amber-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative z-10 space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">SPECIAL OFFER</span>
            </div>
            <div className="text-lg sm:text-xl text-white">
              BOILER SERVICE £64.99 INC. VAT
            </div>
            <div className="text-sm font-medium text-white underline group-hover:no-underline transition-all duration-300 flex items-center justify-center space-x-2">
              <span>BOOK NOW</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
        
        {/* Landlord Certificate Offer */}
        <a
          href={`https://wa.me/447809763590?text=${landlordCertMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-6 px-8 hover:bg-amber-600 transition-all duration-300 group border-b sm:border-b-0 sm:border-r border-amber-400 relative overflow-hidden rounded-lg sm:mr-4 mb-4 sm:mb-0 bg-amber-500 text-white"
          aria-label="Landlord Certificate Offer: £49.99 including VAT. Click to book on WhatsApp."
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/40 to-amber-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative z-10 space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm font-medium text-white">SPECIAL OFFER</span>
            </div>
            <div className="text-lg sm:text-xl text-white">
              LANDLORD CERTIFICATE £49.99 INC. VAT
            </div>
            <div className="text-sm font-medium text-white underline group-hover:no-underline transition-all duration-300 flex items-center justify-center space-x-2">
              <span>BOOK NOW</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>

        {/* Emergency Callout Service */}
        <a
          href={`https://wa.me/447809763590?text=${emergencyCalloutMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-6 px-8 hover:bg-red-600 transition-all duration-300 group relative overflow-hidden rounded-lg bg-red-500 text-white"
          aria-label="Emergency Callout Service: £140 per hour. Click to contact on WhatsApp."
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/40 to-red-400/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative z-10 space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-sm font-medium text-white">EMERGENCY</span>
            </div>
            <div className="text-lg sm:text-xl text-white">
              EMERGENCY CALLOUT £140 P/H
            </div>
            <div className="text-sm font-medium text-white underline group-hover:no-underline transition-all duration-300 flex items-center justify-center space-x-2">
              <span>CONTACT NOW</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
