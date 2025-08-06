
import React from 'react';

const brands = ['Vaillant', 'Worcester Bosch', 'Ideal', 'Baxi', 'Viessmann', 'Glow-worm'];

const TrustedBrands: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-lg font-semibold text-gray-600 tracking-wider uppercase mb-8">
                    We install, service & repair all major boiler brands
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
                    {brands.map(brand => (
                        <span key={brand} className="text-2xl font-bold text-gray-400 grayscale hover:grayscale-0 hover:text-gray-600 transition-colors">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;