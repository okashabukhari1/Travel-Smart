import { useState } from "react";
import { Link } from "react-router-dom";
import tripsData from "../data/tripsData";

export default function Trips() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [minRating, setMinRating] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    let trips = tripsData
        .filter(
            (trip) =>
                trip.title.toLowerCase().includes(search.toLowerCase()) ||
                trip.location.toLowerCase().includes(search.toLowerCase())
        )
        .filter((trip) => {
            if (minRating > 0 && trip.rating > minRating) return false;
            if (maxPrice > 0 && trip.price > maxPrice) return false;
            return true;
        });

    if (sort === "price-low") trips.sort((a, b) => a.price - b.price);
    if (sort === "price-high") trips.sort((a, b) => b.price - a.price);
    if (sort === "rating") trips.sort((a, b) => b.rating - a.rating);
    if (sort === "alpha") trips.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="mt-20 flex flex-col md:flex-row gap-8 px-4 md:px-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg h-fit sticky top-28">
                <h3 className="text-2xl font-bold mb-6 dark:text-white text-center md:text-left">Filters</h3>

                {/* Search */}
                <div className="mb-5">
                    <label className="block text-sm mb-1 font-medium dark:text-gray-300">Search</label>
                    <input
                        type="text"
                        placeholder="Search destination..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400 transition"
                    />
                </div>

                {/* Sort */}
                <div className="mb-5">
                    <label className="block text-sm mb-1 font-medium dark:text-gray-300">Sort By</label>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400 transition"
                    >
                        <option value="">Default</option>
                        <option value="price-low">Price: Low → High</option>
                        <option value="price-high">Price: High → Low</option>
                        <option value="rating">Rating</option>
                        <option value="alpha">Alphabetical</option>
                    </select>
                </div>

                {/* Rating Range */}
                <div className="mb-5">
                    <label className="block text-sm mb-1 font-medium dark:text-gray-300">
                        Min Rating: <span className="font-semibold">{minRating}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.1"
                        value={minRating}
                        onChange={(e) => setMinRating(parseFloat(e.target.value))}
                        className="w-full h-2 bg-yellow-300 rounded-lg accent-yellow-500"
                    />
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <label className="block text-sm mb-1 font-medium dark:text-gray-300">
                        Max Price: <span className="font-semibold">${maxPrice}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        step="50"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full h-2 bg-yellow-300 rounded-lg accent-yellow-500"
                    />
                </div>

                <button
                    onClick={() => {
                        setSearch("");
                        setSort("");
                        setMinRating(0);
                        setMaxPrice(0);
                    }}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
                >
                    Reset Filters
                </button>
            </aside>

            {/* Trips Grid */}
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Available Trips</h2>
                {trips.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">No trips found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trips.map((trip) => (
                            <Link key={trip.id} to={`/trips/${trip.id}`}>
                                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
                                    <img
                                        src={trip.images[0]}
                                        alt={`${trip.title} image`}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-all duration-300 group-hover:from-black/80">
                                        <h3 className="text-lg sm:text-xl font-bold">{trip.title}</h3>
                                        <p className="text-sm sm:text-base">{trip.location}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="font-semibold text-yellow-300">${trip.price}</span>
                                            <span className="flex items-center text-yellow-400 font-medium">
                                                ⭐ {trip.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
