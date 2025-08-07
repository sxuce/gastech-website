import React from 'react';

const PromoBanner: React.FC = () => {
  // Pre-filled messages for WhatsApp, URL encoded.
  const boilerServiceMessage = encodeURIComponent("I'd like to book a boiler service for £64.99");
  const landlordCertMessage = encodeURIComponent("I'd like to book a landlord certificate for £49.99");

  return (
    <div className="relative mt-20 bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-600 text-white font-bold shadow-lg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondary-400/50 to-secondary-600/50"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row">
        {/* Boiler Service Offer */}
        <a
          href={`https://wa.me/447809763590?text=${boilerServiceMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-4 px-6 hover:bg-white/10 transition-all duration-300 group border-b sm:border-b-0 sm:border-r border-white/20 relative overflow-hidden"
          aria-label="Boiler Service Offer: £64.99 including VAT. Click to book on WhatsApp."
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative z-10 space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">SPECIAL OFFER</span>
            </div>
            <div className="text-lg sm:text-xl">
              BOILER SERVICE £64.99 INC. VAT
            </div>
            <div className="text-sm font-medium underline group-hover:no-underline transition-all duration-300 flex items-center justify-center space-x-2">
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
          className="flex-1 text-center py-4 px-6 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
          aria-label="Landlord Certificate Offer: £49.99 including VAT. Click to book on WhatsApp."
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="relative z-10 space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-sm font-medium">SPECIAL OFFER</span>
            </div>
            <div className="text-lg sm:text-xl">
              LANDLORD CERTIFICATE £49.99 INC. VAT
            </div>
            <div className="text-sm font-medium underline group-hover:no-underline transition-all duration-300 flex items-center justify-center space-x-2">
              <span>BOOK NOW</span>
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
