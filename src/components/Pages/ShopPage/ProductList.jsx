import React from 'react';
import Grid from '@mui/material/Grid';
import CameraCard from "./CameraCard";


const ProductList = ({products})=> {
  return (
     <Grid container className="camerass">
        {
           products ? products.map((product,index) => {
              const links = {
                 prevId: products[index - 1]?.id,
                 nextId: products[index + 1]?.id
              }
              return (
               <Grid  xs={4}><CameraCard key={product.name} links={links} {...product}  /></Grid>
              )
           }) : null
        }
  </Grid>    
  );
}



export default ProductList

