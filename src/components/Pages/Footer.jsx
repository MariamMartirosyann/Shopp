import React from "react";
import '../../App.css';
import mc  from "../../img/mc.webp"
import vs from "../../img/vs.webp"



const Footer = ()=> {
    return (
      <div>
       <footer>
       
        <div className="ending">
            <div className="contact-us">
                <h6>Contact Us</h6>
                <p>Saryan 22</p>
                <p>+987 124568</p>
                <p>dammytextmail.ru</p>
                <br/>
                <div className="contact-us-icons">
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                </div>

            </div>
            <div className="customer-services">
                <h6>Customer Service</h6>
                <h6> <span>Contauct Us </span> / Shipping </h6>
                <h6> <span> Returns  </span> / Payments & Warranties </h6>  
                
            </div>
            <div className="paymant">
                <h6> We Accept</h6> 
              <img src={mc} alt="" />
              <img src={vs} alt="" />
              <p>@2023 by MaxCam.Proudly created by Mariam Martirosyan</p>

            </div>
        </div>
    </footer>
      
      </div>
    );
  }
  
  export default Footer