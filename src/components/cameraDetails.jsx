import React from 'react';
import Grid from '@mui/material/Grid'
import kamera from "../img/kamera.jpg"
import kamera2 from "../img/kamera2.webp";
import kamera3 from "../img/kamera3.webp";
import kamera4 from "../img/camera4.webp";
 import camera from "../img/1.webp";
 import camera11 from "../img/11.webp";
 import camera2 from "../img/2.webp";
 import camera3 from "../img/3.webp";
 import camera4 from "../img/4.webp";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import  Typography  from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';






const items = [
  {
    id:1,
    title:"I'm a Product",
    name: "Kamera",
    price: 360000,
    src: camera,
    SKU: "0001",
  },
  {
    name: "Kamera 2",
    price: 830000,
    src: camera2
  },
  {
    name: "Kamera 3",
    price: 830000,
    src: camera3
  },{
    name: "Kamera 3",
    price: 390000,
    src: kamera4
  },{
    name: "Kamera 3",
    price: 130000,
    src: camera4
  },

  {
    name: "Kamera",
    price: 30000,
    src: kamera
  },
  {
    name: "Kamera 2",
    price: 30000,
    src: kamera2
  },
  {
    name: "Kamera 3",
    price: 30000,
    src: kamera3
  },{
    name: "Kamera 3",
    price: 30000,
    src: kamera3
  },{
    name: "Kamera 3",
    price: 30000,
    src: kamera3
  }
]



const CameraDetailsList=()=> {
  return (
     <Grid container style={{margin:"10px"}}>
      <Grid item xs={6}>
        <Grid ><img src={camera} alt="camera" className='detailPhoto'/></Grid>
      <Grid container>
       <Grid ><img src={camera} alt="camera" className='detailPhoto2'/></Grid>
       <Grid ><img src={camera11} alt="camera" className='detailPhoto2'/></Grid><br/>
       <Box ><Typography variant='p' component={"body2"}  sx={{marginTop:"10px"}}>I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.</Typography></Box>
      </Grid>

      </Grid>
      
      
    <Grid item xs={6}  style={{marginTop:"60px"}}>
    <Box><Typography component={'h6'} variant="h4">I'm a Product
    </Typography></Box><br/>
    <Box>
      <Typography component={"h6"}>SKU: 0001</Typography>
    </Box><br/>
    <Box>
      <Typography component={"h6"}>$19.99</Typography>
    </Box><br/>
    <Box>
      <Typography component={"h6"}>Quantity</Typography>
    </Box>
    <FormControl sx={{ width: '75px'}} className="inputDetail">
  <OutlinedInput placeholder="0" /><br/>

</FormControl><br/>
<button className='btnDetail' >Add to Card</button>
<button className='btnDetail btnDetail2'>Add to Card</button>
<Box>
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>PRODUCT INFO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>RETURN AND REFUND POLICY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
  </Box>
</Grid>

    </Grid>    
  );
}

export default CameraDetailsList

