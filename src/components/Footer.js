import React from 'react';
import { FaFacebook, FaSearchLocation, FaPhone, FaMailBulk, FaTwitter , FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-transparent text-white py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center'>
            <FaSearchLocation size={20} className='mr-4 text-white' />
            <div>
              <p>4 avenue Atlas</p>
              <p>RABAT, AGDLAL</p>
            </div>
          </div>
          <div className='flex items-center'>
            <FaPhone size={20} className='mr-4 text-white' />
            <p>0652954880</p>
          </div>
          <div className='flex items-center'>
            <FaMailBulk size={20} className='mr-4 text-white' />
            <p>ahmad.taouya@gmail.com</p>
          </div>
        </div>
        
        <div>
          <h2 className='text-xl font-bold mb-4'>À propos de nous</h2>
          <p>
            NUTRIFORME est une entreprise qui aide à manger équilibré et est la base de la santé et du bien-être 
            de chacun. Avoir de bonnes habitudes alimentaires est essentiel pour
            maintenir un poids santé, de bons niveaux d'énergie et une santé mentale équilibrée.
          </p>
        </div>
        
        <div>
          <h2 className='text-xl font-bold mb-4'>Suivez-nous</h2>
          <div className='flex space-x-4 gap-6'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className='hover:text-blue-500' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className='hover:text-blue-400' />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} className='hover:text-blue-400' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className='hover:text-blue-400' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
