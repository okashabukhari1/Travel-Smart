import { useState } from "react";

export default function Feedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
        rating: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Form validation
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Feedback submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", feedback: "", rating: "" });
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 mt-20 mb-20">
            <h1 className="text-4xl font-bold mb-6 text-center">Feedback</h1>

            {submitted && (
                <p className="mb-6 p-3 bg-green-200 text-green-800 rounded">
                    Thank you! Your feedback has been submitted.
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Feedback */}
                <div>
                    <label className="block text-sm font-medium mb-1">Feedback</label>
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-3 py-2 border rounded-lg ${errors.feedback ? "border-red-500" : "border-gray-300"
                            } dark:bg-gray-900 dark:border-gray-700`}
                    ></textarea>
                    {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>}
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-sm font-medium mb-1">Rating</label>
                    <select
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg ${errors.rating ? "border-red-500" : "border-gray-300"
                            } dark:bg-gray-900 dark:border-gray-700`}
                    >
                        <option value="">Select rating</option>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Good</option>
                        <option value="3">3 - Average</option>
                        <option value="2">2 - Poor</option>
                        <option value="1">1 - Very Poor</option>
                    </select>
                    {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
}
