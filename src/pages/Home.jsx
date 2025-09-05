// src/pages/Home.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
import tripsData from "../data/tripsData";
import TopDestinations from "../components/TopDestinations";
import ReviewSection from "../components/ReviewsSection";
import CustomCursor from "../components/CustomCursor";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  const book = useRef();

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="w-full">
      <CustomCursor />

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Find Your Next Adventure
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Explore destinations, book trips, and create memories.
          </motion.p>
          <Link
            to="/trips"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Start Exploring
          </Link>
        </motion.div>
      </section>


      {/* ========== TOP DESTINATIONS FLIPBOOK ========== */}
      <motion.section
        className="py-16 px-14 bg-white dark:bg-gray-900"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Top Destinations</h2>
        <TopDestinations />
      </motion.section>

      {/* ========== SPECIAL OFFERS SECTION ========== */}
      <motion.section
        className="py-20 max-w-7xl mx-auto px-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tripsData.slice(3, 6).map((trip) => (
            <motion.div
              key={trip.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={trip.images[0]}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {trip.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${trip.price}</span>
                  <Link
                    to={`/trips/${trip.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= Why Choose Us ================= */}
      <motion.section
        className="py-16 bg-white dark:bg-gray-900"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <p className="mb-12 text-center">
          We bring you the best travel experiences with premium services and
          unbeatable support.
        </p>
        <WhyChooseUs />
      </motion.section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <motion.section
        className="bg-gray-100 dark:bg-gray-900"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ReviewSection />
      </motion.section>

      {/* ========== CTA SECTION ========== */}
      <motion.section
        className="relative h-[400px] flex items-center justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero_bg_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready for your journey?</h2>
          <Link
            to="/trips"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Start Exploring
          </Link>
        </div>
      </motion.section>
    </div>
  );
}