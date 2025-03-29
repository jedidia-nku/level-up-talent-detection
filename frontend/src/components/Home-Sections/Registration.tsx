import React from 'react'
import {motion} from "framer-motion";

const Registration: React.FC = () => {
  return (
    <div className='h-[70%] max-w-[90%] mx-auto'>
    <section className="w-full relative flex items-center flex-col lg:flex-row">
        <div>
    <motion.img
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} 
        className="lg:w-2/3" src="https://media.istockphoto.com/id/1472359066/photo/survey-form-check-marks-on-checklist-filling-online-form-and-answering-questions-concept.jpg?s=1024x1024&w=is&k=20&c=Sffn9LQq2qK4tQm0APuanrUb0alk7DZy_KNDlduruQg=" alt="port image" 
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
      className="lg:absolute lg:left-[30%] md:left-[30%] lg:w-[65%] lg:p-6 sm:p-6 p-4 flex flex-col justify-center bg-[#222222] font-newtimesRoman">
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
        <button 
        className="bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 text-black  py-2 px-3 lg:py-2 lg:px-5 rounded-sm text-lg transition-all">
          Register Now
          </button>
      </div>
    </motion.div>
  </section>
  </div>
  )
}

export default Registration
