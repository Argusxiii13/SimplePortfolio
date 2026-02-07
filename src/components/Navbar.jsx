import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.a href="#home" onClick={(e) => handleClick(e, '#home')} className="text-2xl font-bold" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <span className="text-white" style={{ WebkitTextStroke: '1px black', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>JKA</span><span className="text-black" style={{ WebkitTextStroke: '0.6px rgba(255,255,255,0.9)', textShadow: '0 0 1px rgba(255,255,255,0.6)' }}>E</span>
                    </motion.a>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a key={link.name} href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                                {link.name}
                            </motion.a>
                        ))}
                        
                        <motion.a href="/files/Esperida_JanierKimAnthony_Resume.pdf" download className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                            Resume
                        </motion.a>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none" aria-label="Toggle menu" aria-expanded={isOpen}>
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <motion.div className="md:hidden mt-4 pb-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                        <div className="flex flex-col items-center space-y-4 py-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
                                    {link.name}
                                </a>
                            ))}
                            <a href="/files/Esperida_JanierKimAnthony_Resume.pdf" download className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;