
import React from 'react';

const brands = ['Vaillant', 'Worcester Bosch', 'Ideal', 'Baxi', 'Viessmann', 'Glow-worm'];

const TrustedBrands: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100/30 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span>Trusted Brands</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            We install, service & repair all{' '}
                            <span className="gradient-text">major boiler brands</span>
                        </h3>
                        
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From industry leaders to trusted manufacturers, we work with all the top boiler brands 
                            to ensure you get the best quality and reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {brands.map((brand, index) => (
                            <div 
                                key={brand} 
                                className="group relative"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-gray-100 group-hover:border-primary-200">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                                            {brand}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional info */}
                    <div className="mt-12">
                        <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-6 py-3 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>All brands come with full warranty and support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;