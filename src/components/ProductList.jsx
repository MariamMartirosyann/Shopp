import React from 'react';
import Grid from '@mui/material/Grid';
import CameraCard from "./cameraCard";


const ProductList = ({products})=> {
  return (
     <Grid container className="camerass">
        {
           products? products.map(i => <Grid  xs={4}><CameraCard key={i.name} src={i.src} price={i.price} name={i.name} /></Grid>) : null
        }
  </Grid>    
  );
}



export default ProductList

