import React from 'react';

const WA_LINK = 'https://wa.me/447809763590';
const PHONE = 'tel:07809763590';

const GasSafeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.618c0-1.026-.143-2.024-.402-2.984z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" />
  </svg>
);

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

const trustBadges = [
  { label: 'Gas Safe Registered', icon: <GasSafeIcon /> },
  { label: '5-Star Rated', icon: <StarIcon /> },
  { label: 'No Call-Out Charge', icon: null },
  { label: '24/7 Emergency', icon: null },
];

const stats = [
  { number: '500+', label: 'Happy Customers' },
  { number: '10+', label: 'Years Experience' },
  { number: '24/7', label: 'Always Available' },
  { number: '5★', label: 'Google Rated' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-0"
    >
      {/* Background image with layered overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605379649098-15d71b3e8e39?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/90 to-primary-800/85" />
        {/* Warm orange glow at bottom for heat/energy feel */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-secondary-900/20 to-transparent" />
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-8 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-32 right-8 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-400/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="relative container-custom z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center py-12 lg:py-16">

          {/* Left Column */}
          <div className="space-y-8 text-center lg:text-left">

            {/* Availability badge */}
            <div className="inline-flex items-center space-x-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-white/90 text-sm font-medium tracking-wide">
                Available now — Fast response across Leicester
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05]">
                Leicester's Trusted
                <br />
                <span className="gradient-text">Gas Engineer</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Boiler repairs, installations & servicing from a Gas Safe registered engineer.
                Fast, reliable and always honest — no call-out charge.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center space-x-1.5 bg-white/8 border border-white/15 rounded-full px-3 py-1.5 text-white/85 text-xs font-medium"
                >
                  {badge.icon && <span className="text-secondary-400">{badge.icon}</span>}
                  {!badge.icon && <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full" />}
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2.5 text-base px-7 py-4"
                aria-label="Get free quote on WhatsApp"
              >
                <WhatsAppIcon />
                <span>Get Free Quote</span>
              </a>
              <a
                href={PHONE}
                className="btn-outline flex items-center justify-center space-x-2.5 text-base px-7 py-4"
                aria-label="Call Leicester gas engineer"
              >
                <PhoneIcon />
                <span>07809 763590</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead capture card */}
          <div className="animate-slide-up flex justify-center lg:justify-end">
            <div
              className="w-full max-w-sm bg-white/96 backdrop-blur-xl rounded-3xl shadow-large border border-white/30 overflow-hidden"
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.3)' }}
            >
              {/* Card header strip */}
              <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 px-7 py-5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-tight">Ready for a Free Quote?</p>
                    <p className="text-white/80 text-xs mt-0.5">Usually replies in minutes</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-7 py-6 space-y-5">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Chat directly with our Leicester gas engineer on WhatsApp — fast, friendly, and no obligation.
                </p>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full flex items-center justify-center space-x-2.5 py-4 text-base"
                  aria-label="Chat with Leicester gas engineer on WhatsApp"
                >
                  <WhatsAppIcon />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-xs text-gray-400">or</span>
                  </div>
                </div>

                <a
                  href={PHONE}
                  className="flex items-center justify-center space-x-2.5 w-full py-3.5 rounded-xl border-2 border-primary-100 text-primary-700 font-semibold text-sm hover:bg-primary-50 hover:border-primary-200 transition-all duration-200"
                  aria-label="Call Leicester gas engineer"
                >
                  <PhoneIcon />
                  <span>Call 07809 763590</span>
                </a>

                <p className="text-center text-xs text-gray-400">
                  <span className="inline-flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span>Available now — No call-out charge</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative pb-0">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/10"
            style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(12px)' }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center py-6 px-4 ${
                  i < stats.length - 1 ? 'border-r border-white/10' : ''
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-white/60 font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
