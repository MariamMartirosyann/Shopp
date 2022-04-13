import React,{useState,useMemo} from 'react';
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import ProductList from'./ProductList'
import Typography from '@mui/material/Typography';
import Select from './MultipleSelectPlaceholder';
import products, {selectProducts} from '../../../redux/slices/products'
import Filter from './Filter';


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

const filterFunction = () => {

}



const Products = ()=> {
  const [sortType,setSortType] = useState();
  const [filters,setFilters] = useState({
    collectionId: "",
    brandId: [],
    price:""
  });
  const products = useSelector(selectProducts);


  const handleChange = (e) =>{ 
    setSortType(e.target.value)
  }


  const handleChangeFilters = (newFilterData) => {
    setFilters({
      ...filters,
      ...newFilterData
    })
  }

  console.log(filters);

  

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



  /*`````````````````````````````````````````Filter `````````````````````````````````````````````````````````````*/ 
  const filteredProducts = useMemo(()=>{
    if(!filters || filters.collectionId === "All"){
      return sortedProducts;
    }

    const notEmptyFilters = {};
    Object.keys(filters).forEach((key) => {
      if(filters[key]){
        notEmptyFilters[key] = filters[key];
      }
    })

    let filtered = [];

    const keys = Object.keys(notEmptyFilters);
    keys.forEach(key => {
      [...sortedProducts].forEach(item => {
        if(typeof(notEmptyFilters[key]) !== 'object' && typeof(item[key]) !== 'object' && item[key]) {
          if(item[key] === notEmptyFilters[key]) {
            return !filtered.find(filteredItem => filteredItem.id === item.id) && filtered.push(item);
          }
        }

        if(typeof(notEmptyFilters[key]) === 'object' && typeof(item[key]) !== 'object' && item[key]) {
          if(notEmptyFilters[key].includes(item[key])) {
            return !filtered.find(filteredItem => filteredItem.id === item.id) && filtered.push(item);
          }
        }
      });
    })

    return filtered;
  },[filters,sortedProducts])
 
 /*````````````````````````````````````````````````````Filter By Price````````````````````````````````````````````````````````````````````````*/ 
  return (
    
    <><Typography component={"p"} variant={'h6'}style={{textAlign:"center", margin:"30px"}} >Cameras & Accessories</Typography>
    <Grid container >
      
      <Grid item xs={4}>
      <Box >
        <Filter filters={filters} onChange={handleChangeFilters} />
      </Box>
      </Grid>
      <Grid item xs={8}>
        <Box display="flex" justifyContent="flex-end">
          <Select
          value={sortType}
          onChange={handleChange}
          />
        </Box>
      <ProductList products={filteredProducts}/>
    </Grid>
    </Grid>
    </>
  );
}

export default Products

