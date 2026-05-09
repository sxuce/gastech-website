import React from 'react';
import type { Testimonial } from '../types';

const WA = 'https://wa.me/447809763590';

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

const StarRow: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex space-x-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-secondary-500' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
  <div
    className="card card-hover p-8 flex flex-col relative group"
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    {/* Large decorative quote */}
    <div
      className="absolute top-5 right-6 text-7xl font-serif leading-none text-primary-100 group-hover:text-secondary-100 transition-colors duration-500 select-none pointer-events-none"
      aria-hidden="true"
    >
      "
    </div>

    <div className="flex-1 space-y-5 relative z-10">
      <StarRow rating={testimonial.rating} />
      <blockquote className="text-gray-700 leading-relaxed text-base italic">
        "{testimonial.quote}"
      </blockquote>
    </div>

    <footer className="pt-5 mt-5 border-t border-gray-100 flex items-center space-x-3">
      <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
        {testimonial.author.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-gray-900 text-sm">{testimonial.author}</p>
        <p className="text-xs text-gray-400 mt-0.5">{testimonial.location}</p>
      </div>
      <div className="ml-auto">
        <div className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
          Verified
        </div>
      </div>
    </footer>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-50/70 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50/70 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-label bg-secondary-50 text-secondary-700 mb-5">
            <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            What Our{' '}
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our reputation is built on trust, quality work, and genuine care for every customer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 reveal">
          <div className="text-center bg-gradient-to-br from-gray-50 to-primary-50/40 rounded-3xl border border-primary-100/60 p-10 md:p-14 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                {['M', 'E', 'J'].map((initial, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                  >
                    {initial}
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Join 500+ Satisfied Customers
            </h3>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Experience the GasTech difference — professional, reliable, and always here when you need us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"/>
                </svg>
                <span>Get Free Quote</span>
              </a>
              <a
                href="tel:07809763590"
                className="btn-outline-dark flex items-center justify-center space-x-2.5"
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
