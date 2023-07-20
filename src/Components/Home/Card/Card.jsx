import React from 'react'
import Img from "../../../assets/imi1.jpg"

function Card() {
  return (
    <div><div class="card" style="width: 18rem;">
    <img src={Img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div></div>
  )
}

export default Card