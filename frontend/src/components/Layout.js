import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Button from "./button";

import rocketmeImg1 from "../assets/images/rocketme img 1.png";
import rocketmeImg2 from "../assets/images/rocketme img2.jpg";
import heroBackground from "../assets/images/hero-background.jpg"; // Import the image directly

const Layout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 bg-opacity-80 text-white p-6 shadow-lg fixed w-full z-10 top-0 left-0">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.min.css"
        />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-24 h-24 rounded-full"
              src={rocketmeImg1}
              alt="Rocketme Up Logo"
            />
            <h1 className="font-bold text-3xl md:text-4xl text-white ml-4">
              Welcome To Rocketme Up
            </h1>
          </div>
          <nav className="hidden md:flex mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Services
                </button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
                    <li>
                      <Link
                        to="/services/strategy"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Strategy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/design"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/development"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/uxui"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        UX/UI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/marketing"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Marketing
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-2 px-6 rounded-full text-white bg-orange-500 hover:bg-orange-600 transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <Button />
        </div>
      </header>

      <main
        className="pt-32 md:pt-40 pb-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="container mx-auto">
          <div className="px-6 py-12 rounded-lg shadow-md">{children}</div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="flex flex-col items-start md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl text-gray-400 py-4">Address</h2>
            <p className="font-bold text-gray-200">
              ### Lorem ipsum lorem ipsum
            </p>
            <h2 className="text-2xl text-gray-400 py-4">Address</h2>
            <p className="font-bold text-gray-200">
              SAADA 4 NR 386 MHAMID 40000
            </p>
          </div>
          <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
            <img
              className="w-36 h-36 rounded-full shadow-lg"
              src={rocketmeImg2}
              alt="Rocketme Up Logo"
            />
          </div>
          <div className="flex flex-col items-start md:w-1/3">
            <h2 className="text-2xl text-gray-400 py-4">Work Inquiries</h2>
            <p className="font-bold text-gray-200">hello@rocketme.com</p>
            <h2 className="text-2xl text-gray-400 py-4">Phone</h2>
            <p className="font-bold text-gray-200">
              +212660010350 <br /> +212660470653
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-right">
          <nav className="order-1">
            <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services/strategy"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-2 px-6 rounded-full text-white bg-orange-500 hover:bg-orange-600 transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/RocketMeUp"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              <i className="ri-facebook-circle-fill text-3xl"></i>
            </a>
            <a
              href="https://twitter.com/RocketMeUp"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              <i className="ri-twitter-fill text-3xl"></i>
            </a>
            <a
              href="https://instagram.com/RocketMeUp"
              className="text-white hover:text-rose-400 transition duration-300"
            >
              <i className="ri-instagram-fill text-3xl"></i>
            </a>
            <a
              href="https://github.com/RocketMeUp"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <i className="ri-github-fill text-3xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/rocketmeup"
              className="text-white hover:text-blue-700 transition duration-300"
            >
              <i className="ri-linkedin-box-fill text-3xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
