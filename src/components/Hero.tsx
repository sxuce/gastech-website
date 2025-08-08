
import React from 'react';
import { CheckCircleIcon } from './IconComponents';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scroll-mt-24">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1605379649098-15d71b3e8e39?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-accent-900/80"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative container-custom z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium">
                <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
                <span>24/7 Emergency Service Available in Leicester</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Leicester's Trusted{' '}
                <span className="gradient-text bg-gradient-to-r from-secondary-400 to-secondary-300 bg-clip-text text-transparent">
                  Gas Engineer
                </span>{' '}
                & Boiler Services
              </h1>
              
              <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-blue-100 leading-relaxed">
                Your local Leicester gas engineer for boiler repair, installation, and servicing. 
                Professional, reliable, and always here when you need us. Serving Leicester and surrounding areas.
              </p>
            </div>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-400/20 rounded-full flex items-center justify-center group-hover:bg-secondary-400/30 transition-colors duration-200">
                  <CheckCircleIcon className="h-5 w-5 text-secondary-300" />
                </div>
                <span className="text-white/90 font-medium">Gas Safe Registered Engineers in Leicester</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-400/20 rounded-full flex items-center justify-center group-hover:bg-secondary-400/30 transition-colors duration-200">
                  <CheckCircleIcon className="h-5 w-5 text-secondary-300" />
                </div>
                <span className="text-white/90 font-medium">No Call Out Charge</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-400/20 rounded-full flex items-center justify-center group-hover:bg-secondary-400/30 transition-colors duration-200">
                  <CheckCircleIcon className="h-5 w-5 text-secondary-300" />
                </div>
                <span className="text-white/90 font-medium">5-Star Rated Leicester Gas Engineer</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-400/20 rounded-full flex items-center justify-center group-hover:bg-secondary-400/30 transition-colors duration-200">
                  <CheckCircleIcon className="h-5 w-5 text-secondary-300" />
                </div>
                <span className="text-white/90 font-medium">Fast Emergency Response in Leicester</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/447809763590"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-3 text-lg px-8 py-4"
                aria-label="Get free quote from Leicester gas engineer on WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                </svg>
                <span>Get Free Quote</span>
              </a>
              <a 
                href="tel:07809763590"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-primary-900 flex items-center justify-center space-x-3 text-lg px-8 py-4"
                aria-label="Call Leicester gas engineer now"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
          
          {/* Right Column: WhatsApp CTA Card */}
          <div className="animate-slide-up">
            <div className="card bg-white/95 backdrop-blur-md p-8 lg:p-10 text-center max-w-md mx-auto lg:mx-0 shadow-large border border-white/20">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                  </svg>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800">Ready for a Free Quote?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Click below to chat with our Leicester gas engineer directly on WhatsApp for a fast, free, no-obligation quote.
                  </p>
                </div>
                
                <a 
                  href="https://wa.me/447809763590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center space-x-3 text-lg py-4"
                  aria-label="Chat with Leicester gas engineer on WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                
                <p className="text-xs text-gray-500">
                  <span className="inline-flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>We're available to help now!</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;