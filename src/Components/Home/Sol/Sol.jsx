import React from 'react' 
import "./Sol.css" 
import{FaUserDoctor } from "react-icons/fa6";
import{FaHeartPulse} from "react-icons/fa6";
import{HiHome} from "react-icons/hi";

function Sol()
{

  return (

    <div className="Sol-container">
            <h1>WHAT IF YOU CAN SOLVE YOUR PROBLEM?</h1>
            <div className="Cont">
                <div className="Card-container">
                <div className="heart1">
                <FaUserDoctor/>
                </div>
                    <p>At Near By Clinic</p>
                </div>
                <div className="Card-container">
                    
                <div className="heart">
                <HiHome/>
                </div>
                    <p>At Home</p>
                </div>
                <div className="Card-container">
                    <div className="heart1">
                    <FaHeartPulse/>
                    </div>
                    
                    <p>In Privacy & Comfort</p>
                </div>
            </div>
    </div>
  )
}

export default Sol