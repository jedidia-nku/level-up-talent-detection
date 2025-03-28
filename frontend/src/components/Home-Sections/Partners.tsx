import React from "react";
import Marquee from "react-fast-marquee";
import {motion} from "framer-motion";

const Partners: React.FC = () => {
	return (
		<section className="bg-background py-8">
	<motion.h2
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }} className="text-2xl text-center font-bold font-newtimesRoman">
		Our Partners
	  </motion.h2>
	  <motion.div
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }}>
				<Marquee pauseOnHover>
					<div className="lg:w-full p-12  md:w-40">
						<img
							src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-2.png"
							alt="Water Reservoir"
							className="lg:h-[10vh] md:h-auto h-28 w-full rounded-lg object-cover"
						/>
					</div>

					<div className="lg:w-full  md:w-32">
						<img
							src="https://www.shutterstock.com/image-vector/google-logo-editorial-vector-symbol-260nw-2317648589.jpg"
							alt="Water Reservoir"
							className="lg:h-[10vh] md:h-auto h-28 w-full rounded-lg object-cover"
						/>
					</div>

					<div className="lg:w-full p-12  md:w-32">
						<img
							src="https://www.shutterstock.com/image-vector/google-logo-editorial-vector-symbol-260nw-2317648589.jpg"
							alt="Water Reservoir"
							className="lg:h-[10vh] md:h-auto h-28 w-full rounded-lg object-cover"
						/>
					</div>

					<div className="lg:w-full p-12  md:w-32">
						<img
							src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-2.png"
							alt="Water Reservoir"
							className="lg:h-[10vh] md:h-auto h-28 w-full rounded-lg object-cover"
						/>
					</div>

					<div className="lg:w-full p-12  md:w-24">
						<img
							src="https://www.shutterstock.com/image-vector/google-logo-editorial-vector-symbol-260nw-2317648589.jpg"
							alt="Water Reservoir"
							className="lg:h-[10vh] md:h-auto h-28 w-full object-cover"
						/>
					</div>
					<div className="lg:w-full p-12  md:w-24">
						<img
							src="https://www.shutterstock.com/image-vector/google-logo-editorial-vector-symbol-260nw-2317648589.jpg"
							alt="Water Reservoir"
							className="lg:h-[10vh] md:h-auto h-28 w-full object-cover"
						/>
					</div>
				</Marquee>
			</motion.div>
		</section>
	);
};

export default Partners;