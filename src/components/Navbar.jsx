// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/trips", label: "Trips" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/feedback", label: "Feedback" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-blue-600/80 dark:bg-gray-900/80 backdrop-blur-md text-white shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/TravelSmart-logo.png"
            alt="Travel Smart Logo"
            className="h-16 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative group ${isActive ? "text-yellow-300 font-bold" : "text-white"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-xl p-2 rounded-full bg-blue-700 hover:bg-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-xl flex flex-col items-center px-6 py-8 space-y-6 z-40"
          >
            {/* Close Button */}
            <button
              className="self-end text-2xl mb-4 text-black dark:text-white"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Links */}
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-lg w-full text-center px-2 py-2 rounded-md ${isActive
                      ? "text-yellow-500 font-bold bg-yellow-500/20"
                      : "text-black dark:text-white hover:text-yellow-500 hover:bg-yellow-500/10"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
