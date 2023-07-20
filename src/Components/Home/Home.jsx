import React from 'react'
import Navbar from "./Navbar/Navbar.jsx"
import Sslider from "./Sslider/Sslider.jsx"
import Card from "./Card/Card.jsx"
import "./Home.css"
import Feac from "./Feac/Feac.jsx"
import Spon from "./Spon/Spon.jsx"
import Sol from "./Sol/Sol.jsx"
import Fom from "./Fom/Fom.jsx"
import Implement from "./Implement/Implement.jsx"
import Concieve from "./Concieve/Concieve.jsx"
import Androwash from "./Androwash/Androwash.jsx"
import Footer from "./Footer/Footer.jsx"
import cplimg from "../../assets/cplimg.png"
import bgimg from "../../assets/bgimg.jpg"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

// const slides = [
//   {img:img1},{img:img2},{img:img3},
// ]

function Home() {
  return (
   <>

   <Navbar/>
   <Sslider/>
   <div className="secondary-container">
        <h5>
        I BET YOU ARE LIKE ME
        </h5>
        <div className="List-container">
          <div className="List-item">
              <CalendarMonthIcon/>
              <p>You have tried conceiving for more than 12 months</p>
          </div>
          <div className="List-item">
              <BloodtypeIcon/>
              <p>You are frustrated waiting in hospital queue.</p>
          </div>
          <div className="List-item">
             <SupervisedUserCircleIcon/>
             <p>You don't want your neighbors to know it.</p>

          </div>
          <div className="cpl">
            <img src={cplimg} alt="" />
          </div>
        </div>
   </div>
   <Sol/>
   <Concieve/>
   <div className="tube1">
   <iframe width="700" height="400" src="https://www.youtube.com/embed/3hYh9-RBpo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
   <Implement/>
   <div className="AS-fech">
    AS FEATURED IN
   </div>
   <Feac/>
  <Androwash/>
  <div className="Youtube-cont">
    <div className="Ycont">
      <p>Androwash Demo In English</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gdKAlF_XuxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="Ycont">
      <p>Androwash डेमो हिंदी में</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/r5ZkGcuAW_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </div>
  <div className="form-container" style = {{backgroundImage:`url(${bgimg})`}}>
    <div>
        <Fom/>
    </div>
  </div>
  <Footer/>
   {/* <Card/> */}
    <div>Home</div>
   </>
   
    
  )
}

export default Home