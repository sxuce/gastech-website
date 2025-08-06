
import React from 'react';
import { MapPinIcon } from './IconComponents';

const AreasCovered: React.FC = () => {
    return (
        <section id="areas" className="py-20 bg-blue-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <MapPinIcon className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
                    <h2 className="text-3xl md:text-4xl font-extrabold">Proudly Serving Leicestershire</h2>
                    <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
                        We provide expert gas and heating services across the entire Leicestershire county. If you're in the area, don't hesitate to get in touch for a fast, reliable service.
                    </p>
                    <div className="mt-8">
                        <a 
                            href="https://wa.me/447809763590"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block"
                        >
                            Get Your Free Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AreasCovered;