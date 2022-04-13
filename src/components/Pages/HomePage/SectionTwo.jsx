import React from "react";
import kamera from "../../../img/kamera.webp";



const SectionTwo = () => {
    return (
    
      <div>
       
       <section className="section-two">
       
       <div className="two-year-img"> 
           <div className="two-year-img-text"> 
                <h5 > <span className="bold-text">2 YEARS WARRANTY </span></h5>
                 <h5 > ON OUR ENTIRE </h5> 
                 <h5 > LENSES SELECTION </h5>
               </div>
             
       </div>
       <div className="instock-img"> 
           <div className="border"><img  className="kamera" src={kamera} alt=""/>
          <div className="instock-text">
              <h6>New TIPOX Models</h6>
              <h4>IN STOCK NOW!</h4>
          </div> 
       </div>
       
       </div>
   
</section>
      </div>
    );
  }
  
  export default SectionTwo