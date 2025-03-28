import React, { useState } from 'react'
import {motion} from "framer-motion";

const Header : React.FC = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <div >
      <motion.header
        initial={{ opacity:0, y: -100 }}
        animate={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} 
        className="relative text-white font-newtimesRoman">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              LevelUp
            </a>
            <a href="/" className="flex items-center">
          <img src="/assets/logo.jpg" className="h-10"/>
        </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex md:space-x-2 lg:space-x-6 bg-gray-500 bg-opacity-20 md:px-2 lg:px-6 py-2 rounded-full">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
            <a href="/registration" className="hover:text-gray-300">
            Registration
            </a>
            <a href="/newsAndGallery" className="hover:text-gray-300">
            News and Gallery
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </nav>
          {/* Call-to-Action Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black md:py-2 md:px-3 lg:py-3 lg:px-6 rounded-full text-lg transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mt-5 space-y-4">
            <a href="#" className="block text-lg hover:text-gray-300 transition-all">
            Home
            </a>
            <a href="/services" className="block text-lg hover:text-gray-300 transition-all">
            About Us
            </a>
            <a href="#about" className="block text-lg hover:text-gray-300 transition-all">
            Registration
            </a>
            <a href="#contact" className="block text-lg hover:text-gray-300 transition-all">
            Contact Us
            </a>
          </div>
        )}
      </div>
    </motion.header>
    </div>
  )
}

export default Header
