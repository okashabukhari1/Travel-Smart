import { motion } from "framer-motion";

export default function ReviewsSection() {
    const reviews = [
        {
            name: "Alice Johnson",
            rating: 5,
            comment:
                "I loved the Paris trip! Everything was perfectly organized and the guides were amazing.",
            location: "New York, USA",
        },
        {
            name: "Rahul Sharma",
            rating: 4,
            comment:
                "Sydney adventure was thrilling! Surfing and sightseeing were unforgettable experiences.",
            location: "Mumbai, India",
        },
        {
            name: "Emma Watson",
            rating: 4.5,
            comment:
                "Tokyo cultural tour was excellent. I learned so much about Japanese culture and traditions.",
            location: "London, UK",
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-10 dark:text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    What People Say
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        >
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{rev.comment}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">{rev.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{rev.location}</p>
                                </div>
                                <p className="text-yellow-500 font-semibold">⭐ {rev.rating}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
