
import React from 'react';

const Footer: React.FC = () => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="bg-blue-900 text-white border-t-4 border-yellow-400">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* About GasTech */}
                    <div className="space-y-4">
                        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="inline-block" aria-label="GasTech Home">
                            <img src="/logo.png" alt="GasTech Logo" className="h-16 w-auto" />
                        </a>
                        <p className="text-blue-200">
                            Your trusted local experts for all gas, heating, and boiler services. Committed to safety, quality, and customer satisfaction.
                        </p>
                        <p className="text-blue-200 font-semibold">Gas Safe Register: 123456</p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-wider uppercase text-yellow-400">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-yellow-400 transition-colors cursor-pointer">Services</a></li>
                            <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-yellow-400 transition-colors cursor-pointer">About Us</a></li>
                            <li><a href="#areas" onClick={(e) => handleScroll(e, '#areas')} className="hover:text-yellow-400 transition-colors cursor-pointer">Areas Covered</a></li>
                            <li><a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')} className="hover:text-yellow-400 transition-colors cursor-pointer">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4 lg:col-span-2">
                        <h4 className="text-lg font-semibold tracking-wider uppercase text-yellow-400">Contact Information</h4>
                        <ul className="space-y-3 text-blue-200">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <a href="tel:07809763590" className="hover:text-yellow-400">07809 763 590</a>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.149 4.204 4.253-1.117z"></path></svg>
                                <a href="https://wa.me/447809763590" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Chat on WhatsApp</a>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <a href="mailto:contact@gastech.example.com" className="hover:text-yellow-400">contact@gastech.example.com</a>
                            </li>
                             <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>123 Gas Lane, London, W1 1AA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-blue-800 text-center text-blue-300">
                    <p>&copy; {new Date().getFullYear()} GasTech. All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
