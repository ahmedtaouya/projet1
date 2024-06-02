import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PrixCard from '../components/Prix'

const Prix= () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage heading='Pour plus de formation.' text='Control your wheight '></HeroImage>
      <PrixCard></PrixCard>
      <Footer></Footer>
     

    </div>
  )
}

export default Prix
