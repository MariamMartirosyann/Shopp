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
import "../App.css"


const Brands=[{lable:"Robust"},{lable:"Tipox"},{lable:"Primo"},{lable:"Excipia"}]

const Colections =[{name:"Digital Cameras"}, {name:"Lenses & Accessories"}]


const Filter = () => {
    const [price, setPrice] = React.useState([30000,830000]);
    const handleChange = (event, newPrice) => {
      setPrice(newPrice);
      };
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
           <strong>All</strong>
           </Typography>
          {
            Colections?Colections.map(i=><Typography component={"p"} key={i.name} variant="body2">
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
        value={"price"}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={pricetext}
        style={{color:'string'}}
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
              Brands?Brands.map(i =><FormControlLabel  control={<Checkbox  />} label={i.lable} key={i.lable} />):null
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
