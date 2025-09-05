import { motion } from "framer-motion";
import { Globe, ThumbsUp, ShieldCheck, Clock } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <Globe className="w-10 h-10 text-yellow-500" />,
            title: "Worldwide Destinations",
            desc: "Explore top destinations across the globe with curated travel experiences.",
        },
        {
            icon: <ThumbsUp className="w-10 h-10 text-yellow-500" />,
            title: "Trusted by Travelers",
            desc: "Thousands of happy travelers trust us for unforgettable journeys.",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
            title: "Secure & Reliable",
            desc: "We ensure safe bookings and verified travel experiences.",
        },
        {
            icon: <Clock className="w-10 h-10 text-yellow-500" />,
            title: "24/7 Support",
            desc: "Our team is available around the clock to assist you anytime.",
        },
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
