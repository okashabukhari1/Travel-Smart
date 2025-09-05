import { useState } from "react";

export default function PackageReview() {
    const [formData, setFormData] = useState({
        name: "",
        review: "",
        rating: "",
    });

    const [errors, setErrors] = useState({});
    const [submittedReviews, setSubmittedReviews] = useState([]);

    // Validation function
    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        else if (!/^[A-Za-z\s]+$/.test(formData.name))
            errors.name = "Name can only contain letters and spaces";

        if (!formData.review.trim()) errors.review = "Review is required";
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
            // Add review to submitted list
            setSubmittedReviews([...submittedReviews, formData]);
            // Reset form
            setFormData({ name: "", review: "", rating: "" });
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-6 mt-20 mb-20">
            <h1 className="text-4xl font-bold mb-6 text-center">Package Tour Review</h1>

            {/* Review Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-10">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"
                            } dark:bg-gray-900 dark:border-gray-700`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Review</label>
                    <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleChange}
                        rows="4"
                        className={`w-full px-3 py-2 border rounded-lg ${errors.review ? "border-red-500" : "border-gray-300"
                            } dark:bg-gray-900 dark:border-gray-700`}
                    ></textarea>
                    {errors.review && <p className="text-red-500 text-sm mt-1">{errors.review}</p>}
                </div>

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
                    Submit Review
                </button>
            </form>

            {/* Submitted Reviews */}
            <div className="space-y-4">
                {submittedReviews.length === 0 ? (
                    <p className="text-center text-gray-500">No reviews yet.</p>
                ) : (
                    submittedReviews.map((rev, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-sm">
                            <p className="font-semibold">{rev.name}</p>
                            <p className="text-yellow-500">⭐ {rev.rating}</p>
                            <p>{rev.review}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
