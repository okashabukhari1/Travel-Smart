import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-300 dark:bg-gray-800 px-14 py-10 grid md:grid-cols-3 gap-8">
                {/* Brand / Info */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        TravelSmart
                    </h2>
                    <p className="mt-2 text-sm">
                        Your smart companion for discovering amazing trips and experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link to="/trips" className="hover:text-blue-500">Trips</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-500">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                        Follow Us
                    </h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://web.facebook.com/" className="hover:text-blue-500"><FaFacebook /></a>
                        <a href="https://x.com/" className="hover:text-sky-400"><FaTwitter /></a>
                        <a href="https://www.instagram.com/" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="https://github.com/" className="hover:text-gray-400"><FaGithub /></a>
                    </div>
                </div>
            </div>

            {/* ✅ Bottom Bar with different background for dark mode */}
            <div className="bg-gray-300 dark:bg-gray-800 text-center py-4 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
                © {new Date().getFullYear()} TravelSmart. All rights reserved.
            </div>
        </footer>
    );
}
