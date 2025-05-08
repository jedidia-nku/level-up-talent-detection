import React from "react";
import {motion} from "framer-motion";
import ContactForm from "../ContactForm";
import { MdOutlineEmail } from "react-icons/md";

const ContactFormHome: React.FC = () => {
  return (
    <section className="mb-8">
      <div>
    <div
     className="relative h-[300px] overflow-hidden bg-gray-800 bg-cover bg-[50%] bg-no-repeat"></div>
     </div>
    <div className="container px-6 lg:px-12 font-newtimesRoman mx-auto">
    <motion.div
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }}
        className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] pb-8 lg:pb-16 lg:px-12 -mt-[220px] backdrop-blur-[30px] border border-gray-300">
        <div className="w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 transition-all py-6">Contact Us</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="mb-12 w-full md:w-[60%] shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-6/12 lg:px-6">
            <ContactForm />
            </div>
            <div className="w-full md:w-[40%]">
            <div className="w-full flex flex-col">
                <motion.div
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
                }} className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-full lg:px-6 xl:mb-6 w-full">
                <div className="flex items-start">
                    <div className="srink-0">
                    <div className="inline-block rounded-md bg-yellow-200 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                    </div>
                    </div>
                    <div className="ml-6 grow">
                    <p className="text-lg mb-1 font-bold">
                        Address
                    </p>
                    <p className="text-md text-neutral-500">
                        Rwanda, Kigali
                    </p>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.6,
                }}
                className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-full lg:px-6 xl:mb-6 w-full">
                <div className="align-start flex">
                    <div className="shrink-0">
                    <div className="inline-block rounded-md bg-yellow-200 p-4 text-primary">
                        <MdOutlineEmail className="text-3xl"/>

                    </div>
                    </div>
                    <div className="ml-6 grow">
                    <p className="text-lg mb-1 font-bold ">Email</p>
                    <p className="text-md text-neutral-500"> example@gmail.com
                    </p>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
                }} className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-full lg:px-6 xl:mb-6 w-full">
                <div className="align-start flex">
                    <div className="shrink-0">
                    <div className="inline-block rounded-md bg-yellow-200 p-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    </div>
                    <div className="ml-6 mb-10 md:mb-1 grow">
                    <p className="text-lg mb-1 font-bold ">Mobile</p>
                    <p className="text-md text-neutral-500"> +250 780 000 000
                    </p>
                    </div>
                </div>
                </motion.div>
            </div>
            </div>
        </div>
        </motion.div>
    </div>
    </section>
  );
};

export default ContactFormHome; 
