import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center" aria-label="GasTech Home">
              <img src="logo.png" alt="GasTech Logo" className="h-32 w-auto" />
            </a>
          </div>
          {/* Nav Links - Center */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <nav aria-label="Main navigation">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-700 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
          {/* Contact & Quote - Right */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <a href="tel:07809763590" className="text-sm font-semibold text-gray-700 hover:text-blue-600">07809 763590</a>
            <a
              href="https://wa.me/447809763590"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Get a Quote
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-blue-800 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-700 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:07809763590" className="text-gray-700 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">Call: 07809 763590</a>
            <a
              href="https://wa.me/447809763590"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 font-bold py-2 px-4 rounded-full shadow-lg block text-center mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;