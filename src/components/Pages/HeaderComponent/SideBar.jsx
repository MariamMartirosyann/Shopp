import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from'@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';


 const SideBar=({open,onClose})=> {

 

  return (
      <Drawer 
          anchor='right'
          open={open}
          onClose={onClose}
      >
     
    <Box
     sx={{
      width: 300,
      height: 90,
      paddingTop:'40px',
      paddingLeft:'10px',
      backgroundColor: 'text.primary',
      color:'secondary.contrastText'
     }}
    
        > 
         <Grid container  spacing={5} >
           <Grid item xs={4}> <ArrowForwardIosIcon onClick={onClose}/>  </Grid>
           <Grid item xs={8}> <Typography>Card</Typography></Grid>
           </Grid>
        
    </Box>
    <Box>
    <Typography 
    style={{textAlign:'center',
    marginTop:'60px'
  }}>
    Card is empty</Typography>
    </Box>
        </Drawer>
  );
}
export default SideBar

