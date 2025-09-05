import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import tripsData from "../data/tripsData";
import { useNavigate, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

export default function TopDestinations() {
    const book = useRef();
    const topTrips = tripsData.slice(0, 6);
    const navigate = useNavigate();

    const [bookSize, setBookSize] = useState({ width: 300, height: 200 });

    // Adjust book size on window resize
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 400) {
                setBookSize({ width: screenWidth - 40, height: (screenWidth - 40) * 0.66 });
            } else {
                setBookSize({ width: 300, height: 200 });
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="mt-20 text-center">
            <HTMLFlipBook
                width={bookSize.width}
                height={bookSize.height}
                size="stretch"
                showCover={true}
                mobileScrollSupport={true}
                ref={book}
                className="mx-auto shadow-2xl rounded-xl cursor-grab active:cursor-grabbing"
            >
                {/* Cover Page */}
                <div className="w-full h-full flex items-center justify-center">
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg px-4 py-5 sm:px-6 sm:py-4 flex items-center justify-center w-full h-full">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                            Top Destinations
                        </h2>
                    </div>
                </div>

                {/* Trip Pages */}
                {topTrips.map((trip) => (
                    <div key={trip.id} className="w-full h-full">
                        <img
                            src={trip.images[0]}
                            alt={trip.title}
                            className="h-full w-full object-cover rounded-lg"
                        />

                        {/* Overlay Card */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 sm:p-3 md:p-4">
                            <h3 className="text-sm sm:text-lg md:text-xl font-semibold">{trip.title}</h3>
                            <p className="text-xs sm:text-sm md:text-base">{trip.location}</p>
                            <button
                                onClick={() => navigate(`/trips/${trip.id}`)}
                                className="mt-1 sm:mt-2 bg-yellow-400 text-black px-2 sm:px-3 md:px-4 py-1 rounded-lg hover:bg-yellow-300 text-xs sm:text-sm md:text-base"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}

                <div className="w-full h-full flex items-center justify-center">
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg px-4 py-5 sm:px-6 sm:py-4 flex items-center justify-center w-full h-full">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                            <Link
                                to={`/trips`}
                                className="px-4 py-2 rounded-lg"
                            >
                                See More
                            </Link>
                        </h2>
                    </div>
                </div>
            </HTMLFlipBook>

            {/* Navigation Buttons */}
            <div className="mt-6 flex justify-center gap-3 sm:gap-4">
                <button
                    onClick={() => book.current.pageFlip().flipPrev()}
                    className="bg-yellow-400 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition text-sm sm:text-base text-black"
                >
                    <ChevronLeft size={30} />
                </button>
                <button
                    onClick={() => book.current.pageFlip().flipNext()}
                    className="bg-yellow-400 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition text-sm sm:text-base text-black"
                >
                    <ChevronRight size={30} />
                </button>
            </div>
        </div>
    );
}
