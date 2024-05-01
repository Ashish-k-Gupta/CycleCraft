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
            <div className="footer-social-icons">
            <img src={assets.facebookLogo} alt="Facebook" />
            <img src={assets.tXlogo} alt="Twitter" />
            <img src={assets.linkedInLogo} alt="LinkedIn" />
            <img src={assets.instagramLogo} alt="Instagram" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>Contact@ashish.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; Cyclecraft.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
