import React from 'react'
import Hero from '../components/Home-Sections/Hero'
import MissionAndObjective from '../components/Home-Sections/MissionAndObjective'
import Footer from '../components/Home-Sections/Footer'
import Registration from '../components/Home-Sections/Registration'
import Partners from '../components/Home-Sections/Partners'
import ContactFormHome from '../components/Home-Sections/ContactForm'
import {motion} from "framer-motion";

const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <section className="text-gray-700 font-newtimesRoman h-[80vh] md:h-[50vh] lg:h-[80vh] flex justify-center w-full p-4 md:p-8 lg:p-12">
      <div 
        className="relative text-gray-700 font-newtimesRoman pb-6 flex items-center bg-fixed bg-cover bg-center w-full"
        style={{ backgroundImage: "url('/assets/Header-Image/img-4.jpg')" }}
      >
        {/* Black overlay with 50% opacity */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="relative z-2 container px-6 mx-auto max-w-[90%] text-center py-10 text-lg text-white font-newtimesRoman bg-gray-800"
        >
          The Level Up Talent Detection competition is designed to uncover extraordinary talent that might otherwise go unnoticed. 
          We’re committed to creating a platform where aspiring professionals, creatives, and innovators can showcase their skills 
          and gain the recognition they deserve. By launching this competition, we aim to foster an environment of growth, learning, 
          and opportunity.
        </motion.div>
      </div>
    </section>
    <Registration />
    <Partners />
    <MissionAndObjective />
    <ContactFormHome />
    <Footer />
    </>
  )
}

export default Home
