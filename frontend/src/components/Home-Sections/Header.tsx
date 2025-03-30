import React, { useState } from 'react'
import {motion} from "framer-motion";
import { IoCloseSharp } from 'react-icons/io5';

const Header : React.FC = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <div className='top-0 fixed md:relative w-full z-50'>
      <motion.header
        initial={{ opacity:0, y: -100 }}
        animate={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} 
        className="relative text-white font-newtimesRoman bg-gray-800 md:bg-transparent">
      <div className="">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo Section */}
          <div className="flex flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-yellow-400">
              LEVEL
            </a>
            <a href="/" className="flex items-center">
          <img src="/assets/logo.png" className="h-10"/>
          <a href="/" className="text-2xl font-bold text-yellow-400">
          UP
          </a>
        </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex md:space-x-2 lg:space-x-6 bg-gray-500 bg-opacity-20 md:px-2 lg:px-6 py-2 rounded-full">
            <a href="/" className="text-yellow-400 hover:text-yellow-200">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-200">
              About Us
            </a>
            <a href="/registration" className="hover:text-yellow-200">
            Registration
            </a>
            <a href="/newsAndGallery" className="hover:text-yellow-200">
            News and Gallery
            </a>
            <a href="/contact" className="hover:text-yellow-200">
              Contact Us
            </a>
          </nav>
        
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 text-black py-2 px-3 lg:px-4 rounded-sm text-lg transition-all"
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
              {isMobileMenuOpen ? 
              (<IoCloseSharp className="h-6 w-6"/>) :(<svg
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
              </svg>)}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="space-y-4 bg-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <a href="/" className="block text-lg text-yellow-400 hover:text-yellow-200 transition-all">
            Home
            </a>
            <a href="/about" className="block text-lg hover:text-yellow-200 transition-all">
            About Us
            </a>
            <a href="/registration" className="block text-lg hover:text-yellow-200 transition-all">
            Registration
            </a>
            <a href="/newsAndGallery" className="block text-lg hover:text-yellow-200 transition-all">
            News and Gallery
            </a>
            <a href="/contact" className="block text-lg hover:text-yellow-200 transition-all">
            Contact Us
            </a>
            
          <div className="px-16">
            <a
              href="/contact"
              className="block mt-10 mb-4 mx-auto text-center bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 text-black py-2 px-3 lg:px-4 rounded-sm text-lg transition-all"
            >
              Get in Touch
            </a>
          </div>

          </div>
        )}
      </div>
    </motion.header>
    </div>
  )
}

export default Header
