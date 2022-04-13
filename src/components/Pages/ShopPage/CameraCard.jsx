import React from 'react';
import {useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useState} from "react";
import {setActiveProduct } from '../../../redux/slices/products';
import '../../../App.css';
import classNames from 'classnames';


const CameraCard=(props)=> {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const[hovered, setHovered] = useState(false);

  const hundleHover= ()=>{
    setHovered(!hovered)
  }
   
 const hundleClick= ()=> {
  dispatch(setActiveProduct(props));
  console.log(props);
  navigate(`/products/${props.id}`);
 }

 

  return (
    <>
     <div className={"camera-cards"}  onClick={hundleClick}>
               <img className='main-image' src={props.src} alt="kamera"/>
               <img className='hovered-image' src={props.srcMain} alt="kamera"/>
                <div className="camera-ditail">
                <div className="btnQuiekView">Quiek View</div>
                    <h6>{props.name}</h6>
                    <p>{props.price} AMD</p>
                </div>
                <button className="btn2QuiekView"> Add to card</button>
    </div>
 
    </>
  );
}

export default CameraCard