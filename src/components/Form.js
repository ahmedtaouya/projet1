import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Form = () => {
  return (
    <Box className="form py-10 bg-black text-white">
      <Box className="container mx-auto px-4 md:px-0 md:w-1/2">
        <Typography variant="h4" component="h2" className="mb-6 text-center font-bold">
          Contactez-nous
        </Typography>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-lg">Votre nom</label>
            <TextField
              id="name"
              type="text"
              variant="outlined"
              fullWidth
              InputProps={{ className: "bg-white text-black" }}
              InputLabelProps={{ className: "text-gray-500" }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-lg">Email</label>
            <TextField
              id="email"
              type="email"
              variant="outlined"
              fullWidth
              InputProps={{ className: "bg-white text-black" }}
              InputLabelProps={{ className: "text-gray-500" }}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-lg">Numéro de téléphone</label>
            <TextField
              id="phone"
              type="tel"
              variant="outlined"
              fullWidth
              InputProps={{ className: "bg-white text-black" }}
              InputLabelProps={{ className: "text-gray-500" }}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 text-lg">Sujet</label>
            <TextField
              id="subject"
              type="text"
              variant="outlined"
              fullWidth
              placeholder="Comment nous avez-vous connu ?"
              InputProps={{ className: "bg-white text-black" }}
              InputLabelProps={{ className: "text-gray-500" }}
            />
          </div>
          <Button type="submit" variant="contained" className="p-5 bg-green-500 hover:bg-green-700 text-white font-bold  rounded ">
            Envoyer
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
