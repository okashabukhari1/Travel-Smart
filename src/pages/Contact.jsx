import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Validate form
    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message.trim()) errors.message = "Message is required";
        return errors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-6 mt-10 mb-20 flex flex-col items-center justify-center">
            <div className="relative w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between text-center md:text-left rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 mb-10">
                {/* Optional Overlay for Depth */}
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

                {/* Text Section */}
                <div className="flex-1 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-4xl font-extrabold text-white drop-shadow-lg"
                    >
                        Get in Touch With Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-3 text-lg md:text-xl text-green-100 max-w-xl"
                    >
                        Have questions or need help? We’re just one message away
                    </motion.p>
                </div>

                {/* Contact Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 flex items-center justify-center w-28 h-28 md:w-40 md:h-40 bg-white/20 rounded-full shadow-lg animate-pulse"
                >
                    <PhoneCall className="w-16 h-16 md:w-24 md:h-24 text-yellow-300 drop-shadow-[0_0_20px_rgba(255,255,0,0.9)]" />
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Information */}
                <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                        We'd love to hear from you! Reach out to us using the form, or via the following contact details:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Email:</strong> info@travelsmart.com
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Phone:</strong> +1 234 567 890
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Location:</strong> 123 Travel St, Adventure City, World
                    </p>

                    {/* Map */}
                    <div className="mt-4 rounded-lg">
                        <iframe
                            title="Location Map"
                            width="100%"
                            height="300"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1522338510417!2d67.03217337443196!3d24.926883342598195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f90157042d3%3A0x93d609e8bec9a880!2sAptech%20Computer%20Education%20North%20Nazimabad%20Center!5e0!3m2!1sen!2s!4v1756409045782!5m2!1sen!2s"
                            allowFullScreen
                            className="w-full rounded-lg"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    {submitted && (
                        <p className="mb-4 p-3 bg-green-200 text-green-800 rounded">
                            Thank you! Your message has been submitted.
                        </p>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => {
                                    const lettersOnly = e.target.value.replace(/[^A-Za-z\s]/g, "");
                                    setFormData({ ...formData, name: lettersOnly })
                                }}
                                className={`w-full px-3 py-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"
                                    } dark:bg-gray-900 dark:border-gray-700`}
                                placeholder="Enter Your Name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
                                    } dark:bg-gray-900 dark:border-gray-700`}
                                    placeholder="Enter Your Email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className={`w-full px-3 py-2 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"
                                    } dark:bg-gray-900 dark:border-gray-700`}
                                    placeholder="Share your message..."
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
