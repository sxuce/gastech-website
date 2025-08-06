
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

const BenefitItem: React.FC<{ benefit: Benefit }> = ({ benefit }) => (
    <div className="flex items-start space-x-4">
        {benefit.icon}
        <div>
            <h4 className="text-lg font-bold text-gray-800">{benefit.title}</h4>
            <p className="text-gray-600 mt-1">{benefit.description}</p>
        </div>
    </div>
);


const WhyChooseUs: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                     <div className="order-2 md:order-1">
                        <img 
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                            alt="Professional GasTech engineer working on a boiler" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                         <div className="text-left">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Your Local & Reliable Heating Professionals</h2>
                            <p className="mt-4 text-lg text-gray-600">
                               At GasTech, we combine expert workmanship with a commitment to customer satisfaction. We're not just engineers; we're your neighbours, dedicated to keeping your home safe and warm.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {benefitsData.map((benefit, index) => (
                               <BenefitItem key={index} benefit={benefit} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
