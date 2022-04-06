import React from 'react';
import logo from '../img/logo.jpg';
import SideBar from '../components/sideBar';


const Logo = () =>{
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
             <SideBar/>
      </div>

    </div>
  );
}

export default Logo