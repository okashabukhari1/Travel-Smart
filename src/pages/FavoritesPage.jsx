import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritesPage() {
    const { favorites, removeFromFavorites } = useFavorites();

    return (
        <div className="mt-20 px-6">
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
                My Favorites ❤️
            </h2>

            {favorites.length === 0 ? (
                <p className="text-center text-gray-500">
                    No trips added to favorites yet.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {favorites.map((trip) => (
                        <div
                            key={trip.id}
                            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <Link to={`/trips/${trip.id}`}>
                                <img
                                    src={trip.image}
                                    alt={trip.title}
                                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </Link>

                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                                <h3 className="text-lg font-bold">{trip.title}</h3>
                                <p className="text-sm">{trip.location}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="font-semibold">${trip.price}</span>
                                    <span className="flex items-center text-yellow-400">
                                        ⭐ {trip.rating}
                                    </span>
                                    <button
                                        onClick={() => removeFromFavorites(trip.id)}
                                        className="text-2xl"
                                    >
                                        ❌
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
