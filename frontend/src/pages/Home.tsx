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
    <section className="text-gray-700 font-newtimesRoman flex justify-center w-full">

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
          className="px-6 mx-auto max-w-[85%] text-center py-3 text-lg text-white font-newtimesRoman bg-gray-800"
        >
          The Level Up Talent Detection competition is designed to uncover extraordinary talent that might otherwise go unnoticed. 
          We’re committed to creating a platform where aspiring professionals, creatives, and innovators can showcase their skills 
          and gain the recognition they deserve. By launching this competition, we aim to foster an environment of growth, learning, 
          and opportunity.
        </motion.div>
      {/* </div> */}
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
