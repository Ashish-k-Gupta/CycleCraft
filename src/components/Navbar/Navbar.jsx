import React, { useState } from 'react'
import assets from '../../assets/assets.js'; 
import '../Navbar/Navbar.css'
// import 'F:/code/projectInterview/100xDevsHarkirat/ReactProject/Food-Delivery/src/components/Navbar/Navbar.css'


const navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img  className='logo' src={assets.craftLogo} alt="" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home"?"active": ""}>Home</li>
        <li onClick={() => setMenu("motorcycles")} className={menu === "motorcycles"?"active": ""}>Motorcycles</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active": ""}>Mobile App</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us"?"active": ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.searchIcon} alt="" />
        <div className="navbar-serach-icon">
          <img src= {assets.cartIcon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}
export default navbar
