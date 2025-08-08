import React from 'react';

const Footer: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = 80; // h-20 = 80px
            const targetPosition = targetElement.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer id="contact" className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white relative overflow-hidden scroll-mt-24">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
                    {/* About GasTech */}
                    <div className="space-y-6">
                        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="inline-block group" aria-label="GasTech Home">
                            <div className="bg-white rounded-2xl p-4 shadow-lg">
                                <img src="logo.png" alt="GasTech Logo" className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" />
                            </div>
                        </a>
                        <p className="text-blue-100 leading-relaxed">
                            Your trusted local experts for all gas, heating, and boiler services. Committed to safety, quality, and customer satisfaction.
                        </p>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                            <span className="text-blue-200 font-semibold">Gas Safe Register: 123456</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white relative">
                            Quick Links
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary-400"></div>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a 
                                    href="#services" 
                                    onClick={(e) => handleScroll(e, '#services')} 
                                    className="text-blue-100 hover:text-secondary-300 transition-colors duration-200 flex items-center space-x-2 group"
                                >
                                    <span className="w-1 h-1 bg-secondary-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                                    <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about" 
                                    onClick={(e) => handleScroll(e, '#about')} 
                                    className="text-blue-100 hover:text-secondary-300 transition-colors duration-200 flex items-center space-x-2 group"
                                >
                                    <span className="w-1 h-1 bg-secondary-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                                    <span>About Us</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#areas" 
                                    onClick={(e) => handleScroll(e, '#areas')} 
                                    className="text-blue-100 hover:text-secondary-300 transition-colors duration-200 flex items-center space-x-2 group"
                                >
                                    <span className="w-1 h-1 bg-secondary-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                                    <span>Areas Covered</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#testimonials" 
                                    onClick={(e) => handleScroll(e, '#testimonials')} 
                                    className="text-blue-100 hover:text-secondary-300 transition-colors duration-200 flex items-center space-x-2 group"
                                >
                                    <span className="w-1 h-1 bg-secondary-400 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                                    <span>Testimonials</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white relative">
                            Our Services
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary-400"></div>
                        </h4>
                        <ul className="space-y-3">
                            <li className="text-blue-100">Boiler Installation</li>
                            <li className="text-blue-100">Boiler Repair</li>
                            <li className="text-blue-100">Boiler Servicing</li>
                            <li className="text-blue-100">Gas Safety Certificates</li>
                            <li className="text-blue-100">Emergency Plumbing</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white relative">
                            Contact Information
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary-400"></div>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 group">
                                <div className="w-10 h-10 bg-primary-600/50 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-200">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <a href="tel:07809763590" className="text-blue-100 hover:text-secondary-300 transition-colors duration-200 font-medium">
                                    07809 763590
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-10 h-10 bg-green-600/50 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-200">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"></path>
                                    </svg>
                                </div>
                                <a href="https://wa.me/447809763590" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-secondary-300 transition-colors duration-200 font-medium">
                                    Chat on WhatsApp
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="w-10 h-10 bg-accent-600/50 rounded-full flex items-center justify-center group-hover:bg-accent-600 transition-colors duration-200">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <a href="mailto:vikram4king@yahoo.com" className="text-blue-100 hover:text-secondary-300 transition-colors duration-200 font-medium">
                                    vikram4king@yahoo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-16 pt-8 border-t border-primary-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-blue-200 text-center md:text-left">
                            &copy; {new Date().getFullYear()} GasTech. All Rights Reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-blue-200 hover:text-secondary-300 transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-blue-200 hover:text-secondary-300 transition-colors duration-200">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
