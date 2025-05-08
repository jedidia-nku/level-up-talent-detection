import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {motion} from "framer-motion";   
import { IoCloseSharp } from "react-icons/io5";
import Footer from "../components/Home-Sections/Footer";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  content?: string;
}

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [isStacked, setIsStacked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`https://level-up-talent-detection.onrender.com/api/news/${id}`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    const checkHeights = () => {
      if (imageRef.current && textRef.current) {
        const imageHeight = imageRef.current.clientHeight;
        const textHeight = textRef.current.clientHeight;
        setIsStacked(textHeight > imageHeight);
      }
    };

    const timeout = setTimeout(checkHeights, 100);
    window.addEventListener("resize", checkHeights);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", checkHeights);
    };
  }, [news]);

  if (!news) {
    return <div className="p-5">Loading...</div>;
  }

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
    <div className="px-5 mt-20">
      <div className={`flex gap-4 ${isStacked ? "flex-col" : "flex-row"}`}>
        <div className={`${isStacked ? "w-full" : "w-1/2"}`}>
          <img
            ref={imageRef}
            src={`${news.imageUrl}`}
            alt={news.title}
            className="w-full h-auto mb-4"
          />
        </div>
        <div
          ref={textRef}
          className={`${isStacked ? "w-full" : "w-1/2"}`}
        >
          <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
          <p className="text-gray-700 whitespace-pre-line">{news.content || news.description}</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default NewsDetail;
