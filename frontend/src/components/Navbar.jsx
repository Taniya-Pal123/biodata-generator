import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.from(navRef.current, { y: -20, opacity: 0, duration: 0.6, ease: "power2.out" });
  }, []);

  return (
    <div ref={navRef} className="flex justify-between items-center px-10 py-3 bg-[#f0f0f013]  h-18.75">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <FaHeart className="text-[#981b34]  text-2xl" />
        <h1 className="text-3xl text-[#2f211d] font-semibold"style={{ fontFamily: 'Georgia, serif' }}>ShaadiBio</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <Link
          className="text-gray-700 font-medium rounded-lg px-4 py-2 hover:bg-amber-600 transition-transform duration-200 hover:scale-105"
          to="/login"
        >
          Sign In
        </Link>

        <Link
          className="bg-[#981b34]  text-white px-4 py-2 rounded-lg font-medium 
    hover:bg-red-800 transition-transform duration-200 hover:scale-105"
          to="/register"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
