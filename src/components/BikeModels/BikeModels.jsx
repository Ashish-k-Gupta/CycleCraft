import React, { useContext } from 'react'
import "./BikeModels.css"
import assets, { icons } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const BikeModels = ({id, name, price, description, image}) => {

const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);


  return (
    <div className='bike-models'>
        <div className="bike-models-image-container">
            <img className='bike-models-image' src={image} alt="" />
            {!cartItems[id] 
            ? <img className='add' onClick={() => addToCart(id)} src={assets.addIcon} alt='Add button icon'/>
            : <div className="bike-counter">
              <img className='addition' onClick={() => addToCart(id)} src={assets.addIcon} alt=''/>
              <img className='subtract' onClick={() => removeFromCart(id)} src={assets.minusIcon} alt=''/>
              <div className='storeCount'>
              <p className='count'>{cartItems[id]}</p>
              </div>
            </div>
            }
        </div>
      <div className="bike-model-info">
        <div className="bike-model-name-rating">
            <p>{name}</p>
            <img src="assets.rating_starts" alt="" />
        </div>
        <p className='bike-model-desc'>{description}</p>
        <p className="bike-model-price">${price}</p>
      </div>
    </div>
  )
}

export default BikeModels
