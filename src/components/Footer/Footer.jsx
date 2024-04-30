import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footerLogo" src={assets.craftLogo}  alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deleniti voluptatibus nam corrupti est, optio corporis cupiditate non quas fugit beatae neque ipsam.</p>
            <img src={assets.facebookLogo} alt="Facebook" />
            <img src={assets.tXlogo} alt="Twitter" />
            <img src={assets.linkedInLogo} alt="LinkedIn" />
            <img src={assets.instagramLogo} alt="Instagram" />
        </div>
        <div className="footer-content-center">

        </div>
        <div className="footer-content-right">

        </div>
        
      </div>
    </div>
  )
}

export default Footer
