import React from 'react';

const WA = 'https://wa.me/447809763590';

const benefits = [
  {
    title: 'Gas Safe Registered Engineers',
    description: 'Every engineer on our team is Gas Safe registered, fully insured, and highly experienced — your safety is our priority.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.618c0-1.026-.143-2.024-.402-2.984z" />
      </svg>
    ),
  },
  {
    title: 'Transparent, Honest Pricing',
    description: 'Clear, detailed quotes with no hidden fees or surprises. You know the price before we start any work.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Fast & Reliable Response',
    description: 'We show up on time, every time. For emergencies, we aim to be with you within hours — not days.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction First',
    description: 'We\'re not done until you\'re completely happy. Hundreds of 5-star reviews from satisfied Leicester customers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Gas Safe' },
  { value: '5★', label: 'Rated Service' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">

        {/* Stats row — sits above the main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 reveal">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card text-center py-7 px-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1 reveal-left">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-3xl opacity-30 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-large">
                <img
                  src="https://g4gas.co.uk/wp-content/uploads/2024/12/AdobeStock_328224681.jpg"
                  alt="Professional GasTech engineer working on a boiler in Leicester"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-large px-6 py-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Gas Safe</div>
                    <div className="text-xs text-gray-500">Registered & Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2 reveal-right">
            <div className="space-y-4">
              <div className="section-label bg-primary-50 text-primary-700">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Local &{' '}
                <span className="gradient-text">Trusted</span>{' '}
                Heating Professionals
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                At GasTech, we combine expert workmanship with genuine care for our customers.
                We're not just engineers — we're your neighbours, keeping your home safe and warm.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center group-hover:bg-secondary-50 group-hover:text-secondary-600 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                </svg>
                <span>Get Free Quote</span>
              </a>
              <a
                href="tel:07809763590"
                className="btn-outline-dark flex items-center justify-center space-x-2.5"
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

export default WhyChooseUs;
