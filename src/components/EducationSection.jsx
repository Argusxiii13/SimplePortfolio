import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

function EducationSection() {
    const education = [
        {
            id: 1,
            degree: "B.S. in Information Technology",
            school: "STI College Pasay-EDSA",
            location: "2818 P. Celle St. corner EDSA Brgy. 75, San Rafael 1302 Pasay City",
            period: "2021 - 2025",
            honor: "Cum Laude",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            id: 2,
            degree: "Senior High School",
            school: "Western Bicutan National Highschool",
            location: "EP Housing Phase 1 Western Bicutan, Taguig City",
            period: "2015 - 2021",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            id: 3,
            degree: "Elementary",
            school: "Tenement Elementary School",
            location: "East Service Road, Western Bicutan, Taguig City, Metro Manila",
            period: "2009 - 2015",
            icon: <GraduationCap className="w-6 h-6" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
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
        <section id="education" className="min-h-screen py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Educational
                        <span className="text-blue-600 dark:text-blue-400"> Attainment</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My academic journey and achievements
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 dark:border-gray-600 active:shadow-xl"
                        >
                            {index !== education.length - 1 && (
                                <div className="absolute left-12 top-full h-8 w-0.5 bg-blue-300 dark:bg-blue-600 -z-10" />
                            )}

                            <div className="flex items-start gap-6">
                                <motion.div
                                    className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                                    whileHover={{ rotate: 360 }}
                                    whileTap={{ rotate: 180 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {edu.icon}
                                </motion.div>

                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                                                {edu.school}
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                {edu.period}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                        {edu.location}
                                    </p>

                                    {edu.honor && (
                                        <motion.div
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 rounded-full font-bold shadow-md"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                            whileTap={{ scale: 1.1 }}
                                        >
                                            <Award className="w-5 h-5" />
                                            {edu.honor}
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Certifications
                    </h3>
                    <motion.div 
                        className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-gray-600"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                    SAP Business One: Systems Integration & Architecture
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    STI College Pasay-EDSA • March 2023
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default EducationSection;