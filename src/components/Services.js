import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'
import NUTRITON from '../assets/Picture3.jpg'
import NUTRITON2 from '../assets/picture4.jpg'
const Services = () => {
  return (
    <Box className='training flex flex-col md:flex-row bg-black text-white p-10'>
    <Box className='left flex-1 p-6'>
      <Typography variant="h4" component="h1" className='mb-4 font-bold'>
        Services
      </Typography>
      <Typography variant="body1" className='mb-6'>
        Cet homme est probablement très déterminé et discipliné en ce qui concerne son entraînement physique. Il consacre beaucoup de temps et d'énergie à travailler sur son corps et sur la transformation de ses muscles. Il peut suivre un programme d'entraînement intense, se concentrant sur des exercices de musculation pour augmenter sa masse musculaire et sculpter son physique.
        <br /><br />
        Il peut également être très attentif à son alimentation, en veillant à consommer suffisamment de protéines et de nutriments pour favoriser la croissance musculaire et éviter les graisses superflues. Il peut également utiliser des suppléments tels que des protéines en poudre ou des compléments alimentaires pour aider à atteindre ses objectifs.
        <br /><br />
        Au fil du temps, cet homme peut transformer son corps en un véritable objet de force et de puissance, avec des muscles bien définis et volumineux. Il peut également développer une grande confiance en soi et une estime de soi positive, grâce à ses efforts pour atteindre ses objectifs et pour améliorer sa santé et son bien-être physique.
      </Typography>
      <Link to='/prix'>
        <Button variant="contained" className='p-5 bg-green-500 hover:bg-green-700 text-white font-bold  rounded'>
          suivant 
        </Button>
      </Link>
    </Box>
    <div className='right'>
        <div className='img-container'>
            <div className='image-stack top'>
                <img src={NUTRITON} className='img' alt=''/>
            </div>
            <div className='image-stack bottom'>
                <img src={NUTRITON2} className='img' alt=''/>
            </div>
        </div>
      </div>
    </Box>
  )
}

export default Services
