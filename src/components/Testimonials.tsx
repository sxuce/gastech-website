
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
    <div className="flex">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col h-full">
        <Rating rating={testimonial.rating} />
        <blockquote className="text-gray-600 italic mt-4 flex-grow">"{testimonial.quote}"</blockquote>
        <footer className="mt-4">
            <p className="font-bold text-gray-800">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
        </footer>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our reputation is built on trust and quality work. Here's what some of our clients have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;