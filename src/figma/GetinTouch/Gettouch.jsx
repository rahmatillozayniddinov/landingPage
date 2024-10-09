import React from 'react'
import './Get.css'
function Gettouch() {
  return (
    <div className='gettouch' id='getintouch'>
       <div className="gettype">
         <h2>Get In Touch</h2>
         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </span>
         <span> do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
       </div>
       <div className="contact">
          <div className="input">
          <span>Email</span>
        <input type="text" placeholder='Please enter your email' />
          </div>
          <div className="mobile">
           <span>Mobile</span>
           <input type="text"  placeholder='Enter mobile'/>
          </div>
          <div className="messege">
           <span>Messege</span>
           <textarea name="message" cols="50" rows="10" className="user" placeholder="Enter your message"/>
          </div>
          <div className="messages-button">
          <button>Submit</button>
             <span>Design By Rahmatillo devoloper</span>
          </div>
       </div>
    </div>
  )
}

export default Gettouch;