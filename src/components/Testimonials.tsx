
import React from 'react';
import type { Testimonial } from '../types';
import { StarIcon } from './IconComponents';

const testimonialsData: Testimonial[] = [
  {
    quote: "Vikram from Gastech is quick, effective and efficient; he fixed my boiler in no time with very reasonable charges. I strongly recommend his services.",
    author: 'Manishkumar Mehta',
    location: 'Leicestershire',
    rating: 5,
  },
  {
    quote: "Gastech is a very professional and reliable company. I had a boiler breakdown and with his expertise, he fixed it in no time. The price is really genuine. Thanks!",
    author: 'Edita Singh',
    location: 'Leicestershire',
    rating: 5,
  },
  {
    quote: "I needed a new boiler installed and got several quotes. GasTech was competitive and their service was top-notch from start to finish. The new system works perfectly.",
    author: 'Mark T.',
    location: 'Leicestershire',
    rating: 5,
  },
];

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-secondary-400' : 'text-gray-300'}`} />
        ))}
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
    <div 
        className="card card-hover p-8 h-full flex flex-col relative group"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
        {/* Quote icon */}
        <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
        </div>

        <div className="flex-1 space-y-6">
            <Rating rating={testimonial.rating} />
            
            <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                "{testimonial.quote}"
            </blockquote>
        </div>

        <footer className="pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                </div>
                <div>
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
            </div>
        </footer>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden scroll-mt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
            <span>Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="gradient-text">Customers Say</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our reputation is built on trust and quality work. Here's what some of our satisfied clients have to say about their experience with GasTech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-br from-secondary-50 to-primary-50 border border-secondary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Service?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust GasTech for their heating and plumbing needs.
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
    </section>
  );
};

export default Testimonials;