import React, { useEffect, useState } from 'react'
import Footer from '../components/Home-Sections/Footer'
import {motion} from "framer-motion";
import { IoCloseSharp } from 'react-icons/io5';
import axios from "axios";

interface NewsItem {
  _id?: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const NewsandGallery: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      const [images, setImages] = useState<{ filename: string; url: string }[]>([]);
      const [newsList, setNewsList] = useState<NewsItem[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        const fetchNews = async () => {
          try {
            setLoading(true); // start loading
            const res = await axios.get("https://level-up-talent-detection.onrender.com/api/news");
            setNewsList(res.data || []);
          } catch (error) {
            console.error("Error fetching news:", error);
            setError("Failed to fetch news. Please try again later.");
          } finally {
            setLoading(false);
          }
        };
    
        fetchNews();
    
      }, []);
    
      useEffect(() => {
        const fetchImages = async () => {
          try {
            const res = await axios.get("https://level-up-talent-detection.onrender.com/api/upload");
            setImages(res.data);
          } catch (err) {
            console.error("Failed to fetch images", err);
          }
        };
    
        fetchImages();
      }, []);

  return (
    <div>
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
                <a href="/newsAndGallery" className="text-yellow-400 hover:text-yellow-200 transition-all">
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
              <a href="/registration" className="block text-lg hover:text-yellow-200 transition-all">
              Registration
              </a>
              <a href="/newsAndGallery" className="block text-lg text-yellow-400 hover:text-yellow-200 transition-all">
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
          style={{ backgroundImage: "url(https://artgallery.yale.edu/sites/default/files/styles/hero_large/public/2023-01/ag-doc-2281-0036-pub.jpg?h=147a4df9&itok=ewaTyP0m)" }}
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
        }} className="text-4xl font-bold text-yellow-400">
            News And Gallery
        </motion.h1>
    
        <motion.p
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className='mt-2 max-w-[70%]'>
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
        }} className="text-sm mt-3">
          Home / <span className="text-yellow-400">News And Gallery</span>
        </motion.p>
          </div>
        </div>
    </main>
    
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="container mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity:0, y: -100 }}
              whileInView={{ opacity:1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }} className="text-3xl font-bold text-yellow-500">NEWS
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
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

    <motion.div
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="sm:col-span-5">
        <a href="#">
            <div
                className="bg-cover text-center overflow-hidden"
                style={{
                minHeight: "300px",
                backgroundImage: `url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1")`,
                }}
                title="Woman holding a mug"
            ></div>
            </a>
            <div>
      </div>
            <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                    <a href="#"
                        className="text-xs text-yellow-500 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                        Election
                    </a>
                    <a href="#"
                        className="block text-gray-900 font-bold text-2xl mb-2 hover:text-yellow-500 transition duration-500 ease-in-out">Revenge
                        of the Never Trumpers</a>
                    <p className="text-gray-700 text-base mt-2">Meet the Republican dissidents fighting to push Donald Trump
                        out of office—and reclaim their party</p>
                </div>
            </div>
        </motion.div>

        {!loading && !error && (
        <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
        {newsList.map((item) => ( 
                <motion.div
                key={item._id}
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
                }}>
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://level-up-talent-detection.onrender.com${item.imageUrl}')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-yellow-500 transition duration-500 ease-in-out">{item.title}</a>
            </motion.div>
            ))}
        </div>
        )}

    </div>
</div>
<div className="container mx-auto text-center mb-12">
    <motion.h2
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="text-3xl font-bold text-yellow-500">GALLERY
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
      
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
    {images.map((img) => (<div key={img.filename}>
    <motion.img
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }}className="h-auto max-w-full rounded-lg" src={img.url} alt={img.filename} />
      </div>))}
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default NewsandGallery
