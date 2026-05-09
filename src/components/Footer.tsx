import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-primary-950 text-white relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="inline-block group" aria-label="GasTech Home">
              <div className="bg-white rounded-2xl p-3 inline-block shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img src="logo.png" alt="GasTech Logo" className="h-20 w-auto" />
              </div>
            </a>
            <p className="text-blue-200/70 leading-relaxed text-sm max-w-xs">
              Your trusted local experts for all gas, heating, and boiler services. Committed to safety, quality, and customer satisfaction.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-400 rounded-full" />
              <span className="text-blue-200/60 text-sm font-medium">Gas Safe Registered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Services', href: '#services' },
                { label: 'About Us', href: '#about' },
                { label: 'Areas Covered', href: '#areas' },
                { label: 'Testimonials', href: '#testimonials' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-blue-200/60 hover:text-secondary-400 transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary-400/50 rounded-full group-hover:scale-150 transition-transform duration-200" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                'Boiler Installation',
                'Boiler Repair',
                'Boiler Servicing',
                'Gas Safety Certificates',
                'Emergency Plumbing',
              ].map((service) => (
                <li key={service} className="text-blue-200/60 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:07809763590"
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-9 h-9 bg-primary-700/60 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-blue-100/80 hover:text-secondary-400 transition-colors duration-200 text-sm font-medium">
                    07809 763590
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447809763590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-9 h-9 bg-green-600/60 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z" />
                    </svg>
                  </div>
                  <span className="text-blue-100/80 hover:text-secondary-400 transition-colors duration-200 text-sm font-medium">
                    WhatsApp
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:vikram4king@yahoo.com"
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-9 h-9 bg-accent-700/60 rounded-lg flex items-center justify-center group-hover:bg-accent-600 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-blue-100/80 hover:text-secondary-400 transition-colors duration-200 text-sm font-medium">
                    vikram4king@yahoo.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-blue-200/40 text-sm">
            &copy; {new Date().getFullYear()} GasTech. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-blue-200/40 hover:text-secondary-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-blue-200/40 hover:text-secondary-400 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
