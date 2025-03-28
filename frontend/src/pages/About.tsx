import React from 'react'
import Footer from '../components/Home-Sections/Footer';

const About: React.FC = () => {

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
          <div className="flex flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              LevelUp
            </a>
            <a href="/" className="flex items-center">
          <img src="/assets/logo.jpg" className="h-10"/>
        </a>
          </div>
        <nav className="flex space-x-6">
            <a href="/" className="hover:text-green-600">
              Home
            </a>
            <a href="/about" className="hover:text-green-600">
              About Us
            </a>
            <a href="/registration" className="hover:text-green-600">
            Registration
            </a>
            <a href="/newsAndGallery" className="hover:text-green-600">
            News and Gallery
            </a>
            <a href="/contact" className="hover:text-green-600">
              Contact Us
            </a>
          </nav>
      </div>
    </header>
    <main className="mt-16">
    <div
          className="relative bg-cover bg-center text-white py-36"
          style={{ backgroundImage: "url(/assets/img/page-title-bg.webp)" }}
        >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-[80%] text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className='mt-2 max-w-[70%]'>At Level Up Talent Detection, we are dedicated to discovering and empowering exceptional talent across industries. As a forward-thinking organization, we focus on bridging the gap between untapped potential and real-world opportunities. Our mission is to identify, nurture, and elevate individuals with remarkable skills, helping them realize their full potential and reach new heights in their careers.</p>
            <p className="text-sm mt-3">Home / About</p>
          </div>
        </div>
    </main>
    <section className="about-3 section py-6 max-w-[80%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center space-y-4 lg:space-y-0">
          {/* Left Column: Image and Video Link */}
          <div className="lg:w-[40%] h-[40%] order-2 lg:order-2 relative" data-aos="zoom-out">
            <img
              src="assets/img/img_sq_1.jpg"
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
            <h2 className="content-title mb-4 text-3xl font-semibold">
            Why We Organize This Competition
            </h2>
            
            <p className="mb-4 text-gray-600">
            The Level Up Talent Detection competition is designed to uncover 
            extraordinary talent that might otherwise go unnoticed. We’re committed 
            to creating a platform where aspiring professionals, creatives, and innovators 
            can showcase their skills and gain the recognition they deserve. By launching this competition, 
            we aim to foster an environment of growth, learning, and opportunity.
            </p>
            <h2 className="content-title mb-2 text-lg font-semibold">
            Our Core Values
            </h2>
            
            <ul className="list-inside list-disc text-gray-600">
              <li>Empowerment</li>
              <li>Innovation</li>
              <li>Integrity</li>
            </ul>

            <p>
              <a
                href="#"
                className="btn-cta inline-block mt-4 bg-green-700 text-white py-2 px-6 rounded-sm"
              >
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="about-3 section py-6 max-w-[80%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center space-y-4 lg:space-y-0">
          {/* Left Column: Image and Video Link */}
          <div className="lg:w-[40%] h-[30%] order-2 lg:order-1 relative" data-aos="zoom-out">
            <img
              src="assets/img/img_sq_1.jpg"
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
            <h2 className="content-title mb-4 text-3xl font-semibold">
            Our Story
            </h2>
            
            <p className="mb-4 text-gray-600">
            Founded with the vision to revolutionize how talent is discovered, 
            Level Up Talent Detection was created to address the growing need for platforms 
            that recognize and amplify talent beyond conventional boundaries. We believe that 
            everyone has the ability to shine, and through our comprehensive talent detection programs, 
            we are paving the way for individuals to showcase their skills and creativity on a larger scale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="about-3 section py-6 max-w-[80%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center space-y-4 lg:space-y-0">
          {/* Left Column: Image and Video Link */}
          <div className="lg:w-[40%] h-[40%] order-2 lg:order-2 relative" data-aos="zoom-out">
            <img
              src="assets/img/img_sq_1.jpg"
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
            <h2 className="content-title mb-4 text-3xl font-semibold">
            Our Mission
            </h2>
            
            <p className="mb-4 text-gray-600">
            Our mission is simple: To provide equal opportunities for individuals to showcase 
            their unique abilities, helping them stand out in competitive industries. 
            We’re passionate about identifying raw talent, empowering the next generation 
            of leaders, innovators, and creators. Through our competitions, we aim to inspire 
            individuals to push boundaries, think creatively, and develop their craft in a supportive
             and dynamic environment.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-8 mb-16 max-w-[80%] mx-auto">

      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-green-600">Team</h2>
        <p className="text-gray-600">Necessitatibus eius consequatur</p>
      </div>
      {/* End Section Title */}

      <div className="content">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 mb-4 px-4">
                <div className="person">
                  <figure>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid"
                    />
                    <div className="social flex justify-center mt-2">
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
                  </figure>
                  <div className="person-contents text-center mt-4">
                    <h3>{member.name}</h3>
                    <span className="position text-gray-500">{member.position}</span>
                  </div>
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
