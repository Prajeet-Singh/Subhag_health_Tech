import React from 'react'
import './Feac.css'
import Simg1 from "../../../assets/simg1.png"
import Simg2 from "../../../assets/simg2.png"
import Simg3 from "../../../assets/simg3.png"
import Simg4 from "../../../assets/simg4.png"
import Simg5 from "../../../assets/simg5.png"
import Simg6 from "../../../assets/simg6.png"

function Feac() {
return (
<div>
<div class="logos">
      <div class="logos-slide">
        <img src={Simg1} />
        <img src={Simg2} />
        <img src={Simg3} />
        <img src={Simg4} />
        <img src={Simg5} />
        <img src={Simg6} />
        
      </div>

      <div class="logos-slide">
      <img src={Simg1} />
        <img src={Simg2} />
        <img src={Simg3} />
        <img src={Simg4} />
        <img src={Simg5} />
        <img src={Simg6} />
      </div>
    </div>
</div>
)
}

export default Feac