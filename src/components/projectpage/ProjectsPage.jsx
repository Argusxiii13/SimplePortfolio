import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData } from './projectsData';
import ProjectNavbar from './ProjectNavbar';

function ProjectsPage() {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-transparent">
            <ProjectNavbar />
            
            <section className="pt-32 pb-16 md:pb-20 bg-transparent">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white" style={{ WebkitTextStroke: '1px black', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>
                                My
                            </span>
                            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>
                        <motion.p 
                            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            A small collection of demo projects where I practice and refine full-stack skills
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-transparent">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {projectsData.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500 cursor-pointer w-full max-w-md"
                                onClick={() => navigate(`/projects/${project.id}`)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                                    {project.screenshots && project.screenshots[0] ? (
                                        <img 
                                            src={project.screenshots[0]} 
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-white/40 text-center px-4 text-sm">Project Screenshot</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                <div className="relative p-6 flex flex-col h-64">
                                    <div className="flex items-center justify-between mb-4 gap-2">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <span className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/20 rounded-full border border-blue-500/50 whitespace-nowrap">
                                                {project.category}
                                            </span>
                                            <span
                                                className={`px-3 py-1 text-xs font-semibold rounded-full border whitespace-nowrap ${
                                                    project.deployed
                                                        ? 'text-green-400 bg-green-500/20 border-green-500/50'
                                                        : 'text-gray-400 bg-gray-500/20 border-gray-500/50'
                                                }`}
                                            >
                                                {project.deployed ? 'Live View Available' : 'No Live View'}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-400 whitespace-nowrap">{project.date}</span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                                        {project.shortDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span 
                                                key={tech}
                                                className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md border border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs px-2 py-1 text-gray-400">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-700 group-hover:border-blue-500 transition-colors">
                                        <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                                            View Details
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-blue-400 hover:text-blue-300"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="pb-16 bg-transparent">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm text-gray-500 max-w-3xl mx-auto">
                        Note: Any company, institution, or organization names shown here are used for demo purposes only
                        and are not affiliated with real entities.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default ProjectsPage;