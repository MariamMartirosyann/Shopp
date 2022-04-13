import React from "react";
import kamera from "../../../img/kamera.webp"
import kamera2 from "../../../img/kamera2.webp";
import kamera3 from "../../../img/kamera3.webp";
import kamera4 from "../../../img/camera4.webp";
import camera from "../../../img/1.webp";
import cameraa from "../../../img/11.webp";
import camera2 from "../../../img/2.webp";
import camera3 from "../../../img/3.webp";
import camera4 from "../../../img/4.webp";
import CameraCard from "./CameraCard";
import "../../../App.css";


import Carousel from 'nuka-carousel';

const items = [
    {id:6, name: "fKamera",  price: 30000, src:kamera,srcMain:kamera2,collectionId:1,brandId:2,creationDate:"2022-02-23T14:03:46.070Z"},
    {id:7, name: "Kamera 2", price: 30000, src:kamera2,srcMain:kamera2, collectionId:1, brandId:1,creationDate:"2022-03-23T14:09:46.070Z"},
    {id:9, name: "lKamera 3",price: 30000, src:kamera3,srcMain:kamera2,collectionId:1,brandId:3,creationDate:"2022-03-23T14:03:46.070Z"},
    {id:1, name: "AKamera", price: 360000, src:camera,srcMain:cameraa,collectionId:1, brandId:4, creationDate:'2022-03-23T14:03:46.070Z'},
]
const items1 =[

  {id:10,name: "mKamera 3", price: 30000,src:kamera3,srcMain:kamera2,collectionId:2,brandId:4,creationDate:"2022-01-23T14:03:46.070Z"},
    {id:2, name: "Kamera 2", price: 830000, src:camera2,srcMain:kamera2,collectionId:2,brandId:3,creationDate:"2022-03-23T14:02:46.070Z" },
    {id:3, name: "bKamera 3", price: 830000, src:camera3,srcMain:kamera2, collectionId:2, brandId:2,creationDate:"2021-03-23T14:03:46.070Z"},
    {id:4, name: "JKamera 3", price: 390000, src: kamera4,srcMain:kamera2,collectionId:2,brandId:1,creationDate:"3020-03-23T14:03:46.070Z"},
    {id:5, name: "ssKamera 3", price: 130000, src:camera4,collectionId:2,srcMain:kamera2, brandId:3,creationDate:"1022-03-23T14:09:46.070Z"},
  ]
const Cameras= ()=> {
    return (
    <div>
        <h5  className="dig-cam">Digital Cameras</h5>
          <Carousel slidesToShow={4} wrapAround>
          {
           items ? items.map(i => <div><CameraCard id={i.id} key={i.name} src={i.src} srcMain={i.srcMain} price={i.price} name={i.name}/></div>) : null
          }
          </Carousel>
      <h5  className="dig-cam">Lenses & Accessories</h5>
      <Carousel slidesToShow={4} wrapAround>
          {
           items1 ? items1.map(i => <div><CameraCard key={i.name} src={i.src}  srcMain={i.srcMain} price={i.price} name={i.name}/></div>) : null
          }
          </Carousel>
      </div>
    );
  }
  
export default Cameras
