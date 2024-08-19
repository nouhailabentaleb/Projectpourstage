import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToggleMenuButton = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="relative">
      {/* Button container centered in the header on mobile */}
      <button
        onClick={toggleMenu}
        className="fixed top-16 items-center  md:hidden z-50 flex  justify-center p-3 text-white  rounded-full hover:bg-gray-700 transition duration-300"
        aria-label="Toggle menu"
      >
        <i className="ri-menu-line text-3xl"></i>
      </button>

      {/* Dropdown menu with animation */}
      <div
        className={`fixed top-16 right-4 w-48 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 ease-in-out ${
          isMenuVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        aria-hidden={!isMenuVisible}
      >
        <ul>
          <li>
            <Link
              to="/"
              className="block px-6 py-3 hover:bg-gray-100 transition duration-200"
              onClick={() => setIsMenuVisible(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-6 py-3 hover:bg-gray-100 transition duration-200"
              onClick={() => setIsMenuVisible(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block px-6 py-3 hover:bg-gray-100 transition duration-200"
              onClick={() => setIsMenuVisible(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block px-6 py-3 hover:bg-gray-100 transition duration-200"
              onClick={() => setIsMenuVisible(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-6 py-3 hover:bg-gray-100 transition duration-200"
              onClick={() => setIsMenuVisible(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleMenuButton;
