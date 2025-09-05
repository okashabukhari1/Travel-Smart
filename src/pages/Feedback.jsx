import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { MessageSquareText } from "lucide-react";

export default function Feedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
        rating: 0,
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.feedback.trim()) errors.feedback = "Feedback is required";
        if (!formData.rating) errors.rating = "Rating is required";
        return errors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRating = (value) => {
        setFormData({ ...formData, rating: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Feedback submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", feedback: "", rating: 0 });
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    return (
        <div className="px-6 mt-10 flex flex-col items-center justify-center">
            {/* Banner Section */}
            <div className="relative w-[80%] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between text-center md:text-left rounded-3xl shadow-xl overflow-hidden p-8 md:p-12">
                {/* Text Section */}
                <div className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-lg"
                    >
                        Share Your Feedback With Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-3 text-lg md:text-xl text-blue-100 max-w-xl"
                    >
                        Your opinion helps us grow and serve you better 🌟
                    </motion.p>
                </div>

                {/* Attractive Feedback Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center w-28 h-28 md:w-40 md:h-40 bg-white/20 rounded-full shadow-lg animate-pulse"
                >
                    <MessageSquareText className="w-16 h-16 md:w-24 md:h-24 text-yellow-300 drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]" />
                </motion.div>
            </div>

            {/* Feedback Form */}
            <div className="max-w-3xl mx-auto mt-12 mb-20 w-full">
                {submitted && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg shadow-md text-center"
                    >
                        ✅ Thank you! Your feedback has been submitted.
                    </motion.div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white shadow-xl rounded-2xl p-8 dark:bg-gray-900"
                >
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => {
                                const lettersOnly = e.target.value.replace(/[^A-Za-z\s]/g, "");
                                setFormData({ ...formData, name: lettersOnly });
                            }}
                            className={`w-full px-4 py-2 border rounded-lg bg-transparent ${errors.name ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter your full name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg bg-transparent ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Feedback */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Feedback</label>
                        <textarea
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                            rows="5"
                            className={`w-full px-4 py-2 border rounded-lg bg-transparent ${errors.feedback ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Share your experience..."
                        ></textarea>
                        {errors.feedback && (
                            <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>
                        )}
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Rating</label>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={30}
                                    className={`cursor-pointer transition ${star <= formData.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                        }`}
                                    onClick={() => handleRating(star)}
                                />
                            ))}
                        </div>
                        {errors.rating && (
                            <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition"
                    >
                        Submit Feedback
                    </motion.button>
                </form>
            </div>
        </div>
    );
}
