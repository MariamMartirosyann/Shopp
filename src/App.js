import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Shop from './components/shop';
import FAQ from './components/faq';
import ContactUs from './components/contactUs'
import  Grid  from '@mui/material/Grid';






const App=()=> {
  return (
   <Grid  style={{marginX:"auto"}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="faq" element={<FAQ />} />
      <Route  path="contactUs" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
  </Grid>
 
  )
}

export default App

