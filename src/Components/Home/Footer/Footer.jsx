// Footer.jsx

import React from 'react';
import "./Footer.css"
import { LiaFacebookF } from "react-icons/lia";
import { BiLogoBlogger } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import pay from "../../../assets/payment.png"

const Footer = () => {
  return (
    <footer className="footer">
        
      <div className="connect">
        <h3>Connect with us</h3>
        <div className="social-icons">
          {/* Replace the links and icons with your desired social media platforms */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LiaFacebookF/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <BiLogoBlogger/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaPinterest/>
          </a>
          {/* Add more social media icons as needed */}
        </div>
        
      </div>
      <hr style={{color : 'white',width : '84vw'}}/>
      <div className="l-c">
      <div className="links">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Press and Media</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Condition</a></li>
          <li><a href="#">How Does It Work?</a></li>
          <li><a href="#">Meet The Team</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="links">
        <h3>Recommended</h3>
        <ul>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Partner With Us</a></li>
          <li><a href="#">Partner Clinics</a></li>
          <li><a href="#">IUI Success Tips</a></li>
          <li><a href="#">Research Data</a></li>
          <li><a href="#">Certifications</a></li>
          
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: info@subhag.in</p>
        <p>Phone: + 91 90364 90490</p>
        <p>WhatsApp : +91 90364 90490</p>
        
        <div className='comp'>Subhag HealthTech <br />
Supported By Social Alpha - A Tata Trust Initiative</div>
<div className='comp'>(Research Of Germany, Love Of India) <br />
 Bengaluru Karnataka – 560077</div>
        {/* Add more contact information as needed */}
      </div>
      </div>
      <img src={pay} alt="" />
      <div className="finl-con">
      By using this website I agree to be contacted by Subhag HealthTech over phone and email. I do not have any objection to receiving emails, messages (SMS or any other mode) and calls from Subhag HealthTech. This consent shall supersede any preferences set through Do Not Disturb (DND Register)/ National Customer Preference Register (NCPR).
      </div>
    </footer>
  );
};

export default Footer;
