import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ExternalLink, Github, XCircle } from 'lucide-react';
import { getProjectById } from './projectsData';
import ProjectNavbar from './ProjectNavbar';
import ScreenshotGallery from './ScreenshotGallery';

function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = getProjectById(id);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-transparent">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <button
                        onClick={() => navigate('/projects')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent">
            <ProjectNavbar />
            
            <section className="pt-28 pb-12 bg-transparent">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl">
                            {project.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative overflow-hidden rounded-2xl border border-gray-700 project-hero bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl mb-12"
                    >
                        {project.screenshots && project.screenshots.length > 0 ? (
                            <>
                                <img 
                                    src={project.screenshots[0] || '/assets/placeholder.jpg'}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </>
                        ) : (
                            <div className="flex items-center justify-center h-full text-white/40">
                                Project Screenshot
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-transparent">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="md:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Key Features
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                            </div>
                                            <p className="text-gray-300">{feature}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {project.screenshots && project.screenshots.length > 0 && (
                                <ScreenshotGallery 
                                    screenshots={project.screenshots} 
                                    projectTitle={project.title}
                                    selectedImage={selectedImage}
                                    setSelectedImage={setSelectedImage}
                                />
                            )}
                        </div>

                        <div className="md:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="sticky top-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 space-y-6"
                            >
                                <div>
                                    <p className="text-gray-400 text-sm mb-2 font-semibold">Status</p>
                                    <span className={`inline-block px-4 py-2 rounded-lg text-sm font-medium border ${
                                        project.status === 'Completed' 
                                            ? 'bg-green-500/20 text-green-400 border-green-500/50'
                                            : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-sm mb-2 font-semibold">Completed</p>
                                    <p className="text-white text-lg">{project.date}</p>
                                </div>

                                <div>
                                    <p className="text-gray-400 text-sm mb-4 font-semibold">Technologies Used</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span 
                                                key={tech}
                                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/50 hover:bg-blue-500/30 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

                                <div className="space-y-3">
                                    {project.deployed ? (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Project
                                        </motion.a>
                                    ) : (
                                        <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-700/50 text-gray-500 rounded-lg font-semibold cursor-not-allowed border border-gray-600">
                                            <XCircle className="w-4 h-4" />
                                            Unavailable
                                        </div>
                                    )}
                                    
                                    <motion.a
                                        href={project.link || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github className="w-4 h-4" />
                                        Code on GitHub
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectDetail;