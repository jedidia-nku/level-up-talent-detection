import React from 'react'
import Header from './Header'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {motion} from "framer-motion";
import { TfiPencilAlt } from "react-icons/tfi";
import Typewriter from "typewriter-effect"

const Hero: React.FC = () => {


  return (
    <div className="relative w-full h-screen lg:h-[500px]">
      {/* Fixed Header */}

      {/* Hero Content (Fixed on top of swiper) */}
      <div className="absolute inset-0 z-10 font-newtimesRoman">
      <Header />
      <div  className="flex flex-col justify-center items-center text-center h-screen lg:h-[450px]">
        <motion.h1
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.5,
        }}
         className="text-5xl text-gray-300 font-bold leading-tight mb-4">
         <Typewriter options={{
           strings: [' Your sound matters', 'Your story counts', 'Your journey starts now'],
           autoStart: true,
           loop: true,
           cursor: '',
         }} />
        </motion.h1>
        <motion.div
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}>
        <p
         className="text-3xl text-gray-300 mb-8">
          Where Talent Meets Opportunities.
        </p>
        <a
          href="/registration"
          className="w-52 mx-auto flex gap-2 justify-center items-center bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 text-black py-2 px-3 lg:py-2 lg:px-5 rounded-sm text-lg transition-all duration-500 ease-in-out"
        >
          <p className='font-medium'>Click To Register</p> <TfiPencilAlt className='text-xl'/>
        </a>
        </motion.div>
        </div>
      </div>

      {/* Swiper Background */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="absolute inset-0 w-full h-full"
      >
        {/* Background Images */}
        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549761505-ce78ee8354d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://cdn.britannica.com/68/92668-050-1BED9B3B/Burundians-dance-Bujumbura.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1499442711659-a9566695faed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
