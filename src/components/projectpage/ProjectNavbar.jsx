import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function ProjectNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine if we're viewing a project detail or the projects list
    const isProjectDetail = location.pathname.match(/^\/projects\/\d+$/);
    const backPath = isProjectDetail ? '/projects' : '/';
    const backLabel = isProjectDetail ? 'Back to Projects' : 'Back Home';

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.a href="/" onClick={(e) => e.preventDefault()} className="text-2xl font-bold" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <span className="text-white" style={{ WebkitTextStroke: '1px black', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>JKA</span><span className="text-black" style={{ WebkitTextStroke: '0.6px rgba(255,255,255,0.9)', textShadow: '0 0 1px rgba(255,255,255,0.6)' }}>E</span>
                    </motion.a>

                    <motion.button 
                        onClick={() => navigate(backPath)}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {backLabel}
                    </motion.button>
                </div>
            </div>
        </nav>
    );
}

export default ProjectNavbar;
