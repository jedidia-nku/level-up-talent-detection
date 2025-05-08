import React, { useState } from 'react'
import Footer from '../components/Home-Sections/Footer'
import {motion} from "framer-motion";
import { IoCloseSharp } from 'react-icons/io5';
import ContactForm from '../components/ContactForm';
import { MdOutlineEmail } from 'react-icons/md';

const Contact: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
        <header className="top-0 bg-white shadow-md fixed w-full z-50">
          <div className="container mx-auto flex justify-between items-center py-3 px-4">
              {/* Logo Section */}
                  <motion.div
                  initial={{ opacity:0, y: -100 }}
                  animate={{ opacity:1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }} className="flex flex-shrink-0">
                  <a href="/" className="text-2xl font-bold text-yellow-400">
                  LEVEL
                </a>
                <a href="/" className="flex items-center">
              <img src="/assets/logo.png" className="h-10"/>
              <a href="/" className="text-2xl font-bold text-yellow-400">
              UP
              </a>
            </a>
              </motion.div>
                <motion.nav
                initial={{ opacity:0, y: -100 }}
                animate={{ opacity:1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }} className="hidden md:flex md:space-x-6">
                <a href="/" className="hover:text-yellow-200">
                  Home
                </a>
                <a href="/about" className="hover:text-yellow-200 transition-all">
                  About Us
                </a>
                <a href="/registration" className="hover:text-yellow-200 transition-all">
                Registration
                </a>
                <a href="/newsAndGallery" className="hover:text-yellow-200 transition-all">
                News and Gallery
                </a>
                <a href="/contact" className="text-yellow-400 hover:text-yellow-200 transition-all">
                  Contact Us
                </a>
              </motion.nav>
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-800 focus:outline-none"
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
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>)}
                </button>
              </div>
          </div>
                  {/* Mobile Navigation Menu */}        
              {isMobileMenuOpen && (
              <div className="space-y-4 p-4">
              <a href="/" className="block text-lg hover:text-yellow-200 transition-all">
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
              <a href="/contact" className="block text-lg text-yellow-400 hover:text-yellow-200 transition-all">
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
        </header>

    <main className="mt-16">
            <div
              className="relative bg-cover bg-center text-white py-36"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
            >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-[80%] text-center">
            <motion.h1
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }} className="text-4xl font-bold text-yellow-300 transition-all">
                Contact Us
            </motion.h1>
        
            <motion.p
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }} className='mt-2 max-w-[70%] text-xl'>
              Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
            </motion.p>
        
            <motion.p
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }} className="text-lg mt-3">
              Home / <span className="text-yellow-400">Contact</span>
            </motion.p>
              </div>
            </div>
    </main>

        <section className="mb-16">
            <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
        ></iframe>
        </div>

    <div className="container px-6 md:px-12 font-newtimesRoman mx-auto">
    <motion.div
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }}
        className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-8 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
        <div className="w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 transition-all pb-6">Contact Us</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="mb-12 w-full md:w-[60%] shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-6/12 lg:px-6">
        <ContactForm />
        </div>
        <div className="w-full md:w-[40%]">
        <div className="w-full flex flex-col">
            <motion.div
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }} className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-full lg:px-6 xl:mb-6 w-full">
            <div className="flex items-start">
                <div className="srink-0">
                <div className="inline-block rounded-md bg-yellow-200 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                </div>
                </div>
                <div className="ml-6 grow">
                <p className="text-lg mb-1 font-bold">
                    Address
                </p>
                <p className="text-md text-neutral-500">
                    Rwanda, Kigali
                </p>
                </div>
            </div>
            </motion.div>
            <motion.div
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-full lg:px-6 xl:mb-6 w-full">
            <div className="align-start flex">
                <div className="shrink-0">
                <div className="inline-block rounded-md bg-yellow-200 p-4 text-primary">
                    <MdOutlineEmail className="text-3xl"/>
            
                </div>
                </div>
                <div className="ml-6 grow">
                <p className="text-lg mb-1 font-bold ">Email</p>
                <p className="text-md text-neutral-500"> example@gmail.com
                </p>
                </div>
            </div>
            </motion.div>
            <motion.div
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.7,
            }} className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-full lg:px-6 xl:mb-6 w-full">
            <div className="align-start flex">
                <div className="shrink-0">
                <div className="inline-block rounded-md bg-yellow-200 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </div>
                </div>
                <div className="ml-6 mb-10 md:mb-1 grow">
                <p className="text-lg mb-1 font-bold ">Mobile</p>
                <p className="text-md text-neutral-500"> +250 780 000 000
                </p>
                </div>
            </div>
            </motion.div>
        </div>
        </div>
      </div>
      </motion.div>
    </div>
        </section>
        <Footer />
    </>
  )
}

export default Contact
