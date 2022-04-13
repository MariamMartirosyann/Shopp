import React from 'react';
import logo from '../../../img/logo.jpg';
import SideBar from './SideBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';


const Logo = () =>{
  const[isDrawerOpen,setIsDrawerOpen]= useState(false)
  return (
    <div>
       <div className="logo">
                
                <div className="logo-img"> 
                <img src={logo}  alt="Logo"/>
                </div>
                
                <div className="logo-text">
                    <div className="logologo">  
                      <h1>Maxx<span>Cam</span></h1>
                   </div>
                    <h2>A Picture Perfect Camera Store</h2>
               </div>
               <div>
              <Grid container="2">
                  <Grid item xs={4} className="logo-right-sight" >
                    <AccountCircleIcon paddingRight={2}/>
                    <Typography paddingX={2}>Log in</Typography>
                    <ShoppingBagIcon onClick={() => setIsDrawerOpen(true)}/>
                  </Grid>
                  </Grid>
              </div>
             <SideBar open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}/>
      </div>

    </div>
  );
}

export default Logo