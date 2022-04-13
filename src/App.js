import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid  from '@mui/material/Grid';
import '../src/App.css';
import Home from "./components/Pages/HomePage/Home";
import Shop from './components/Pages/ShopPage/Shop';
import FAQ from './components/Pages/FAQPage/FAQ';
import ProductDetail from './components/Pages/Productdetail'
import ContactUs from './components/Pages/ContactUSPage/ContactUs'





const App=()=> {
  return (
   <Grid  style={{marginX:"auto"}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="faq" element={<FAQ/>}/>
      <Route path="products/:id" element={< ProductDetail/>} />
      <Route path="contactUs" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
  </Grid>
 
  )
}

export default App

