import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';


const ContactMe=()=> {
        return (
        
  <div>       
   <div className="main-bannerc">
    
    <div className="main-banner-textc">
      <h2>Contact Us</h2>
       <p>We’re here to help! Contact us with any question and we will do our best to reply as soon as we can. </p> 
    </div>

    </div>
    <div className="border-one">         
     <Grid container spacing={2} sx={{
      marginLeft:"2.5rem",
      marginY:"7.5rem"
      }}>
      <Grid item xs={4} 
     >
     <Box>
       <Typography component={"p"}>Mailing address:</Typography>
       <Typography component={"body2"}>500 Terry Francois Street</Typography>
       <Typography component={"body2"}>San Francisco, CA 94158</Typography>
    </Box>
    <br/>
    <Box>
       <Typography component={"p"}>Call us 24/7:</Typography>
       <Typography component={"body2"}>Tel: 123-456-7890</Typography>
      
    </Box>
    <br/>
    <Box>
       <Typography component={"p"}>Or email us at:</Typography>
       <Typography component={"body2"}>info@mysite.com</Typography>
    </Box>
    <br/>
    <Box>
       <Typography component={"p"}>Questions? <span>See our FAQ <KeyboardArrowRightIcon/></span></Typography>
       
    </Box>
  </Grid>
 
  <Grid item xs={8}>
  <Box>
       <Typography component={"p"}>Write to us:  </Typography>
       
    </Box>
    
   <Box>
      <FormControl >
       <OutlinedInput sx={{ width: '500px', height:'30px', margin:"5px" }} placeholder="Name" />
       </FormControl>
      <FormControl>
       <OutlinedInput  sx={{ width: '500px', height:'30px', margin:"5px" }} placeholder="Email" />
       </FormControl>
      <FormControl>
       <OutlinedInput   sx={{ width: '500px', height:'110px', margin:"5px"}}placeholder="Type your message here..." />
       </FormControl>
       <button className='btn-contactUs'>Submit</button>
   </Box>
  </Grid>
</Grid>
        </div>

</div> 
        );}

export default ContactMe