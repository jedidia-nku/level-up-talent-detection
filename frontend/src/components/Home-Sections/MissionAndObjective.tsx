import React from 'react'
import {motion} from "framer-motion";

const MissionAndObjective: React.FC = () => {
  return (
    <section 
        className="relative text-gray-700 font-newtimesRoman pb-2 flex items-center bg-fixed bg-cover bg-center w-full"
        style={{ backgroundImage: "url('/assets/Header-Image/image-3.jpg')" }}
      >
        {/* Black overlay with 50% opacity */}
        <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-2 max-w-[95%] mx-auto px-4 py-12 sm:px-6 lg:px-8 font-newtimesRoman">
            <motion.h2
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="md:text-3xl text-2xl font-bold text-white font-newtimesRoman text-center">
            Mission And Objectives
            </motion.h2>
            <div className="w-full flex justify-center py-2">
            <motion.div
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }} className="w-64 h-1 bg-yellow-400 rounded-2xl"></motion.div>
            </div>
            <div className="text-lg text-white text-center pt-8">We equip artists with tools, knowledge, and opportunities to grow.</div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12">
        
        <motion.div
        initial={{ opacity:0, y: 0 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
        }}
        className='flex col-span-12 lg:col-span-3 items-center'>
        <div className="flex gap-2">
        <div className="text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
        </div>
        <div>
            <h3 className="text-2xl font-medium text-white pl-12">Mission</h3>
            <p className="mt-2 text-base text-white">To identify raw musical talent from diverse communities, provide them with mentorship, resources, and exposure, and create a sustainable ecosystem that empowers artists to thrive creatively and professionally.</p>
        </div>
        </div>
        </motion.div>

        <div className="col-span-12 lg:col-span-6 md:grid-cols-2">
        <motion.div
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.5,
        }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex gap-2">
        <div className="text-yellow-400">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
        className="icon icon-tabler icons-tabler-outline icon-tabler-bulb w-8 h-8">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
          <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" />
          </svg>
        </div>
        <div>
            <h3 className="text-2xl font-medium text-white pl-2">Creativity</h3>
            <p className="mt-2 text-base text-white">We champion originality and celebrate artistic expression.</p>
        </div>
        </div>
        <div className="flex gap-2">
        <div className="text-yellow-400">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
        className="icon icon-tabler icons-tabler-outline icon-tabler-chart-cohort w-8 h-8">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 9h18v-6h-18v18h6v-18" /><path d="M3 15h12v-12" /></svg>
        </div>
        <div>
            <h3 className="text-2xl font-medium text-white pl-2">Inclusivity</h3>
            <p className="mt-2 text-base text-white">We believe talent knows no background, and everyone deserves a stage.</p>
        </div>
        </div>
        <div className="flex gap-2">
        <div className="text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" 
           className="w-8 h-8" />
        </svg>

        </div>
        <div>
            <h3 className="text-2xl font-medium text-white pl-2">Integrity</h3>
            <p className="mt-2 text-base text-white">We operate with fairness, transparency, and respect for every artist’s journey.</p>
        </div>
        </div>
        <div className="flex gap-2">
        <div className="text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        className="lucide lucide-biceps-flexed-icon lucide-biceps-flexed w-8 h-8"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/></svg>
        </div>
        <div>
            <h3 className="text-2xl font-medium text-white pl-2">Empowerment</h3>
            <p className="mt-2 text-base text-white">We equip artists with tools, knowledge, and opportunities to grow.</p>
        </div>
        </div>
        </motion.div>
        </div>
        <motion.div
        initial={{ opacity:0, y: 0 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
        }}
        
        className='flex col-span-12 lg:col-span-3 items-center'>
        <div className="flex gap-2">
        <div className="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-8 h-8 p-1 rounded-md border-2 border-yellow-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

        </div>
        <div>
            <h3 className="text-2xl font-medium text-white pl-12">Vision</h3>
            <p className="mt-2 text-base text-white">To become the leading talent detection platform in Rwanda for discovering, nurturing, and promoting hidden musical talent, transforming dreams into global success stories.</p>
        </div>
        </div>
        </motion.div>
        </div>
    </div>
</section>
  )
}

export default MissionAndObjective
