import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Portfolio({ onCtaVisibilityChange }) {
    const navigate = useNavigate();
    const ctaRef = useRef(null);

    useEffect(() => {
        if (!ctaRef.current || !onCtaVisibilityChange) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                onCtaVisibilityChange(entry.isIntersecting);
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(ctaRef.current);

        return () => {
            observer.disconnect();
        };
    }, [onCtaVisibilityChange]);

    const handleProjectsClick = () => {
        navigate('/projects');
    };

    return (
        <div>
            <section className="min-h-screen flex items-center justify-center bg-transparent">
                <div className="container mx-auto px-6 py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Greeting */}
                        <motion.p 
                            className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hello, I'm
                        </motion.p>

                        {/* Name */}
                        <motion.h1 
                            className="text-5xl md:text-7xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="outlined-white-text">
                                Janier Kim Anthony
                            </span>
                            <span className="block bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent">
                                Esperida
                            </span>
                        </motion.h1>

                        {/* Title/Role */}
                        <motion.p 
                            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Full Stack Web Developer
                        </motion.p>

                        {/* Brief Description */}
                        <motion.p 
                            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Cum Laude graduate in Information Technology with hands-on experience 
                            in building full-stack web applications using React, Laravel, and Next.js.
                            Actively seeking opportunities to contribute to innovative projects.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            ref={ctaRef}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <button 
                                onClick={handleProjectsClick}
                                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Projects
                            </button>
                            <a 
                                href="/files/Esperida_JanierKimAnthony_Resume.pdf"
                                download
                                className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Resume
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ 
                            opacity: { delay: 1.5 },
                            y: { repeat: Infinity, duration: 1.5 }
                        }}
                    >
                        <svg 
                            className="w-6 h-6 text-blue-600 dark:text-blue-400" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
