import React from 'react';

const WA = 'https://wa.me/447809763590';

const areas = [
  'Leicester', 'Loughborough', 'Enderby', 'Evington',
  'Coalville', 'Syston', 'Wigston', 'Oadby',
];

const AreasCovered: React.FC = () => {
  return (
    <section
      id="areas"
      className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden scroll-mt-24"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Icon */}
          <div className="reveal">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-500/20 border border-secondary-500/30 rounded-2xl mb-8">
              <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4 mb-12 reveal">
            <div className="section-label bg-white/8 border border-white/15 text-white/80 mx-auto w-fit">
              <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full animate-pulse" />
              <span>Service Areas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Proudly Serving{' '}
              <span className="bg-gradient-to-r from-secondary-400 to-amber-300 bg-clip-text text-transparent">
                Leicestershire
              </span>
            </h2>
            <p className="text-lg text-blue-100/70 max-w-2xl mx-auto leading-relaxed">
              Expert gas and heating services across the entire Leicestershire county.
              Local to you, fast to respond.
            </p>
          </div>

          {/* Area pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14 reveal">
            {areas.map((area, index) => (
              <div
                key={area}
                className="group bg-white/6 hover:bg-white/12 border border-white/12 hover:border-secondary-400/40 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-secondary-400/60 group-hover:bg-secondary-400 rounded-full transition-colors duration-300" />
                  <span className="text-white/80 group-hover:text-white font-medium text-sm transition-colors duration-300">
                    {area}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 max-w-xl mx-auto reveal"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Contact us today for a free, no-obligation quote. We cover all of Leicestershire.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1 flex items-center justify-center space-x-2.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                </svg>
                <span>Free Quote</span>
              </a>
              <a
                href="tel:07809763590"
                className="btn-outline-dark flex-1 flex items-center justify-center space-x-2.5"
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

export default AreasCovered;
