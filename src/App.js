import React from 'react'
import { Routes ,Route, Link } from 'react-router-dom'
import Contact from './routes/Contact';
import Services from './routes/Services';
import Home from './routes/Home';
import Prix from './routes/Prix';
import './index.css'

function App() {
  return (
  <>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="Services" element={<Services/>} />
       <Route path="Prix" element={<Prix/>} />
       <Route path="Contact" element={<Contact/>} />
    </Routes>
  </>
  );
}

export default App;
