import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import tripsData from "../data/tripsData";
import {
    MapPin,
    DollarSign,
    Star,
    Hotel,
    Train,
    Plane,
    Bus,
    Car,
    ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TripDetail() {
    const { id } = useParams();
    const trip = tripsData.find((t) => t.id === Number(id));

    const [currentImage, setCurrentImage] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const swipeConfidenceThreshold = 100;
    const [direction, setDirection] = useState(0); // +1 = forward, -1 = backward

    if (!trip) return <p className="mt-20 text-center">Trip not found.</p>;

    const handleAddReview = () => {
        if (!newReview.trim() || rating === 0) return;
        setReviews([...reviews, { text: newReview, rating }]);
        setNewReview("");
        setRating(0);
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentImage(
            (prev) =>
                (prev + newDirection + trip.images.length) % trip.images.length
        );
    };

    const handleDragEnd = (event, info) => {
        if (info.offset.x > swipeConfidenceThreshold) {
            paginate(-1); // swipe right → previous
        } else if (info.offset.x < -swipeConfidenceThreshold) {
            paginate(1); // swipe left → next
        }
    };

    // Variants depending on direction
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <div className="mt-20 max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
                {/* ===== Left Column: Gallery + Video ===== */}
                <div>
                    {/* === Image Gallery === */}
                    <div
                        className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-4 cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.img
                                key={currentImage}
                                src={trip.images[currentImage]}
                                alt={`Slide ${currentImage}`}
                                className="w-full h-full object-cover rounded-lg"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                            />
                        </AnimatePresence>

                        {/* Prev Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                paginate(-1);
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition z-10"
                        >
                            ‹
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                paginate(1);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition z-10"
                        >
                            ›
                        </button>
                    </div>

                    {/* ===== Thumbnails ===== */}
                    <div className="flex gap-2 mb-6">
                        {trip.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Thumb ${i}`}
                                onClick={() => {
                                    setDirection(i > currentImage ? 1 : -1);
                                    setCurrentImage(i);
                                }}
                                className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 transition-transform duration-300 ${i === currentImage ? "border-yellow-400 scale-105" : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* ===== Modal (Fullscreen Carousel) ===== */}
                    {isModalOpen && (
                        <div
                            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
                            onClick={() => setIsModalOpen(false)}
                        >
                            {/* Prevent clicks inside from closing */}
                            <div
                                className="relative flex flex-col items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Main Image with swipe */}
                                <div className="relative flex items-center justify-center">
                                    <AnimatePresence initial={false} custom={direction} mode="wait">
                                        <motion.img
                                            key={currentImage}
                                            src={trip.images[currentImage]}
                                            alt="Fullscreen"
                                            className="max-h-[70vh] max-w-[70vw] rounded-lg shadow-lg"
                                            custom={direction}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            onDragEnd={handleDragEnd}
                                        />

                                    </AnimatePresence>

                                    {/* Prev Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            paginate(-1);
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition"
                                    >
                                        ‹
                                    </button>

                                    {/* Next Button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            paginate(1);
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition"
                                    >
                                        ›
                                    </button>
                                </div>

                                {/* Thumbnails */}
                                <div className="flex gap-3 mt-6 flex-wrap justify-center">
                                    {trip.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Thumb ${i}`}
                                            onClick={() => {
                                                setDirection(i > currentImage ? 1 : -1);
                                                setCurrentImage(i);
                                            }}
                                            className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 transition-transform duration-300 ${i === currentImage
                                                ? "border-yellow-400 scale-105"
                                                : "border-transparent"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-yellow-400"
                            >
                                ✕
                            </button>
                        </div>
                    )}


                    {/* Video */}
                    {trip.video && (
                        <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
                            <iframe
                                src={trip.video}
                                title="Trip Video"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>

                {/* ===== Right Column: Info Card ===== */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-2 dark:text-white">
                        {trip.title}
                    </h1>

                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                        <MapPin className="w-5 h-5 mr-2 text-blue-500" /> {trip.location}
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {trip.description}
                    </p>

                    <p className="flex items-center text-xl font-bold mb-2">
                        <DollarSign className="w-5 h-5 mr-1 text-green-500" /> ${trip.price}
                    </p>

                    <p className="flex items-center text-yellow-500 mb-6">
                        <Star className="w-5 h-5 mr-1 fill-yellow-400" /> {trip.rating}
                    </p>

                    {/* Accommodations */}
                    <h2 className="text-lg font-semibold mb-3 flex items-center dark:text-white">
                        <Hotel className="w-5 h-5 mr-2 text-indigo-500" /> Accommodations
                    </h2>
                    <ul className="mb-6 space-y-2">
                        {trip.accommodations.map((acc, i) => (
                            <li
                                key={i}
                                className="p-2 border rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900"
                            >
                                {acc.type}: <strong>{acc.name}</strong> ({acc.rating}★)
                            </li>
                        ))}
                    </ul>

                    {/* Transport */}
                    <h2 className="text-lg font-semibold mb-3 flex items-center dark:text-white">
                        <Train className="w-5 h-5 mr-2 text-red-500" /> Transport Options
                    </h2>
                    <ul className="space-y-2">
                        {trip.transport.map((t, i) => (
                            <li
                                key={i}
                                className="p-2 border rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 flex items-start"
                            >
                                {t.type === "Flight" && (
                                    <Plane className="w-5 h-5 mr-2 text-sky-500" />
                                )}
                                {t.type === "Train" && (
                                    <Train className="w-5 h-5 mr-2 text-red-500" />
                                )}
                                {t.type === "Bus" && <Bus className="w-5 h-5 mr-2 text-green-500" />}
                                {t.type === "Car" && (
                                    <Car className="w-5 h-5 mr-2 text-orange-500" />
                                )}
                                <div>
                                    <strong>{t.type}</strong>: {t.info} <br />
                                    ⏱ {t.time} • 💵 {t.price}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Back Button */}
                    <div className="mt-8">
                        <Link
                            to="/trips"
                            className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                        >
                            <ArrowLeft className="w-5 h-5" /> Back to Trips
                        </Link>
                    </div>
                </div>
            </div>

            {/* ===== Reviews ===== */}
            <div className="mt-12 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 flex items-center dark:text-white">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" /> Reviews
                </h2>

                {/* Add Review */}
                <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write your review..."
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-3"
                ></textarea>

                {/* Rating stars */}
                <div className="flex gap-2 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-400"
                                }`}
                        >
                            <Star
                                className="w-6 h-6"
                                fill={star <= rating ? "currentColor" : "none"}
                            />
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleAddReview}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                    Submit Review
                </button>

                {/* List of Reviews */}
                <div className="mt-6 space-y-4">
                    {reviews.length === 0 ? (
                        <p className="text-gray-500">No reviews yet. Be the first!</p>
                    ) : (
                        reviews.map((rev, i) => (
                            <div
                                key={i}
                                className="p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
                            >
                                <p className="mb-1">{rev.text}</p>
                                <p className="text-yellow-500 flex items-center">
                                    <Star className="w-5 h-5 mr-1 fill-yellow-400" /> {rev.rating}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
