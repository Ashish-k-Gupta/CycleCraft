import React, { useContext } from 'react'
import "./BikeDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import { bike_list } from '../../assets/assets'
import BikeModels from '../BikeModels/BikeModels'

const BikeDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='bike_display' id='bike_display'>
        <h2>Our Store near you</h2>
        <div className="bike-display-list">
            {bike_list.map((item, index)=>{
                return <BikeModels key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default BikeDisplay
