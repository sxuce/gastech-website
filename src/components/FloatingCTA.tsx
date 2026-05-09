import React, { useState, useEffect } from 'react';

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 550);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: sticky bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ease-out ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ boxShadow: '0 -4px 20px rgba(0,0,0,0.15)' }}
      >
        <div className="grid grid-cols-2">
          <a
            href="tel:07809763590"
            className="flex items-center justify-center space-x-2.5 bg-primary-800 hover:bg-primary-900 text-white font-semibold py-4 transition-colors duration-200 active:scale-95"
            aria-label="Call us now"
          >
            <PhoneIcon />
            <span className="text-sm">Call Now</span>
          </a>
          <a
            href="https://wa.me/447809763590"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 transition-colors duration-200 active:scale-95"
            aria-label="WhatsApp free quote"
          >
            <WhatsAppIcon />
            <span className="text-sm">Free Quote</span>
          </a>
        </div>
      </div>

      {/* Desktop: floating action buttons */}
      <div
        className={`fixed right-5 bottom-8 z-50 hidden lg:flex flex-col gap-3 transition-all duration-500 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <a
          href="https://wa.me/447809763590"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-large hover:shadow-xl transition-all duration-300 overflow-hidden"
          aria-label="Get a free quote on WhatsApp"
        >
          <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
            <WhatsAppIcon />
          </div>
          <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden transition-all duration-300 whitespace-nowrap pr-0 group-hover:pr-4 text-sm font-semibold">
            Free Quote
          </span>
        </a>

        <a
          href="tel:07809763590"
          className="group flex items-center bg-primary-700 hover:bg-primary-800 text-white rounded-full shadow-large hover:shadow-xl transition-all duration-300 overflow-hidden"
          aria-label="Call us now"
        >
          <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
            <PhoneIcon />
          </div>
          <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden transition-all duration-300 whitespace-nowrap pr-0 group-hover:pr-4 text-sm font-semibold">
            07809 763590
          </span>
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;
