import React from 'react'
import "./BikeModels.css"

const BikeModels = ({id, name, price, description, image}) => {
  return (
    <div className='bike-models'>
        <div className="bike-models-image-container">
            <img className='bike-models-image' src="{image}" alt="" />
        </div>
      <div className="bike-model-info">
        <div className="bike-model-name-rating">
            <p>{name}</p>
            <img src="assets.rating_starts" alt="" />
        </div>
        <p className='food-model-desc'>{description}</p>
        <p className="bike-modle-price">${price}</p>
      </div>
    </div>
  )
}

export default BikeModels
