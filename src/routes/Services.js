import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import ServicesSection from '../components/Services'
const Services = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage  heading='Pour plus de formation.' text='Control your wheight ' s></HeroImage>
      <ServicesSection></ServicesSection>
      <Footer></Footer>
    </div>
  )
}

export default Services
