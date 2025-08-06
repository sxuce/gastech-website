import React from 'react';

const PromoBanner: React.FC = () => {
  // Pre-filled message for WhatsApp, URL encoded.
  const message = encodeURIComponent("I'd like to book a boiler service for £64.99");

  return (
    <a
      href={`https://wa.me/447809763590?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-yellow-400 text-blue-900 text-center py-3 px-4 font-bold hover:bg-yellow-500 transition-colors group"
      aria-label="Boiler Service Offer: £64.99 including VAT. Click to book on WhatsApp."
    >
      <span className="block">BOILER SERVICE £64.99 INC. VAT</span>
      <span className="block underline group-hover:no-underline">
        BOOK NOW
      </span>
    </a>
  );
};

export default PromoBanner;
