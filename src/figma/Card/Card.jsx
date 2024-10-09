import React from 'react'
import "./card.css"
import Photo from "../img/Photo.png";
const Card = () =>  {
  return (
    <div className='card'>
       <div className="type">
         <span>Your Name Here</span>
         <p>Your Name Here
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <button>Let’s get started</button>
       </div>
       <div className="picture">
           <img src={Photo} alt="" />
       </div>
       <div className="buttontype">
        <span>Click Up</span>
        <span>Drop Box</span>
        <span>PAYCHEX</span>
         <span>Elastic</span>
         <span>Stripe</span>
       </div>
    </div>
  )
}

export default Card;