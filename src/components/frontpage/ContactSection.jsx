import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin, Facebook } from 'lucide-react';

function ContactSection() {
    const contactInfo = [
        {
            id: 1,
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "jka.d.esperida@gmail.com",
            href: "mailto:jka.d.esperida@gmail.com",
            color: "from-red-500 to-pink-500"
        },
        {
            id: 2,
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "0992 601 2358",
            href: "tel:+639926012358",
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 3,
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Balatan Street, Western Bicutan, Taguig City, NCR, Philippines",
            href: "https://maps.google.com/?q=Balatan+Street+Western+Bicutan+Taguig+City+Philippines",
            color: "from-blue-500 to-cyan-500"
        }
    ];

    const [flippedCard, setFlippedCard] = useState(null);

    const socialLinks = [
        {
            id: 1,
            name: "Facebook",
            icon: <Facebook className="w-6 h-6" />,
            href: "https://www.facebook.com/majorical.maskeed/",
            qrCode: "/contacts/MyFacebook.jpg", 
            bgColor: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
            description: "Connect on Facebook",
            linkText: "Open Facebook Profile"
        },
        {
            id: 2,
            name: "Viber",
            icon: <MessageCircle className="w-6 h-6" />,
            qrCode: "/contacts/MyViber.jpg", 
            phoneNumber: "0992 601 2358",
            bgColor: "bg-purple-600",
            hoverColor: "hover:bg-purple-700",
            description: "Scan QR to connect",
            linkText: "Phone: 0992 601 2358"
        },
        {
            id: 3,
            name: "LinkedIn",
            icon: <Linkedin className="w-6 h-6" />,
            href: "https://www.linkedin.com/in/jka-d-esperida",
            qrCode: "/contacts/MyLinkedin.jpg", 
            bgColor: "bg-blue-700",
            hoverColor: "hover:bg-blue-800",
            description: "Professional Network",
            linkText: "Open LinkedIn Profile"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
        <section id="contact" className="min-h-screen py-20 bg-transparent">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's
                        <span className="text-blue-600 dark:text-blue-400"> Connect</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities and collaborating on exciting projects.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Contact Information Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6 mb-16"
                    >
                        {contactInfo.map((contact) => (
                            <motion.a
                                key={contact.id}
                                href={contact.href}
                                target={contact.id === 3 ? "_blank" : undefined}
                                rel={contact.id === 3 ? "noopener noreferrer" : undefined}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 group"
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                                
                                <div className="relative">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                                        {contact.icon}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                                        {contact.label}
                                    </p>
                                    <p className="text-gray-900 dark:text-white font-medium break-words">
                                        {contact.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Social Media Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-10">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                Find Me Online
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Choose your preferred platform to get in touch
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {socialLinks.map((social) => (
                                <motion.div
                                    key={social.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -8 }}
                                    className="group perspective cursor-pointer"
                                    style={{ perspective: '1000px' }}
                                    onClick={() => setFlippedCard(flippedCard === social.id ? null : social.id)}
                                >
                                    <div
                                        className="relative w-full"
                                        style={{ 
                                            transformStyle: 'preserve-3d',
                                            transition: 'transform 0.6s',
                                            minHeight: '280px'
                                        }}
                                    >
                                        <motion.div
                                            animate={{ rotateY: flippedCard === social.id ? 180 : 0 }}
                                            transition={{ duration: 0.6 }}
                                            style={{ 
                                                transformStyle: 'preserve-3d',
                                                position: 'relative',
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        >
                                            {/* Front of card */}
                                            <div
                                                className={`absolute inset-0 ${social.bgColor} ${social.hoverColor} rounded-2xl p-8 shadow-xl transition-all flex flex-col items-center justify-center`}
                                                style={{ 
                                                    backfaceVisibility: 'hidden',
                                                    WebkitBackfaceVisibility: 'hidden',
                                                    minHeight: '280px'
                                                }}
                                            >
                                                <div className="text-white mb-4 transform group-hover:scale-110 transition-transform">
                                                    <div className="w-16 h-16 flex items-center justify-center">
                                                        {React.cloneElement(social.icon, { className: 'w-12 h-12' })}
                                                    </div>
                                                </div>
                                                <p className="text-white font-bold text-xl text-center mb-2">
                                                    {social.name}
                                                </p>
                                                <p className="text-white/80 text-sm text-center">
                                                    {social.description}
                                                </p>
                                                <p className="text-white/60 text-xs mt-4">
                                                    Click to view QR
                                                </p>
                                            </div>

                                            {/* Back of card - QR Code */}
                                            <div
                                                className="absolute inset-0 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center"
                                                style={{ 
                                                    backfaceVisibility: 'hidden',
                                                    WebkitBackfaceVisibility: 'hidden',
                                                    transform: 'rotateY(180deg)',
                                                    minHeight: '280px'
                                                }}
                                            >
                                                <div className="w-full flex-1 flex items-center justify-center mb-4 px-2">
                                                    <img 
                                                        src={social.qrCode} 
                                                        alt={`${social.name} QR Code`}
                                                        className="w-full h-auto max-h-44 object-contain rounded-lg"
                                                    />
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 text-center">
                                                    Scan to connect on {social.name}
                                                </p>
                                                {social.href ? (
                                                    <a
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className={`${social.bgColor} ${social.hoverColor} text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors hover:shadow-lg`}
                                                    >
                                                        {social.linkText}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                                                        {social.linkText}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional CTA */}
                        <motion.div 
                            variants={itemVariants}
                            className="mt-10 text-center"
                        >
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Currently open to full-time opportunities
                            </p>
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                Available for work
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
