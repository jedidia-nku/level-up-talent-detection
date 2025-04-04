import React from 'react'
import Hero from '../components/Home-Sections/Hero'
import MissionAndObjective from '../components/Home-Sections/MissionAndObjective'
import Award from '../components/Home-Sections/Award'
import Footer from '../components/Home-Sections/Footer'
import Registration from '../components/Home-Sections/Registration'
import Partners from '../components/Home-Sections/Partners'
import ContactFormHome from '../components/Home-Sections/ContactForm'

const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <MissionAndObjective />
    <Registration />
    <Award />
    <Partners />
    <ContactFormHome />
    <Footer />
    </>
  )
}

export default Home
