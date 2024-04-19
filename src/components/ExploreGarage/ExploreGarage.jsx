import React from 'react'
import '../ExploreGarage/ExploreGarage.css'
import { Garage_list } from '../../assets/assets'

const ExploreGarage = () => {
  return (
    <div className='explore-garage' id='explore-garage'>
        <h1>Explore Our Garage</h1>
        <p className='explore-garage-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident distinctio earum totam eius! Saepe sit veniam porro, obcaecati ipsa molestias voluptates et ea illum doloribus.</p>
        <div className='explore-garage-list'>
            {Garage_list.map((item, index) =>{
                return (
                <div key={index} className='explore-garage-list-item'>
                <img src={item.bike_image} alt="" />
                <p>{item.bike_name}</p>
            </div>
            )
     })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreGarage
