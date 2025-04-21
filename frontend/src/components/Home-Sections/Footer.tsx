import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoChevronForwardOutline} from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok} from "react-icons/fa";
import {motion} from "framer-motion";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-full dark:bg-gray-900 font-newtimesRoman">

    <footer className="w-full md:bottom-0 bg-gray-800 text-white">
        <div className="w-full mx-aut md:px-10 px-4 pb-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-items-start pt-12">
                <div className="mt-4">
                        <motion.h1
                          initial={{ opacity:0, y: -100 }}
                          whileInView={{ opacity:1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                          }} className="text-xl font-display mb-8 text-yellow-400">Get In Touch</motion.h1>

                    <ul className="text-lg text-gray-300 flex flex-col gap-3">
                            <motion.li
                            initial={{ opacity:0, y: -100 }}
                            whileInView={{ opacity:1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                            }} className="flex items-center gap-2"><FaLocationDot className="text-2xl"/><p>Nyarugenge, Kigali, Rwanda</p></motion.li>
                            <motion.li
                            initial={{ opacity:0, y: -100 }}
                            whileInView={{ opacity:1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                            }} className="flex items-center gap-2"><IoCall className="text-2xl" /><p>(+250) 788 4***30</p></motion.li>
                            <motion.li
                            initial={{ opacity:0, y: -100 }}
                            whileInView={{ opacity:1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                            }} className="flex items-center gap-2 md:text-lg text-base"><IoMdMail className="text-2xl" /><p>eric@gmail.com</p></motion.li>
                    </ul>
                    <div className="flex gap-2 items-center text-2xl text-white mt-6">
                        <motion.div
                              initial={{ opacity:0, y: -100 }}
                              whileInView={{ opacity:1, y: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.3,
                              }} className="flex items-center justify-center p-3 border rounded-full hover:border-yellow-400 cursor-pointer hover:text-yellow-400 transition-all">
                            <FaFacebook />
                        </motion.div>
                        <motion.div
                        initial={{ opacity:0, y: -100 }}
                        whileInView={{ opacity:1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.3,
                        }} className="flex items-center justify-center p-3 border rounded-full hover:border-yellow-400 cursor-pointer hover:text-yellow-400 transition-all">
                        <FaInstagram />
                        </motion.div>
                    <motion.div
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="flex items-center justify-center p-3 border rounded-full hover:border-yellow-400 cursor-pointer hover:text-yellow-400 transition-all">
                    <FaWhatsapp />
                        </motion.div>
                    <motion.div
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="flex items-center justify-center p-3 border rounded-full hover:border-yellow-400 cursor-pointer hover:text-yellow-400 transition-all">
                    <FaTiktok />
                        </motion.div>
                    </div>
                </div>
                <div className="mt-4">
                        <motion.h2
                          initial={{ opacity:0, y: -100 }}
                          whileInView={{ opacity:1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                          }} 
                          className="text-xl font-display mb-8 text-yellow-400">
                            Quick Links
                        </motion.h2>
                    <ul className="mt-4 text-lg text-gray-300">
                            <motion.li
                              initial={{ opacity:0, y: -100 }}
                              whileInView={{ opacity:1, y: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                              }} className="flex items-center mt-2 hover:text-yellow-400 transition-all"><b><IoChevronForwardOutline /></b><a href="/">Home</a></motion.li>
                    
                    <motion.li
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="flex items-center mt-2 hover:text-yellow-400 transition-all"><b><IoChevronForwardOutline /></b><a href="/about">About Us</a></motion.li>
                    
                    <motion.li
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="flex items-center mt-2 hover:text-yellow-400 transition-all"><b><IoChevronForwardOutline /></b><a href="/registration">Registration</a></motion.li>
            <motion.li
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                }} className="flex items-center mt-2 hover:text-yellow-400 transition-all"><b><IoChevronForwardOutline /></b><a href="/contact">Contact Us</a></motion.li>
                
                <motion.li
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                }} className="flex items-center mt-2 hover:text-yellow-400 transition-all"><b><IoChevronForwardOutline /></b><a href="/newsAndGallery">News And Gallery</a></motion.li>
                <motion.li
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                }} className="flex items-center mt-2 hover:text-yellow-400 transition-all"><b><IoChevronForwardOutline /></b><a href="#">Privacy Policy</a></motion.li>
                    <motion.li
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="flex items-center mt-2 hover:text-yellow-400 transition-all"><b><IoChevronForwardOutline /></b><a href="#">Terms & Conditions</a></motion.li>
                    </ul>
                </div>
                {/* <div className="mt-4">
                    <h2 className="text-xl font-display mb-8 text-yellow-400">Photo Gallery</h2>
                    <div className="w-full grid grid-cols-3 place-items-center justify-items-stretch gap-4 mt-6">
                    <motion.img
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3,
                    }} className="rounded-md outline outline-[4px] outline-yellow-400" src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhaSUyMHJlbGF0ZWR8ZW58MHwwfHx8MTczMTUwNzg2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Gallery Image" />
                    <motion.img
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="rounded-md outline outline-[4px] outline-yellow-400" src="https://images.unsplash.com/photo-1616161560417-66d4db5892ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhaSUyMHJlbGF0ZWR8ZW58MHwwfHx8MTczMTUwNzg2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Gallery Image" />
                    <motion.img
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.5,
                    }} className="rounded-md outline outline-[4px] outline-yellow-400" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MzE1NjY0MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Gallery Image" />
                    <motion.img
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3,
                    }} className="rounded-md outline outline-[4px] outline-yellow-400" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MzE1NjY0MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Gallery Image" />
                    <motion.img
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="rounded-md outline outline-[4px] outline-yellow-400" src="https://images.unsplash.com/photo-1710993011836-108ba89ebe51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxhaSUyMHJlbGF0ZWR8ZW58MHwwfHx8MTczMTUwNzg2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Gallery Image" />
                    <motion.img
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.5,
                    }} className="rounded-md outline outline-[4px] outline-yellow-400" src="https://images.unsplash.com/photo-1712002641088-9d76f9080889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxhaSUyMHJlbGF0ZWR8ZW58MHwwfHx8MTczMTUwNzg2NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Gallery Image" />
                    </div>
                </div> */}
                <div className="w-full mt-4 lg:pl-6">
                    <motion.h4
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="text-xl font-display mb-6 text-yellow-400">Newsletter</motion.h4>
                    <motion.p
                    initial={{ opacity:0, y: -100 }}
                    whileInView={{ opacity:1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }} className="text-lg text-gray-300 mb-7">Sign Up here to get out latest News</motion.p>
                        <motion.div
                          initial={{ opacity:0, y: -100 }}
                          whileInView={{ opacity:1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                          }}
                           className="w-full flex justify-center items-center bg-white rounded-lg p-1">
                        <input type="text" className="w-full h-full px-4 text-gray-800 lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"  placeholder="Your email"/>
                        <button type="submit" className="h-full py-2 px-3 transition-all duration-500 shadow-md rounded-md text-white font-semibold w-fit bg-yellow-500 hover:bg-yellow-400">SignUp</button>
                    </motion.div>
                </div>
            </div>

            <hr className="bg-gray mt-14" />

            <div className="w-full flex md:flex-row gap-2 flex-col items-center justify-between py-4">
            <motion.div
                          initial={{ opacity:0, y: -100 }}
                          whileInView={{ opacity:1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                          }}>
                    &copy; 2024 Level Up Taletnt Detection All Right Reserved
                </motion.div>
                <motion.div
                          initial={{ opacity:0, y: -100 }}
                          whileInView={{ opacity:1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                          }} className="flex items-center justify-center">
                    <a href="" className="md:px-4 px-2 border-r border-gray-500">Home</a>
                    <a href="" className="md:px-4 px-2 border-r border-gray-500">Cookies</a>
                    <a href="" className="md:px-4 px-2 border-r border-gray-500">Help</a>
                    <a href="" className="md:px-4 px-2 border-l border-gray-500">FAQs</a>
                </motion.div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer
