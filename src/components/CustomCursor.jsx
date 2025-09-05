// src/components/CustomCursor.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const moveTouch = (e) => {
            if (e.touches.length > 0) {
                setPosition({
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                });
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("touchmove", moveTouch);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("touchmove", moveTouch);
        };
    }, []);

    return (
        <motion.div
            className="fixed pointer-events-none w-8 h-8 bg-yellow-400 rounded-full z-50 mix-blend-difference hidden md:block"
            animate={{ x: position.x - 16, y: position.y - 16 }} // center cursor
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
}
