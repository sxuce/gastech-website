
import React from 'react';
import type { Benefit } from '../types';
import { CheckCircleIcon } from './IconComponents';

const benefitsData: Benefit[] = [
    {
        icon: <CheckCircleIcon className="h-8 w-8 text-green-500 flex-shrink-0" />,
        title: 'Qualified & Certified Engineers',
        description: 'Our entire team is Gas Safe registered, fully insured, and highly experienced.'
    },
    {
        icon: <CheckCircleIcon className="h-8 w-8 text-green-500 flex-shrink-0" />,
        title: 'Customer Satisfaction First',
        description: 'We pride ourselves on quality workmanship and leaving every customer happy.'
    },
    {
        icon: <CheckCircleIcon className="h-8 w-8 text-green-500 flex-shrink-0" />,
        title: 'Transparent Pricing',
        description: 'Receive a clear, detailed, no-obligation quote. No hidden fees, no surprises.'
    },
     {
        icon: <CheckCircleIcon className="h-8 w-8 text-green-500 flex-shrink-0" />,
        title: 'Local & Reliable Service',
        description: 'As a local business, we offer a friendly, dependable service you can count on.'
    },
];

const BenefitItem: React.FC<{ benefit: Benefit; index: number }> = ({ benefit, index }) => (
    <div 
        className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-2xl transition-all duration-300 hover:shadow-soft"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-lg">
            {benefit.icon}
        </div>
        <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                {benefit.title}
            </h4>
            <p className="text-gray-600 mt-2 leading-relaxed">
                {benefit.description}
            </p>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => {
    return (
        <section id="about" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden scroll-mt-24">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1 animate-slide-up">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl opacity-20 blur-2xl"></div>
                            <div className="relative">
                                <img 
                                    src="https://g4gas.co.uk/wp-content/uploads/2024/12/AdobeStock_328224681.jpg"
                                    alt="Professional GasTech engineer working on a boiler" 
                                    className="rounded-2xl shadow-large w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                            </div>
                            
                            {/* Floating stats card */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-large p-6 border border-gray-100">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-600">500+</div>
                                    <div className="text-sm text-gray-600">Happy Customers</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 order-1 lg:order-2 animate-fade-in">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                <span>Why Choose Us</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Your Local &{' '}
                                <span className="gradient-text">Reliable</span>{' '}
                                Heating Professionals
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At GasTech, we combine expert workmanship with a commitment to customer satisfaction. 
                                We're not just engineers; we're your neighbours, dedicated to keeping your home safe and warm.
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <BenefitItem key={index} benefit={benefit} index={index} />
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="pt-6">
                            <div className="flex flex-col sm:flex-row gap-4">
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
                                    className="btn-outline flex items-center justify-center space-x-3"
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

export default WhyChooseUs;