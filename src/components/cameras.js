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
import "../App.css";


import Carousel from 'nuka-carousel';

const items = [
  {
    name: "Kamera",
    price: 360000,
    src: camera
  },
  {
    name: "Kamera 2",
    price: 830000,
    src: camera2
  },
  {
    name: "Kamera 3",
    price: 830000,
    src: camera3
  },{
    name: "Kamera 3",
    price: 390000,
    src: kamera4
  },{
    name: "Kamera 3",
    price: 130000,
    src: camera4
  }
]
const items1 = [
  {
    name: "Kamera",
    price: 30000,
    src: kamera
  },
  {
    name: "Kamera 2",
    price: 30000,
    src: kamera2
  },
  {
    name: "Kamera 3",
    price: 30000,
    src: kamera3
  },{
    name: "Kamera 3",
    price: 30000,
    src: kamera3
  },{
    name: "Kamera 3",
    price: 30000,
    src: kamera3
  }
]
const Cameras= ()=> {
    return (
    <div>
        <h5  className="dig-cam">Digital Cameras</h5>
          <Carousel slidesToShow={4} wrapAround>
          {
           items ? items.map(i => <div><CameraCard key={i.name} src={i.src} price={i.price} name={i.name}/></div>) : null
          }
          </Carousel>
      <h5  className="dig-cam">Lenses & Accessories</h5>
      <Carousel slidesToShow={4} wrapAround>
          {
           items1 ? items1.map(i => <div><CameraCard key={i.name} src={i.src} price={i.price} name={i.name}/></div>) : null
          }
          </Carousel>
      </div>
    );
  }
  
export default Cameras
