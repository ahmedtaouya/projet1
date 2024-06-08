import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NUTRITON from '../assets/Picture3.jpg';
import NUTRITON2 from '../assets/picture4.jpg';
import books from '../assets/61QME7Ntt4L._AC_UF1000,1000_QL80_.jpg';
import books2 from '../assets/81QBQRhEGNL._SL1500_.jpg';
import books3 from '../assets/81UHwzEH+tL._AC_UF1000,1000_QL80_.jpg';
import books4 from '../assets/Rhitrition_Shop_The_Science_of-Nutrition_1.jpg';
import 'tailwindcss/tailwind.css';

const Services = () => {
  return (
    <Box className="training flex flex-col md:flex-row bg-black text-white p-10 min-h-screen">
      <Box className="left flex-1 p-6">
        <Typography variant="h4" component="h1" className="mb-4 font-bold">
          Services
        </Typography>
        <Typography variant="body1" className="mb-6">
          Cet homme est probablement très déterminé et discipliné en ce qui concerne son entraînement physique. Il consacre beaucoup de temps et d'énergie à travailler sur son corps et sur la transformation de ses muscles. Il peut suivre un programme d'entraînement intense, se concentrant sur des exercices de musculation pour augmenter sa masse musculaire et sculpter son physique.
          <br /><br />
          Il peut également être très attentif à son alimentation, en veillant à consommer suffisamment de protéines et de nutriments pour favoriser la croissance musculaire et éviter les graisses superflues. Il peut également utiliser des suppléments tels que des protéines en poudre ou des compléments alimentaires pour aider à atteindre ses objectifs.
          <br /><br />
          Au fil du temps, cet homme peut transformer son corps en un véritable objet de force et de puissance, avec des muscles bien définis et volumineux. Il peut également développer une grande confiance en soi et une estime de soi positive, grâce à ses efforts pour atteindre ses objectifs et pour améliorer sa santé et son bien-être physique.
        </Typography>

        <Link to="/prix">
          <Button variant="contained" className="p-5 bg-green-500 hover:bg-green-700 text-white font-bold rounded">
            Suivant
          </Button>
        </Link>
      </Box>
      <div className="flex flex-col h-screen justify-between">
  <Box className="right flex-1 flex items-center justify-center top-1">
    <div className="relative">
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <img src={NUTRITON} className="w-64 h-64 object-cover rounded-lg shadow-lg" alt="NUTRITON" />
      </div>
      <div className="relative">
        <img src={NUTRITON2} className="w-64 h-64 object-cover rounded-lg shadow-lg" alt="NUTRITON2" />
      </div>
    </div>
  </Box>

  <Box className="flex-1 flex items-center justify-center space-x-3">
    <img src={books} alt="Books 1" className="w-40 h-60 object-cover rounded-lg shadow-md" />
    <img src={books2} alt="Books 2" className="w-40 h-60 object-cover rounded-lg shadow-md" />
    <img src={books3} alt="Books 3" className="w-40 h-60 object-cover rounded-lg shadow-md" />
    <img src={books4} alt="Books 4" className="w-40 h-60 object-cover rounded-lg shadow-md" />
  </Box>
</div>

    </Box>
  );
};

export default Services;
