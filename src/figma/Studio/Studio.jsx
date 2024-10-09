import React from 'react'
import "./Studio.css"
import Photo1 from "../img/Photo1.png";
import Photo2 from "../img/Photo2.png"
import Photo3 from "../img/Photo3.png"
function Studio() {
  return (
    <div className='studio' id='studio'>
        <div className="type1">
        <h3>Case Studies</h3>
        <span>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
        
        <div className="center">
            <div className="type3">
            <h3>Work name here</h3>
           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
           <button>view case studiy </button>
            </div>
           <div className="center1">
             <img src={Photo1} alt="" />
        </div>
        </div>
           
        <div className="center2">
        <div className="center3">
             <img src={Photo2} alt="" />
        </div>
            <div className="type4">
            <h3>Work name here</h3>
           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
           <button>View Case studiy</button>
            </div>
        </div>
          
           
        <div className="center4">
            <div className="type5">
            <h3>Work name here</h3>
           <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
           <button>view case studiy </button>
            </div>
           <div className="center5">
             <img src={Photo3} alt="" />
        </div>
        </div>

    </div>
  )
}

export default Studio;