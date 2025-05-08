import React from 'react'
import {motion} from "framer-motion";

const Registration: React.FC = () => {
  return (
    <div className='h-[70%] max-w-[93%] mx-auto'>
    <section className="w-full p-4 bg-gray-800 relative flex items-center flex-col md:flex-row">
    <div className='lg:w-[80%]'>
    <motion.img
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} 
        className="md:w-2/3" src="https://images.unsplash.com/photo-1556742504-16b083241fab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="port image" 
        />
    </div>
    <motion.div
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
      className="md:absolute md:left-[35%] lg:w-[65%] lg:p-6 sm:p-6 md:p-4 flex flex-col justify-center bg-gray-800 font-newtimesRoman">
      <motion.h2
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="text-white md:text-3xl text-2xl font-bold mb-4">Unleash Your Talent!
        </motion.h2>
      <motion.p
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="text-gray-400 text-md mb-6">
      Join the ultimate talent competition and showcase your skills to the world! Whether 
      you sing, dance, act, or create, this is your chance to shine. Compete, get discovered, 
      and win amazing prizes. Don’t wait—register now and take the first step toward your dream!
      </motion.p>
      <div>
        <a
        href="/registration"
        className="bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 text-black  py-2 px-3 lg:py-2 lg:px-5 rounded-sm text-lg  transition-all duration-500 ease-in-out">
          Register Now
          </a>
      </div>
    </motion.div>
  </section>
  </div>
  )
}

export default Registration
