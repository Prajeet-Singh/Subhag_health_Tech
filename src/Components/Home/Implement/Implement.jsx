import React from 'react'
import "./Implement.css"
import Inserimg from "../../../assets/inserimg.png"
import Effectimg from "../../../assets/Effectimg.png"
import Removeimg from "../../../assets/removeimg.png"

function Implement() {
    
  return (

    <div className="Ssol-container">
            <div className="sCont">
                <div className="sCard-container">
                <div className="sheart">
                <img src={Inserimg} alt="#" />
                </div>
                    <p>Easy Insertion</p>
                    <span className='Info'>The cup of V-Conceive clutches the wall of the vagina on insertion and opens up at the top of the vagina near the cervix, filling the necessary space.</span>
                </div>
                <div className="sCard-container">
                    
                <div className="sheart">
                <img src={Effectimg} alt="#" />
                
                </div>
                    <p>Simple Yet Effective</p>
                    <span className='Info'>V-Conceive is soft, comfortable and easy to use. The cup will keep the sperm in place and is designed to fit one’s lifestyle.</span>
                </div>
                <div className="sCard-container">
                    <div className="sheart">
                <img src={Removeimg} alt="#" />
                    
                    </div>
                    
                    <p>Smooth Removal</p>
                    <span className='Info'>The stem may extend beyond the length of the vagina or it may sit just inside making it easy to reach for smooth removal.</span>
                </div>
            </div>
    </div>
  )
}

export default Implement