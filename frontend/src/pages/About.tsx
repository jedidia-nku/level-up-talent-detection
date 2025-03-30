import React, { useState } from 'react'
import Footer from '../components/Home-Sections/Footer';
import {motion} from "framer-motion";
import { IoCloseSharp } from 'react-icons/io5';

const About: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const teamMembers = [
        {
          name: "Joshua Stefan",
          position: "Founder & CEO",
          image: "assets/img/team/team-1.jpg",
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Sheena Anderson",
          position: "Marketing",
          image: "assets/img/team/team-2.jpg",
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Evan Smith",
          position: "Content",
          image: "assets/img/team/team-3.jpg",
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
        {
          name: "Kaylie Jones",
          position: "Accountant",
          image: "assets/img/team/team-4.jpg",
          social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
          },
        },
      ];

  return (
    <>
    <header className="top-0 bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
          {/* Logo Section */}
              <motion.div
              initial={{ opacity:0, y: -100 }}
              animate={{ opacity:1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }} className="flex flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-yellow-400">
              LEVEL
            </a>
            <a href="/" className="flex items-center">
          <img src="/assets/logo.png" className="h-10"/>
          <a href="/" className="text-2xl font-bold text-yellow-400">
          UP
          </a>
        </a>
          </motion.div>
            <motion.nav
            initial={{ opacity:0, y: -100 }}
            animate={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }} className="hidden md:flex md:space-x-6">
            <a href="/" className="hover:text-yellow-200">
              Home
            </a>
            <a href="/about" className="text-yellow-400 hover:text-yellow-200 transition-all">
              About Us
            </a>
            <a href="/registration" className="hover:text-yellow-200 transition-all">
            Registration
            </a>
            <a href="/newsAndGallery" className="hover:text-yellow-200 transition-all">
            News and Gallery
            </a>
            <a href="/contact" className="hover:text-yellow-200 transition-all">
              Contact Us
            </a>
          </motion.nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? 
              (<IoCloseSharp className="h-6 w-6"/>) :(<svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>)}
            </button>
          </div>
      </div>
              {/* Mobile Navigation Menu */}        
          {isMobileMenuOpen && (
          <div className="space-y-4 p-4">
          <a href="/" className="block text-lg hover:text-yellow-200 transition-all">
          Home
          </a>
          <a href="/about" className="block text-lg text-yellow-400 hover:text-yellow-200 transition-all">
          About Us
          </a>
          <a href="/registration" className="block text-lg hover:text-yellow-200 transition-all">
          Registration
          </a>
          <a href="/newsAndGallery" className="block text-lg hover:text-yellow-200 transition-all">
          News and Gallery
          </a>
          <a href="/contact" className="block text-lg hover:text-yellow-200 transition-all">
          Contact Us
          </a>
          <div className="px-16">
            <a
              href="/contact"
              className="block mt-10 mb-4 mx-auto text-center bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 text-black py-2 px-3 lg:px-4 rounded-sm text-lg transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
        )}
    </header>
    <main className="mt-16">
    <div
      className="relative bg-cover bg-center text-white py-36"
      style={{ backgroundImage: "url(https://media.istockphoto.com/id/1811488202/photo/a-businessman-having-presentation-with-colleagues-about-project-he-working-on-at-the-office.jpg?s=1024x1024&w=is&k=20&c=F6XMLSAVHJQW0maiE-Z01cB1dof32OVlKJLDGTzfQvY=)" }}
    >
    <div className="absolute inset-0 bg-black opacity-30"></div>
    <div className="relative z-10 flex flex-col justify-center items-center h-[80%] text-center">
    <motion.h1
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.5,
    }} className="text-4xl font-bold text-yellow-400">About Us
    </motion.h1>

    <motion.p
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className='mt-2 max-w-[70%]'>
      At Level Up Talent Detection, we are dedicated to discovering and empowering exceptional talent across industries.
    </motion.p>

    <motion.p
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.3,
    }} className="text-sm mt-3">
      Home / <span className="text-yellow-400">About</span>
    </motion.p>
      </div>
    </div>
    </main>
    <section className="about-3 section py-6 max-w-[80%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center space-y-4 lg:space-y-0">
          {/* Left Column: Image and Video Link */}
          <div className="lg:w-[45%] h-[50%] order-2 lg:order-2 relative pt-6" data-aos="zoom-out">
          <motion.img
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
              src="https://media.istockphoto.com/id/1262889205/photo/confident-caucasian-male-applicant-answering-on-questions-during-job-interview.jpg?s=1024x1024&w=is&k=20&c=gcjSJQA5djzpJOWzBTIs739ZJASgNDWrEebvLNhmi2E="
              alt="Image"
              className="img-fluid w-full"
            />
          </div>

          {/* Right Column: Content */}
          <div
            className="lg:w-1/2 order-1 lg:order-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
        <motion.h2
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="content-title mb-4 text-3xl font-semibold text-yellow-500">
            Why We Organize This Competition
            </motion.h2>
            
        <motion.p
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="mb-4 text-gray-600">
            The Level Up Talent Detection competition is designed to uncover 
            extraordinary talent that might otherwise go unnoticed. We’re committed 
            to creating a platform where aspiring professionals, creatives, and innovators 
            can showcase their skills and gain the recognition they deserve. By launching this competition, 
            we aim to foster an environment of growth, learning, and opportunity.
            </motion.p>

        <motion.h2
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="content-title mb-2 text-lg font-semibold">
        Our Core Values
        </motion.h2>
            
        <motion.ul
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="list-inside list-disc text-gray-600">
          <li>Empowerment</li>
          <li>Innovation</li>
          <li>Integrity</li>
        </motion.ul>

        <motion.p
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}>
        <a
          href="#"
          className="btn-cta inline-block mt-4 bg-yellow-500 text-white py-2 px-6 rounded-sm"
        >
          Get in touch
        </a>
      </motion.p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="about-3 section mt-3 py-6 max-w-[80%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center space-y-4 lg:space-y-0">
          {/* Left Column: Image and Video Link */}
          <div className="lg:w-[45%] h-[45%] order-2 lg:order-1 relative" data-aos="zoom-out">
          <motion.img
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
              src="https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=1024x1024&w=is&k=20&c=NPqjCnSKcneHXR85l-2ZV5SAe0a32eoTkIy5G0sZtgc="
              alt="Image"
              className="img-fluid w-full"
            />
          </div>

          {/* Right Column: Content */}
          <div
            className="lg:w-1/2 order-1 lg:order-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <motion.h2
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}className="content-title mb-4 text-3xl font-semibold text-yellow-500">
            Our Story
            </motion.h2>
            
            <motion.p
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }} className="mb-4 text-gray-600">
            Founded with the vision to revolutionize how talent is discovered, 
            Level Up Talent Detection was created to address the growing need for platforms 
            that recognize and amplify talent beyond conventional boundaries. We believe that 
            everyone has the ability to shine, and through our comprehensive talent detection programs, 
            we are paving the way for individuals to showcase their skills and creativity on a larger scale.
            </motion.p>
          </div>
        </div>
      </div>
    </section>

    <section className="about-3 section py-6 max-w-[80%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center space-y-4 lg:space-y-0">
          {/* Left Column: Image and Video Link */}
          <div className="lg:w-[45%] h-[45%] order-2 lg:order-2 relative" data-aos="zoom-out">
          <motion.img
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
              src="https://as1.ftcdn.net/jpg/05/39/65/40/1000_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2G.jpg"
              alt="Image"
              className="img-fluid w-full"
            />
          </div>

          {/* Right Column: Content */}
          <div
            className="lg:w-1/2 order-1 lg:order-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <motion.h2
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }} className="content-title mb-4 text-3xl font-semibold text-yellow-500">
            Our Mission
            </motion.h2>
            
            <motion.p
            initial={{ opacity:0, y: -100 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }} className="mb-4 text-gray-600">
            Our mission is simple: To provide equal opportunities for individuals to showcase 
            their unique abilities, helping them stand out in competitive industries. 
            We’re passionate about identifying raw talent, empowering the next generation 
            of leaders, innovators, and creators. Through our competitions, we aim to inspire 
            individuals to push boundaries, think creatively, and develop their craft in a supportive
             and dynamic environment.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-8 mb-16 max-w-[80%] mx-auto">

      <div className="container mx-auto text-center mb-12">
      <motion.h2
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }} className="text-3xl font-bold text-yellow-500">Team
      </motion.h2>

      <motion.p
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      }} className="text-gray-600">Necessitatibus eius consequatur
      </motion.p>

      </div>
      {/* End Section Title */}

      <div className="content">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 mb-4 px-4">
                <div className="person">
                  <div className='relative'>
                  <motion.img
                  initial={{ opacity:0, y: -100 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  src={member.image}
                  alt={member.name}
                  className="img-fluid"
                  />
                    <div className="absolute social flex justify-center mt-2">
                      <a href={member.social.facebook} className="mx-2">
                        <span className="bi bi-facebook text-xl text-blue-600"></span>
                      </a>
                      <a href={member.social.twitter} className="mx-2">
                        <span className="bi bi-twitter-x text-xl text-blue-400"></span>
                      </a>
                      <a href={member.social.linkedin} className="mx-2">
                        <span className="bi bi-linkedin text-xl text-blue-700"></span>
                      </a>
                    </div>
                  </div>
                  <motion.div
                  initial={{ opacity:0, y: -100 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }} className="person-contents text-center mt-4">
                  <h3>{member.name}</h3>
                  <span className="position text-gray-500">{member.position}</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default About
