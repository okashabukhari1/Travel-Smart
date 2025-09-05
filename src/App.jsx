import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import PackageReview from "./pages/PackageReview";
import TopDestinations from "./components/TopDestinations";

function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      {/* Home is full width so hero can be edge-to-edge */}
      {location.pathname === "/" ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        /* Other pages are contained */
        <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/:id" element={<TripDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/packagereview" element={<PackageReview />} />
          </Routes>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
