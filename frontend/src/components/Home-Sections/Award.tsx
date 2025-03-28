import React from 'react'
import {motion} from "framer-motion";

const Award: React.FC = () => {
  return (
    <section className="text-gray-700 font-newtimesRoman">
  <motion.div
          initial={{ opacity:0, y: -100 }}
          whileInView={{ opacity:1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
  className="flex justify-center mt-10 text-4xl">
  Awards for Winners
  </motion.div>
  <div className="container px-5 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <motion.div
                  initial={{ opacity:0, y: -100 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }} className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Grand Champion Award</h2>
        </div>
      </motion.div>

      <motion.div
                  initial={{ opacity:0, y: -100 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }} className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Most Creative Performer</h2>
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }} className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Crowd Favorite Award</h2>
        </div>
      </motion.div>

      <motion.div
                  initial={{ opacity:0, y: -100 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }} className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Rising Star Award</h2>
        </div>
      </motion.div>

    </div>
  </div>
</section>
  )
}

export default Award
