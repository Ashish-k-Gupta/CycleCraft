import React from 'react'
import '../placeOrder/placeOrder.css'


const PlaceOrder = () => {
  return (
    <form className='palceOrder'>
      <div className="placeOrderLeft">
        <p className="title"></p>
        <div className="multiFields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='House Address'/>
        <div className="multiField">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State' />
        </div>
        <div className="multiField">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="placeOrderRight"></div>
    </form>
  )
}

export default PlaceOrder
