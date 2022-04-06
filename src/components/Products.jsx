import React,{useState,useMemo} from 'react';
import SimpleAccordion from './filter';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid'
import ProductList from'./ProductList'
import Typography from '@mui/material/Typography';
import Select from './MultipleSelectPlaceholder';
import products, {selectProducts} from '../redux/slices/products'

import { useSelector } from "react-redux";
const sortByACS = function (a, b, prop) {
  if(!a[prop] || !b[prop]){
    return 0;
  }

  if (a[prop] > b[prop]) {
      return 1;
  }
  if (b[prop] > a[prop]) {
      return -1;
  }
  return 0;
}

const sortByDECS = function (a, b, prop) {
  if (a[prop] > b[prop]) {
      return -1;
  }
  if (b[prop] > a[prop]) {
      return 1;
  }
  return 0;
}



const Products = ()=> {
  const [sortType,setSortType] = useState();
  const products = useSelector(selectProducts)

  const handleChange = (e) =>{ 
    setSortType(e.target.value)
  }
  console.log(sortType);

  

  const sortedProducts = useMemo(() => {
    if(!products || !products.length){
      return [];
    }

    let sorted = [...products];
    if(sortType === 2){
      //sort by name
      sorted.sort((a,b) => sortByACS(a,b,"name"))
    }else if(sortType === 3){
      //sort by name
      sorted.sort((a,b) => sortByDECS(a,b,"name"))
    }else if(sortType === 4){
      //sort by price
      sorted.sort((a,b) => sortByACS(a,b,"price"))
    }else if(sortType === 5){
      //sort by price
      sorted.sort((a,b) => sortByDECS(a,b,"price"))
    }else if(sortType === 6){
      //sort by Newest
      sorted.sort((a,b) => sortByACS(a,b,"creationDate"))
    }

    return sorted
  },[products,sortType])



  return (
    
    <><Typography component={"p"} variant={'h6'}style={{textAlign:"center", margin:"30px"}} >Cameras & Accessories</Typography>
    <Grid container >
      
      <Grid item xs={4}>
      <Box >
        <SimpleAccordion  />
      </Box>
      </Grid>
      <Grid item xs={8}>
        <Box display="flex" justifyContent="flex-end">
          <Select
          value={sortType}
          onChange={handleChange}
          />
        </Box>
      <ProductList products={sortedProducts}/>
    </Grid>
    </Grid>
    </>
  );
}

export default Products

