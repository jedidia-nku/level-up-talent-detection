import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const BackgroundSwiper = () => {
  return (
    <div className='h-[70%]'>
      <div className="w-full relative h-screen lg:h-[550px]">
        {/* Swiper for background images */}
        <Swiper
          spaceBetween={0} // Adjust the space between slides
          slidesPerView={1} // Show one slide at a time
          loop={true} // Loop through the slides
          autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
        >
          {/* Each SwiperSlide represents one background image */}
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1515103976802-f3060d79b848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHxxfHNlYXJjaHwxfHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </SwiperSlide>
          {/* Add more slides here with different background images */}
        </Swiper>

        {/* Content on top of the background */}
        <div className="relative z-10 flex flex-col justify-center items-center h-[80%] text-center font-newtimesRoman">
          <h1 className="text-5xl text-gray-300 font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
          <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
          <a href="#" className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-6 rounded-full text-lg transition-all hover:bg-yellow-300 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSwiper;
