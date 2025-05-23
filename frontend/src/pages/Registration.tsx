import React, { useState } from "react";
import Footer from "../components/Home-Sections/Footer";
import {motion} from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import RegistrationForm from "../components/RegistrationForm";

const Registration: React.FC = () => {
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
          <a href="/registration" className="text-yellow-400 hover:text-yellow-200 transition-all">
          Registration
          </a>
          <a href="/newsAndGallery" className="hover:text-yellow-200 transition-all">
          News and Gallery
          </a>
          <a href="/contact" className="hover:text-yellow-200 transition-all">
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
                  strokeWidth={2}
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
        <a href="/registration" className="block text-lg text-yellow-400 hover:text-yellow-200 transition-all">
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
  </header>

    <main className="mt-16">
    <div
      className="relative bg-cover bg-center text-white py-36"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
    >
    <div className="absolute inset-0 bg-black opacity-30"></div>
    <div className="relative z-10 flex flex-col justify-center items-center h-[80%] text-center">
    <motion.h1
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.5,
    }} className="text-4xl font-bold text-yellow-400">Registration
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
      At Level Up Talent Detection, we are dedicated to discovering and empowering exceptional talent across industries. 
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
      Home / <span className="text-yellow-400">Registration</span>
    </motion.p>
      </div>
    </div>
    <section className="bg-gray-50">
      <div className="container mx-auto text-center mt-12">
      <motion.h2
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="text-3xl font-bold text-yellow-400">REGISTRATION
        </motion.h2>

        <motion.p
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="text-gray-600">Providing Fresh Produce Every Single Day
        </motion.p>
      </div>
     <div className="h-[70%] shadow-lg">
         <section className="pt-16 pb-24">
           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 grid-cols-1">
               <div className="lg:mb-0 mb-10">
                 <div className="group w-full h-full">
                   <div className="relative h-full">
                   <img
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="ContactUs tailwind section"
                    className="w-full h-full lg:rounded-l-2xl rounded-lg bg-blend-multiply bg-indigo-700"
                  />
                  {/* <motion.h1
                  initial={{ opacity:0, y: -100 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }} className="text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                      Register here
                    </motion.h1>
                    
                    <motion.div
                      initial={{ opacity:0, y: -100 }}
                      whileInView={{ opacity:1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                      }} className="absolute bottom-0 w-full lg:p-11 p-5">
                            <div className="bg-white rounded-lg p-6 block">
                                <a href="javascript:;" className="flex items-center mb-6">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">470-601-1911</h5>
                                </a>
                                <a href="https://veilmail.io/irish-geoff" className="flex items-center mb-6">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">https://veilmail.io/irish-geoff</h5>
                                </a>
                                <a href="javascript:;" className="flex items-center">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#4F46E5" stroke-width="2"/>
                                        <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#4F46E5" stroke-width="2"/>
                                    </svg>
                                    <h5 className="text-black text-base font-normal leading-6 ml-5">654 Sycamore Avenue, Meadowville, WA 76543</h5>
                                </a>
                            </div>
                        </motion.div> */}
                  </div>
                </div>
              </div>

      <div className="flex bg-white rounded-lg">
      <div className="bg-white py-6 px-12 rounded-lg w-full h-[80%]">
      <RegistrationForm />
      </div>
    </div>
            </div>
          </div>
        </section>
    </div>
    </section>

      </main>
      <Footer />
    </>
  );
};

export default Registration;
