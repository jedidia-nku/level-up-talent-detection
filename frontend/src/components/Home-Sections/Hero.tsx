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
    <div className="relative w-full h-screen lg:h-[550px]">
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
           strings: ['Welcome Level-up Talent Detection', 'If You want to develop your Talent', 'You are in the right Place'],
           autoStart: true,
           loop: true,
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
         className="text-lg text-gray-300 mb-8">
          We make your talent shine like a star.
        </p>
        <a
          href="/registration"
          className="w-52 flex gap-2 justify-center items-center bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 text-black py-2 px-3 lg:py-2 lg:px-5 rounded-sm text-lg transition-all"
        >
          <p>Click To Register</p> <TfiPencilAlt />
        </a>
        </motion.div>
        </div>
      </div>

      {/* Swiper Background */}
      <Swiper
        spaceBetween={2}
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
          <div className="w-full h-full bg-[url('https://img.freepik.com/photos-gratuite/public-enthousiaste-regardant-feux-artifice-confettis-s-amusant-lors-festival-musique-nuit-espace-copie_637285-559.jpg?t=st=1743271567~exp=1743275167~hmac=914eeaf7cb0252a77f31257e001f4f42b3a94271f3e13ff501e0eee32e65f8e3&w=996')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://media.istockphoto.com/id/811137890/photo/band-performance.jpg?s=1024x1024&w=is&k=20&c=ohbtg_jsi-_63aKaFwAJWn4ylLRbfUsghfWXrsCVcqc=')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://cdn.britannica.com/68/92668-050-1BED9B3B/Burundians-dance-Bujumbura.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-[url('https://media.istockphoto.com/id/520690051/photo/hands-of-the-man-playing-the-cello.jpg?s=1024x1024&w=is&k=20&c=NTPNlv5qqueP3Etax1a1KPEg6r86db_kBWEqmsIfYDc=')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
