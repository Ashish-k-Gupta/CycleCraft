import React, { useState } from 'react'
import assets from '../../assets/assets.js'; 
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
// import 'F:/code/projectInterview/100xDevsHarkirat/ReactProject/Food-Delivery/src/components/Navbar/Navbar.css'


const navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

const handleMenuClick = (menuItem) =>{
  setMenu(menuItem)
}


  return (
    <div className='navbar'>
      <img  className='logo' src={assets.craftLogo} alt="" />
      <ul className="navbar-menu">

        <li>
        <Link onClick={() => handleMenuClick("home")} className={menu === "home"?"active": ""}>Home</Link>
        </li>
        <li>
        <a href='#explore-garage' onClick={() => handleMenuClick("motorcycles")} className={menu === "motorcycles"?"active": ""}>Motorcycles</a>
        </li>
        <li>
        <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app"?"active": ""}>Mobile App</a>
        </li>
        <li>
        <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us"?"active": ""}>Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.searchIcon} alt="" />
        <div className="navbar-serach-icon">
          <img src= {assets.cartIcon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}
export default navbar
