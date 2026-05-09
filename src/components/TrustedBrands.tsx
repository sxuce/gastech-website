import React from 'react';

const brands = ['Vaillant', 'Worcester Bosch', 'Ideal', 'Baxi', 'Viessmann', 'Glow-worm'];

const TrustedBrands: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="container-custom reveal">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            We install, service & repair all major boiler brands
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trusted by Leicester homeowners for{' '}
            <span className="gradient-text">every boiler brand</span>
          </h3>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
          {brands.map((brand, index) => (
            <div
              key={brand}
              className="card card-accent group text-center py-5 px-3 hover:shadow-medium cursor-default reveal"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-2.5 group-hover:bg-secondary-50 transition-colors duration-300">
                <svg className="w-5 h-5 text-primary-500 group-hover:text-secondary-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-5 py-2.5 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>All brands covered — parts sourced, warranties honoured</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
