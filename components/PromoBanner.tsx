import React from 'react';

const PromoBanner: React.FC = () => {
  // Pre-filled messages for WhatsApp, URL encoded.
  const boilerServiceMessage = encodeURIComponent("I'd like to book a boiler service for £64.99");
  const landlordCertMessage = encodeURIComponent("I'd like to book a landlord certificate for £49.99");


  return (
    <div className="flex flex-col sm:flex-row bg-yellow-400 text-blue-900 font-bold">
      {/* Boiler Service Offer */}
      <a
        href={`https://wa.me/447809763590?text=${boilerServiceMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center py-3 px-4 hover:bg-yellow-500 transition-colors group border-b sm:border-b-0 sm:border-r border-blue-900/20"
        aria-label="Boiler Service Offer: £64.99 including VAT. Click to book on WhatsApp."
      >
        <span className="block">BOILER SERVICE £64.99 INC. VAT</span>
        <span className="block underline group-hover:no-underline">
          BOOK NOW
        </span>
      </a>
      
      {/* Landlord Certificate Offer */}
      <a
        href={`https://wa.me/447809763590?text=${landlordCertMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center py-3 px-4 hover:bg-yellow-500 transition-colors group"
        aria-label="Landlord Certificate Offer: £49.99 including VAT. Click to book on WhatsApp."
      >
        <span className="block">LANDLORD CERTIFICATE £49.99 INC. VAT</span>
        <span className="block underline group-hover:no-underline">
          BOOK NOW
        </span>
      </a>
    </div>
  );
};

export default PromoBanner;
