import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'


const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage heading='Contact.' text='Contact Nutriformes'></HeroImage>
      <Form></Form>
    </div>
  )
}

export default Contact
