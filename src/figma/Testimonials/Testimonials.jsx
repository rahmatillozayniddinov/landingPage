import React from 'react'
import "./Testimonials.css"
import Client1 from "../img/Client1.png"
import Client2 from "../img/Client2.png"
import Client3 from "../img/Client3.png"
import Client4 from "../img/Client4.png"
function Testimonials() {
  return (
    <div className='testim'>
        
        <div className="yozuv" id='Testimonials'>
          <h3>Testimonials</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </span>
          <span>do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
          
          <div className="content">
           <div className="card1">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
            <div className="pictype">
            <img src={Client1} alt="" />
           <span>Client Name</span>
            </div>
           </div>
           <div className="card1">
            <span>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
            <div className="pictype">
            <img src={Client4} alt="" />
           <span>Client Name</span>
            </div>
           </div>

           <div className="card1">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
            <div className="pictype">
            <img src={Client2} alt="" />
           <span>Client Name</span>
            </div>
           </div>

           <div className="card1">
            <span>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
            <div className="pictype">
            <img src={Client3} alt="" />
           <span>Client Name</span>
            </div>
           </div>
        
          </div>

    </div>
  )
}

export default Testimonials;