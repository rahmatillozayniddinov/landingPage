import React from 'react'
import "./Recent.css"
import Mask from "../img/Mask.png"
import Mask2 from "../img/Mask2.png"
function Recent() {
  return (
    <div className='recent' id='recent'>
           <div className="resent">
            <h2>Recent Work</h2>
            <span>Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
           </div>

           <div className="container">
            <div className="box">
             <img src={Mask} alt="" />
             <div className="yozuvlar">
             <h3>Work name here</h3>
             <span>Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
             <button>Know More</button>
             </div>
            </div>
            <div className="box">
             <img src={Mask2} alt="" />
              <div className="yozuvlar">
              <h3>Work name here</h3>
             <span>Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u</span>
             <button className='right-button'>Know More</button>
              </div>
            </div>
           </div>
    </div>
  )
}

export default Recent;