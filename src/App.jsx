import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/home/home.jsx'
import Cart from '../src/pages/cart/cart.jsx'
import PlaceOrder from '../src/pages/placeOrder/placeOrder.jsx'
// import Navbar from './components/Navbar/Navbar.jsx'
// import 'F:/code/projectInterview/100xDevsHarkirat/ReactProject/Food-Delivery/src/components/Navbar/Navbar'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/cart' element={<Cart/>} />
        <Route path = '/placeOrder' element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App
