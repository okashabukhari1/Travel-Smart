import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

function SwipeCards({ destinations }) {
    const [cards, setCards] = useState(destinations);
    const [currentImages, setCurrentImages] = useState(destinations.map(() => 0));
    const [directions, setDirections] = useState(destinations.map(() => 0));
    const navigate = useNavigate();

    const handleDragEnd = (info, dest) => {
        if (info.offset.x > 120 || info.offset.x < -120) {
            setCards((prev) => {
                const filtered = prev.filter((c) => c.id !== dest.id);
                return [...filtered, dest]; // move swiped card to back
            });
        }
    };

    const handleNextImage = (i) => {
        setDirections((prev) => {
            const updated = [...prev];
            updated[i] = 1;
            return updated;
        });
        setCurrentImages((prev) => {
            const updated = [...prev];
            updated[i] = (updated[i] + 1) % cards[i].images.length;
            return updated;
        });
    };

    const handlePrevImage = (i) => {
        setDirections((prev) => {
            const updated = [...prev];
            updated[i] = -1;
            return updated;
        });
        setCurrentImages((prev) => {
            const updated = [...prev];
            updated[i] = (updated[i] - 1 + cards[i].images.length) % cards[i].images.length;
            return updated;
        });
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction) => ({
            x: direction > 0 ? -200 : 200,
            opacity: 0,
        }),
    };

    return (
        <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden">
            {cards.map((dest, i) => {
                const baseRotation = (i - Math.floor(cards.length / 2)) * 5;
                const scale = 1 - i * 0.05; // smaller cards behind

                return (
                    <motion.div
                        key={dest.id + i}
                        className="absolute w-80 h-[450px] rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        whileDrag={{ rotate: 0, scale: 1.05 }}
                        style={{ zIndex: cards.length - i, rotate: baseRotation, scale }}
                        onDragEnd={(e, info) => handleDragEnd(info, dest)}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        {/* Image Carousel */}
                        <div className="relative w-full h-full">
                            <AnimatePresence initial={false} custom={directions[i]}>
                                <motion.img
                                    key={currentImages[i]}
                                    src={dest.images[currentImages[i]]}
                                    custom={directions[i]}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="w-full h-full object-cover absolute top-0 left-0"
                                />
                            </AnimatePresence>

                            {/* Overlay with Title */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-4">
                                <h3 className="text-white text-xl font-bold">{dest.title}</h3>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-3">
                                    <button
                                        onClick={() => handlePrevImage(i)}
                                        className="bg-white/70 text-black p-2 rounded-full hover:bg-white"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleNextImage(i)}
                                        className="bg-white/70 text-black p-2 rounded-full hover:bg-white"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                    <button
                                        onClick={() => navigate(`/trips/${dest.id}`)}
                                        className="bg-yellow-400 text-black px-3 py-1 rounded-lg flex items-center gap-1 hover:bg-yellow-300"
                                    >
                                        <Info size={18} /> Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default SwipeCards;
