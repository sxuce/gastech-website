
import React from 'react';
import { MapPinIcon } from './IconComponents';

const AreasCovered: React.FC = () => {
    return (
        <section id="areas" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white relative overflow-hidden scroll-mt-24">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-3xl shadow-lg mb-8">
                        <MapPinIcon className="h-10 w-10 text-white" />
                    </div>
                    
                    <div className="space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90 text-sm font-medium">
                            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
                            <span>Service Areas</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Proudly Serving{' '}
                            <span className="gradient-text bg-gradient-to-r from-secondary-400 to-secondary-300 bg-clip-text text-transparent">
                                Leicestershire
                            </span>
                        </h2>
                        
                        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            We provide expert gas and heating services across the entire Leicestershire county. 
                            If you're in the area, don't hesitate to get in touch for a fast, reliable service.
                        </p>
                    </div>

                    {/* Areas grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {[
                            'Leicester',
                            'Loughborough', 
                            'Enderby',
                            'Evington',
                            'Coalville',
                            'Syston',
                            'Wigston',
                            'Oadby'
                        ].map((area, index) => (
                            <div 
                                key={area}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-8 h-8 bg-secondary-400/30 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary-400/50 transition-colors duration-300">
                                    <MapPinIcon className="h-4 w-4 text-secondary-300" />
                                </div>
                                <span className="text-white font-medium">{area}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12">
                        <div className="card bg-white/95 backdrop-blur-md p-8 max-w-2xl mx-auto shadow-large border border-white/20">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Ready to Get Started?
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Contact us today for a free, no-obligation quote. We're here to help with all your heating and plumbing needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="https://wa.me/447809763590"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary flex items-center justify-center space-x-3"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                                    </svg>
                                    <span>Get Free Quote</span>
                                </a>
                                <a 
                                    href="tel:07809763590"
                                    className="btn-outline border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white flex items-center justify-center space-x-3"
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
            </div>
        </section>
    );
};

export default AreasCovered;