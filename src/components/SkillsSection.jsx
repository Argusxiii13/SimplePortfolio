import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Briefcase, Sparkles, Orbit } from 'lucide-react';

function SkillsSection() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);


    const skillProjects = [
        {
            id: 1,
            category: "Full Stack Development",
            icon: <Code2 className="w-6 h-6" />,
            color: "blue",
            skills: [
                {
                    name: "React",
                    usedIn: ["DOST-NRCP Intranet", "AutoConnect Capstone"],
                    highlight: "Building complex UIs"
                },
                {
                    name: "Next.js",
                    usedIn: ["AutoConnect Capstone"],
                    highlight: "Full-stack car rental system"
                },
                {
                    name: "Laravel",
                    usedIn: ["DOST-NRCP Intranet"],
                    highlight: "REST APIs & authentication"
                },
                {
                    name: "Node.js",
                    usedIn: ["Personal Projects"],
                    highlight: "Backend development"
                }
            ]
        },
        {
            id: 2,
            category: "Databases & Backend",
            icon: <Briefcase className="w-6 h-6" />,
            color: "green",
            skills: [
                {
                    name: "MySQL",
                    usedIn: ["DOST-NRCP Intranet"],
                    highlight: "Employee & content management"
                },
                {
                    name: "PostgreSQL",
                    usedIn: ["AutoConnect Capstone"],
                    highlight: "Fleet tracking & analytics"
                },
                {
                    name: "Laravel Sanctum",
                    usedIn: ["DOST-NRCP Intranet"],
                    highlight: "API authentication"
                }
            ]
        },
        {
            id: 3,
            category: "Languages & Fundamentals",
            icon: <Sparkles className="w-6 h-6" />,
            color: "purple",
            skills: [
                {
                    name: "JavaScript",
                    usedIn: ["All Projects"],
                    highlight: "Core language for frontend"
                },
                {
                    name: "PHP",
                    usedIn: ["DOST-NRCP Intranet"],
                    highlight: "Laravel backend development"
                },
                {
                    name: "HTML/CSS",
                    usedIn: ["All Projects"],
                    highlight: "Responsive design & layouts"
                }
            ]
        }
    ];

    const tools = [
        { name: "Git", icon: "🔧", description: "Version control" },
        { name: "VS Code", icon: "💻", description: "Primary IDE" },
        { name: "Vite", icon: "⚡", description: "Build tooling" },
        { name: "Tailwind CSS", icon: "🎨", description: "Styling framework" }
    ];


    const constellationSkills = [
        { 
            id: 'react', 
            name: 'React', 
            category: 'frontend',
            size: 'large',
            x: 25, 
            y: 28,
            connections: ['nextjs', 'javascript', 'html-css'],
            projects: ['DOST-NRCP Intranet', 'AutoConnect']
        },
        { 
            id: 'nextjs', 
            name: 'Next.js', 
            category: 'frontend',
            size: 'medium',
            x: 15, 
            y: 50,
            connections: ['react', 'nodejs', 'postgresql'],
            projects: ['AutoConnect Capstone']
        },
        { 
            id: 'javascript', 
            name: 'JS', 
            category: 'language',
            size: 'large',
            x: 50, 
            y: 20,
            connections: ['react', 'nodejs', 'nextjs'],
            projects: ['All Projects']
        },
        { 
            id: 'html-css', 
            name: 'HTML/CSS', 
            category: 'language',
            size: 'medium',
            x: 38, 
            y: 45,
            connections: ['react', 'tailwind'],
            projects: ['All Projects']
        },
        { 
            id: 'laravel', 
            name: 'Laravel', 
            category: 'backend',
            size: 'large',
            x: 72, 
            y: 32,
            connections: ['php', 'mysql', 'sanctum'],
            projects: ['DOST-NRCP Intranet']
        },
        { 
            id: 'php', 
            name: 'PHP', 
            category: 'language',
            size: 'medium',
            x: 85, 
            y: 50,
            connections: ['laravel', 'mysql'],
            projects: ['DOST-NRCP Intranet']
        },
        { 
            id: 'nodejs', 
            name: 'Node.js', 
            category: 'backend',
            size: 'medium',
            x: 60, 
            y: 58,
            connections: ['javascript', 'nextjs'],
            projects: ['Personal Projects']
        },
        { 
            id: 'mysql', 
            name: 'MySQL', 
            category: 'database',
            size: 'medium',
            x: 72, 
            y: 70,
            connections: ['laravel', 'php'],
            projects: ['DOST-NRCP Intranet']
        },
        { 
            id: 'postgresql', 
            name: 'PostgreSQL', 
            category: 'database',
            size: 'medium',
            x: 28, 
            y: 72,
            connections: ['nextjs'],
            projects: ['AutoConnect Capstone']
        },
        { 
            id: 'sanctum', 
            name: 'Sanctum', 
            category: 'tool',
            size: 'small',
            x: 85, 
            y: 22,
            connections: ['laravel'],
            projects: ['DOST-NRCP Intranet']
        },
        { 
            id: 'tailwind', 
            name: 'Tailwind', 
            category: 'tool',
            size: 'small',
            x: 50, 
            y: 78,
            connections: ['html-css', 'react'],
            projects: ['All Projects']
        },
        { 
            id: 'git', 
            name: 'Git', 
            category: 'tool',
            size: 'small',
            x: 15, 
            y: 18,
            connections: ['vscode'],
            projects: ['All Projects']
        },
        { 
            id: 'vscode', 
            name: 'VS Code', 
            category: 'tool',
            size: 'small',
            x: 15, 
            y: 82,
            connections: ['git'],
            projects: ['All Projects']
        }
    ];

    const colorClasses = {
        blue: {
            gradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
            border: "border-blue-100 dark:border-blue-800",
            icon: "bg-blue-600 dark:bg-blue-500",
            badge: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
            text: "text-blue-600 dark:text-blue-400"
        },
        green: {
            gradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
            border: "border-green-100 dark:border-green-800",
            icon: "bg-green-600 dark:bg-green-500",
            badge: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300",
            text: "text-green-600 dark:text-green-400"
        },
        purple: {
            gradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
            border: "border-purple-100 dark:border-purple-800",
            icon: "bg-purple-600 dark:bg-purple-500",
            badge: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
            text: "text-purple-600 dark:text-purple-400"
        }
    };

    const constellationCategories = {
        frontend: { node: 'bg-blue-500 border-blue-300', line: 'stroke-blue-400' },
        backend: { node: 'bg-purple-500 border-purple-300', line: 'stroke-purple-400' },
        database: { node: 'bg-green-500 border-green-300', line: 'stroke-green-400' },
        language: { node: 'bg-orange-500 border-orange-300', line: 'stroke-orange-400' },
        tool: { node: 'bg-pink-500 border-pink-300', line: 'stroke-pink-400' }
    };

    const sizeClasses = {
        small: 'w-8 h-8 md:w-11 md:h-11 text-[0.5rem] md:text-[0.6rem]',
        medium: 'w-9 h-9 md:w-14 md:h-14 text-[0.52rem] md:text-[0.65rem]',
        large: 'w-10 h-10 md:w-16 md:h-16 text-[0.55rem] md:text-[0.7rem]'
    };

    const isConnectionActive = (skillId) => {
        if (!hoveredSkill) return false;
        const skill = constellationSkills.find(s => s.id === hoveredSkill);
        return skill?.connections.includes(skillId) || skillId === hoveredSkill;
    };

    const getTooltipPosition = (x, y) => {
        const isRight = x > 60;
        const isBottom = y > 70;
        
        let positionClasses = '';
        
        if (isRight) {
            positionClasses = 'right-full mr-2 md:mr-3';
        } else {
            positionClasses = 'left-full ml-2 md:ml-3';
        }
        
        if (isBottom) {
            positionClasses += ' bottom-0';
        } else {
            positionClasses += ' top-0';
        }
        
        return positionClasses;
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="relative">
            {/* Animated content switch */}
            <AnimatePresence mode="wait">
                {!isFlipped ? (

                    <motion.div
                        key="projects"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-transparent py-12 md:py-20"
                    >
                        <div className="container mx-auto px-4 md:px-6">
                            {/* Section Header */}
                            <motion.div
                                className="text-center mb-12 md:mb-16"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                    Skills &
                                    <span className="text-blue-600 dark:text-blue-400"> Technologies</span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                                    Technologies I've used in real projects and production environments
                                </p>
                                
                                {/* Toggle Button */}
                                <motion.button
                                    onClick={() => setIsFlipped(!isFlipped)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg font-semibold transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Orbit className="w-5 h-5" />
                                    Switch to Constellation View
                                </motion.button>
                            </motion.div>

                            {/* Skills by Category */}
                            <motion.div
                                className="max-w-6xl mx-auto space-y-8"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {skillProjects.map((category) => {
                                    const colors = colorClasses[category.color];
                                    
                                    return (
                                        <motion.div
                                            key={category.id}
                                            variants={cardVariants}
                                            className={`bg-gradient-to-br ${colors.gradient} rounded-2xl p-8 shadow-lg border ${colors.border}`}
                                        >
                                            {/* Category Header */}
                                            <div className="flex items-center gap-4 mb-8">
                                                <motion.div
                                                    className={`flex-shrink-0 w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center text-white shadow-lg`}
                                                    whileHover={{ rotate: 360 }}
                                                    whileTap={{ rotate: 180 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    {category.icon}
                                                </motion.div>
                                                <h3 className={`text-2xl font-bold ${colors.text}`}>
                                                    {category.category}
                                                </h3>
                                            </div>

                                            {/* Skills Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {category.skills.map((skill, index) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-5 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                                                    >
                                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                            {skill.name}
                                                        </h4>
                                                        
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 italic">
                                                            {skill.highlight}
                                                        </p>

                                                        <div className="flex flex-wrap gap-2">
                                                            {skill.usedIn.map((project) => (
                                                                <span
                                                                    key={project}
                                                                    className={`text-xs px-3 py-1 rounded-full font-medium ${colors.badge}`}
                                                                >
                                                                    {project}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* Tools Section */}
                            <motion.div
                                className="max-w-4xl mx-auto mt-16"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                                    Development Tools
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    {tools.map((tool, index) => (
                                        <motion.div
                                            key={tool.name}
                                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="text-4xl mb-3">{tool.icon}</div>
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                                {tool.name}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {tool.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (

                    <motion.div
                        key="constellation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-transparent min-h-screen py-12 md:py-20 relative overflow-hidden"
                    >
                        {/* Animated background stars */}
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(50)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        opacity: [0.2, 1, 0.2],
                                        scale: [1, 1.5, 1]
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 3,
                                        repeat: Infinity,
                                        delay: Math.random() * 2
                                    }}
                                />
                            ))}
                        </div>

                        <div className="container mx-auto px-4 md:px-6 relative z-10">
                            {/* Section Header */}
                            <motion.div
                                className="text-center mb-8 md:mb-12"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
                                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                                        Skills
                                        <span className="text-blue-400"> Constellation</span>
                                    </h2>
                                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                                </div>
                                <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto px-4 mb-6">
                                    <span className="hidden md:inline">Hover over skills to see how they connect • </span>
                                    <span className="md:hidden">Tap skills to see connections • </span>
                                    Each star represents a technology
                                </p>
                                
                                {/* Toggle Button */}
                                <motion.button
                                    onClick={() => setIsFlipped(!isFlipped)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full shadow-lg font-semibold transition-all border border-white/20"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Orbit className="w-5 h-5" />
                                    Switch to List View
                                </motion.button>
                            </motion.div>

                            {/* Legend */}
                            <motion.div
                                className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8 px-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {Object.entries(constellationCategories).map(([category, colors]) => (
                                    <div key={category} className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-full">
                                        <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${colors.node}`} />
                                        <span className="text-xs md:text-sm text-white capitalize">{category}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Constellation Container */}
                            <div className="relative w-full max-w-6xl mx-auto aspect-[4/5] md:aspect-[16/10] bg-black/20 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden">
                                <div className="absolute inset-0 p-8 md:p-12">
                                    {/* SVG for connection lines */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                        {constellationSkills.map((skill) => 
                                            skill.connections.map((connId) => {
                                                const connSkill = constellationSkills.find(s => s.id === connId);
                                                if (!connSkill) return null;

                                                const isActive = isConnectionActive(skill.id) && isConnectionActive(connId);

                                                return (
                                                    <motion.line
                                                        key={`${skill.id}-${connId}`}
                                                        x1={`${skill.x}%`}
                                                        y1={`${skill.y}%`}
                                                        x2={`${connSkill.x}%`}
                                                        y2={`${connSkill.y}%`}
                                                        className={constellationCategories[skill.category].line}
                                                        strokeWidth={isActive ? "2" : "1"}
                                                        initial={{ opacity: 0.1 }}
                                                        animate={{ 
                                                            opacity: isActive ? 0.6 : 0.15,
                                                            strokeWidth: isActive ? 2 : 1
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                );
                                            })
                                        )}
                                    </svg>

                                    {/* Skill nodes */}
                                    {constellationSkills.map((skill, index) => {
                                        const colors = constellationCategories[skill.category];
                                        const isActive = isConnectionActive(skill.id);

                                        return (
                                            <motion.div
                                                key={skill.id}
                                                className="absolute"
                                                style={{
                                                    left: `${skill.x}%`,
                                                    top: `${skill.y}%`,
                                                    transform: 'translate(-50%, -50%)'
                                                }}
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ 
                                                    delay: index * 0.05,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            >
                                                <motion.div
                                                    className={`
                                                        ${sizeClasses[skill.size]}
                                                        ${colors.node}
                                                        rounded-full
                                                        border-2
                                                        flex items-center justify-center
                                                        cursor-pointer
                                                        font-bold text-white
                                                        text-center
                                                        shadow-lg
                                                        backdrop-blur-sm
                                                        transition-all duration-300
                                                        leading-tight
                                                    `}
                                                    onMouseEnter={() => setHoveredSkill(skill.id)}
                                                    onMouseLeave={() => setHoveredSkill(null)}
                                                    onClick={() => setHoveredSkill(hoveredSkill === skill.id ? null : skill.id)}
                                                    whileHover={{ 
                                                        scale: 1.2,
                                                        zIndex: 50
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    animate={{
                                                        scale: isActive ? 1.15 : 1,
                                                        boxShadow: isActive 
                                                            ? '0 0 20px rgba(59, 130, 246, 0.6)'
                                                            : '0 5px 15px rgba(0, 0, 0, 0.3)',
                                                        zIndex: isActive ? 40 : 1
                                                    }}
                                                >
                                                    <span className="px-0.5 md:px-1 break-words">{skill.name}</span>
                                                </motion.div>

                                                {/* Tooltip */}
                                                {hoveredSkill === skill.id && (
                                                    <motion.div
                                                        className={`absolute ${getTooltipPosition(skill.x, skill.y)} bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 shadow-2xl border border-gray-200 dark:border-gray-700 w-[150px] md:w-[200px] z-50`}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm md:text-base">
                                                            {skill.id === 'javascript' ? 'JavaScript' : skill.name}
                                                        </h4>
                                                        <p className="text-[0.65rem] md:text-xs text-gray-600 dark:text-gray-400 mb-2">
                                                            Used in:
                                                        </p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {skill.projects.map((project) => (
                                                                <span
                                                                    key={project}
                                                                    className="text-[0.65rem] md:text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                                                                >
                                                                    {project}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Mobile instruction */}
                            <motion.p
                                className="text-center text-gray-400 mt-6 md:mt-8 text-sm md:hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                Tap on skills to see connections and projects
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default SkillsSection;