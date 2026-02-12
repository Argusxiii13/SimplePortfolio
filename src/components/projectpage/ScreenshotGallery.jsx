import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ScreenshotGallery({ screenshots, projectTitle }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const handlePrev = () => {
        setModalIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    const handleNext = () => { 
        setModalIndex((prev) => (prev + 1) % screenshots.length);
    };

    if (!screenshots || screenshots.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold text-white mb-6">Screenshots & Album</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto pb-4">
                {screenshots.map((src, idx) => (
                    <button
                        key={src}
                        onClick={() => { setModalIndex(idx); setModalOpen(true); }}
                        className="relative w-full h-36 sm:h-40 md:h-44 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-all"
                    >
                        <img src={src} alt={`${projectTitle} ${idx + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    </button>
                ))}
            </div>

            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setModalOpen(false)}
                >
                    <div className="max-w-4xl w-full" onClick={(event) => event.stopPropagation()}>
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <button
                                onClick={handlePrev}
                                className="px-3 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition"
                                type="button"
                            >
                                Prev
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-3 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition"
                                type="button"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-3 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition"
                                type="button"
                            >
                                Next
                            </button>
                        </div>
                        <motion.img
                            key={modalIndex}
                            src={screenshots[modalIndex]}
                            alt={`${projectTitle} modal ${modalIndex + 1}`}
                            onClick={handleNext}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35 }}
                            className="w-full h-auto rounded-lg object-contain cursor-pointer"
                        />
                    </div>
                </div>
            )}
        </motion.div>
    );
}

export default ScreenshotGallery;
