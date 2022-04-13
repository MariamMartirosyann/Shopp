import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import "../../../App.css"


const Brands=[{label:"Robust",id:1},{label:"Tipox",id:2},{label:"Primo",id:3},{label:"Excipia",id:4}]

const collections =[{name:"All", id:"All"},{name:"Digital Cameras",id:1}, {name:"Lenses & Accessories",id:2}]

const Filter = ({filters, onChange}) => {
    const [price, setPrice] = React.useState([30000,830000]);


    const handleChangePrice = (event, newPrice) => {
      setPrice(newPrice);
      };


    const handleChangeCollection = (collectionId) => {
      const newFilters = {
        collectionId,
      }

      onChange(newFilters)
    }
    

    const handleChangeBrand = (brandId) => {
      if(filters.brandId.includes(brandId)) {
        return onChange({
          ...filters,
          brandId: filters.brandId.filter(item => item !== brandId)
        })
      };
     
      return onChange({
        ...filters,
        brandId: [...filters.brandId, brandId]
      })
    }
    
    const handleChangPrice = () => {}

      function pricetext(price) {
        return `${price} AMD`;
      }
    
  return (
       
    <div >
        
        <Box sx={{width:"200px",
    }}>
    
          <Typography variant='h6' component={"h3"} margin="20px">Filter by</Typography>
        
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Collection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"p"}  variant="body2">
          
           </Typography>
          {
            collections ? collections.map(i=> <Typography onClick={() => handleChangeCollection(i.id)} component={"p"} key={i.id} variant="body2">
                        {i.name}
              </Typography>):null

          }
          
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
  
      
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Slider
        getAriaLabel={() => 'Price range'}
        value={price}
        onChange={handleChangePrice}
        valueLabelDisplay="auto"
        getAriaValueText={pricetext}
        style={{color:'string'}}
        min={30000}
        max={830000}
      />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Typography >
          <FormGroup>
            {
              Brands ? Brands.map(i =><FormControlLabel  control={<Checkbox onChange={() =>handleChangeBrand(i.id)} />} label={i.label} key={i.id} />):null
              
            }
     
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
    
    
    </div>
  );
}

export default  Filter
