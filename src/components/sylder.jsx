import React from "react";
import kamera from "../img/kamera.jpg"
import kamera2 from "../img/kamera2.webp";
import kamera3 from "../img/kamera3.webp";
import kamera4 from "../img/camera4.webp";
 import camera from "../img/1.webp";
 import camera2 from "../img/2.webp";
 import camera3 from "../img/3.webp";
 import camera4 from "../img/4.webp";
import CameraCard from "./cameraCard";


const Slyder = () =>{
  
    return (
     
    <div>
        <h5  className="dig-cam">Digital Cameras</h5>
        <div className="cameras">
            <div className="simbol"><button><i className="fa fa-chevron-left">L</i></button></div>

         <CameraCard 
         name={"Kamera"}
         price={30000}
         src={kamera}
         />
         
         <CameraCard 
         name={"Kamera1"}
         price={46000}
         src={kamera2}
    
         />
           <CameraCard 
         name={"Kamera2"}
         price={31000}
         src={kamera3}
         />
         <CameraCard 
         name={"Kamera3"}
         price={98000}
         src={kamera4}
         />
          <CameraCard 
         name={"Kamer4a"}
         price={28000}
         src={kamera2}
         />
         <div className ="simbol"><button><i class="fa fa-chevron-right">R</i></button></div>
      </div>
      
        </div>

    );
  }
  
export default Slyder