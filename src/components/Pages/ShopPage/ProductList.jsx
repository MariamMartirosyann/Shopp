import React from 'react';
import Grid from '@mui/material/Grid';
import CameraCard from "./CameraCard";


const ProductList = ({products})=> {
  return (
     <Grid container className="camerass">
        {
           products ? products.map((product,index) => {
              return (
               <Grid  xs={4}><CameraCard key={product.name} {...product}  /></Grid>
              )
           }) : null
        }
  </Grid>    
  );
}



export default ProductList

