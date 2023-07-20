import React from 'react'
import "./Androwash.css"
import A_img from "../../../assets/Andro.png"
import { AiOutlineShoppingCart } from "react-icons/ai";



function Androwash() {
  
  return (
    <div className="aP-C">
        <div className="aS-C">
                <p>Further Increase Chances By</p>
                <div className="aconceive-box">
                    <h2>ANDROWASH</h2>
                </div>
                <p>Economical, Smart & Automated</p>
                <div className='aB-C'>
                <div className="aBT">
                <button className='atn'><AiOutlineShoppingCart/><p>Book Sperm Wash</p></button>
                </div>
                </div>
        </div>
        <div className='aI-C'>
            <img src={A_img} alt="#" />
        </div>
    </div>
    
  )
}

export default Androwash