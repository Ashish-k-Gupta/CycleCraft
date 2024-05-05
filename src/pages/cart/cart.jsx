import React, { useContext } from 'react'
import '../cart/cart.css'
import { StoreContext } from '../../context/StoreContext'
import assets from '../../assets/assets';


const Cart = () => {

const {cartItems, bike_list, removeFromCart} = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cartItems">
        <div className="cartItemsTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {bike_list.map((item, index)=>{
          if(cartItems[item._id] > 0)
            {
            return (
              <div>
              <div className="cartItemsTitle cartItemsItem">
                  <img className= "cartImages" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>$ {item.price*cartItems[item._id]}</p>
                  {/* <p>X</p> */}
                  <p><img onClick={()=> removeFromCart(item._id)} className='crossImage' src={assets.cross_icon} alt="" /></p>

              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>

        <div className='cartBottom'>
          <div className="cartTotal">
            <h2>Cart Total</h2>
            <div>
              <div className="cartTotalDetails">
                <p>Sub Total</p>
                <p>{0}</p>
              </div>
              <hr />
              <div className="cartTotalDetails">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cartTotalDetails">
                <b>Total</b>
                <b>{0}</b>
              </div>
            </div>
          <button>PROCEED TO CHECKOUT</button>
          </div>
        <div className="cartPromoCode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cartPromoCodeInput">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>

        </div>

    </div>
  )
}

export default Cart
