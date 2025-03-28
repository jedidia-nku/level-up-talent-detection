import React from 'react'
import Header from './Header'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {motion} from "framer-motion";

const Hero: React.FC = () => {


  return (
    <div className="relative w-full h-screen lg:h-[550px]">
      {/* Fixed Header */}

      {/* Hero Content (Fixed on top of swiper) */}
      <div className="absolute inset-0 z-10 font-newtimesRoman">
      <Header />
      <motion.div
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.2,
        }}  className="flex flex-col justify-center items-center text-center h-[80%] lg:h-[450px]">
        <h1
         className="text-5xl text-gray-300 font-bold leading-tight mb-4">
          Welcome to Our Awesome Website
        </h1>
        <p
         className="text-lg text-gray-300 mb-8">
          Discover amazing features and services that await you.
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
        </motion.div>
      </div>

      {/* Swiper Background */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
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
          <div className="w-full h-full bg-[url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
