import React, { useContext, useState } from 'react'
import assets from '../../assets/assets.js'; 
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';
// import 'F:/code/projectInterview/100xDevsHarkirat/ReactProject/Food-Delivery/src/components/Navbar/Navbar.css'


const navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

const handleMenuClick = (menuItem) =>{
  setMenu(menuItem)
}


  return (
    <div className='navbar'>
      <Link to={"/"}><img  className='logo' src={assets.craftLogo} alt="" /></Link>
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
         <Link to={"/cart"}> <img src= {assets.cartIcon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0? "": "dot"}></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}
export default navbar
