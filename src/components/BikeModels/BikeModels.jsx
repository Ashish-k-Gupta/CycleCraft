import React, { useState } from 'react'
import "./BikeModels.css"
import assets from '../../assets/assets'

const BikeModels = ({id, name, price, description, image}) => {

const [bikeCount, setBikeCount] = useState(0)

  return (
    <div className='bike-models'>
        <div className="bike-models-image-container">
            <img className='bike-models-image' src={image} alt="" />
            {!bikeCount 
            ? <img className='add' onClick={() => setBikeCount(prev => prev+ 1)} src={assets.add_icon_white} alt='Add button icon'/>
            : <div className="bike-counter">
              <img onClick={() => setBikeCount(prev => prev - 1)} src={assets.remove_icon_red} alt=''/>
              <p>{bikeCount}</p>
              <img onClick={() => setBikeCount(prev => prev + 1)} src={assets.remove_icon_red} alt=''/>
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
