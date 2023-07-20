import React from 'react'
import "./Concieve.css"
import P_img from "../../../assets/p-logo.png"
import C_img from "../../../assets/Conimg.png"
import { FaAmazon } from "react-icons/fa6";


function Concieve() {
  
  return (
    <div className="P-C">
        <div className="S-C">
                <p>DIY ICI With</p>
                <div className="conceive-box">
                    <h2>V-CONCEIVE</h2>
                </div>
                <p>Easy,Smooth & Simple</p>
                <div className='B-C'>
                <p>Get Our Products From</p>
                <div className="BT">
                <button><img src={P_img} alt="#" /></button>
                <button className="amz"><FaAmazon/></button>
                </div>
                </div>
        </div>
        <div className='I-C'>
            <img src={C_img} alt="#" />
        </div>
    </div>
    
  )
}

export default Concieve