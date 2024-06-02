import React from 'react';
import { Link } from 'react-router-dom';
import NutritionVideo from '../assets/9058193-uhd_3840_2160_25fps.mp4';
import { Container } from '@mui/material';
import { Fade, Slide } from "react-awesome-reveal";
const Video = () => {
  return (
    <div>
      <div className='relative flex items-center justify-center h-screen'>
        <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover'>
          <source src={NutritionVideo} type='video/mp4' />
        </video>
        <Slide direction='left'>
          <div className='relative z-10 text-center text-white flex flex-col gap-10'>
            <h1 className='text-4xl md:text-6xl font-bold'>Bienvenue chez NUTRITIONFORME</h1>
            <Fade cascade>
            <p className='mt-4 text-lg md:text-2xl'>
             
              Nous sommes là pour vous aider à manger sainement et à vous sentir mieux.

              

              <br />



            </p>

            <p>

              <Link to='/Services' className='p-5 bg-green-500 hover:bg-green-700 text-white font-bold '>
                En savoir plus
              </Link>
            </p>
            </Fade>

          </div>
        </Slide>



      </div>
    </div>
  );
};

export default Video;
