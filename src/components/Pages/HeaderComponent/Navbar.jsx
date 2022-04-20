import React,{ useEffect } from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectValue } from "../../../redux/slices/counter";

  
      
const Navbar= () => {
  const value = useSelector(selectValue);


  useEffect(() => {
    if(value > 1000){
      console.log("es inch mec value a ")
    }
  },[value])

  
  return (
   
    <nav className="navbar">
    <div><ul>
        <li ><Link to="/"   style={{color:'grey'}}>Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li>
</ul>  
</div>

<div className="coll-us"> {value < 1000 && <p>Call Us +1 800 000 000</p>}   </div>

</nav>
            
);}
  
  
  export default Navbar
