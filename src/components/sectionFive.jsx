import React from "react";
import '../App.css';
import sh1 from "../img/sh1.webp"
import sh2 from "../img/sh2.webp"
import sh3 from "../img/sh3.webp"
import sh4 from "../img/sh4.webp"
import sh5 from "../img/sh5.webp"


const pictures= [
    
    {id:1,
    className:"shop",
    src:sh1},
    {id:2,
    className:"shop",
    src:sh2},
    {id:3,
    className:"shop",
    src:sh3},
    {id:4,
    className:"shop",
    src:sh4},
    {id:5,
    className:"shop",
    src:sh5},
]

const SectionFive = () => {
    return (
    
      <div>
       
        <div className="line"></div>
        <div className="shops">
            
            {
                pictures? pictures.map(i=><div className={i.className}><img key={i.id} src={i.src} alt=""/></div>): null
            }
        </div>
        
      
      </div>
    );
  }
  
  export default SectionFive