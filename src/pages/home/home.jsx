import React, { useState } from 'react'
import '../home/home.css'
import Header from '../../components/Header/Header'
import ExploreGarage from '../../components/ExploreGarage/ExploreGarage'

const home = () => {

  const [catagory, setCatagory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreGarage catagory = {catagory} setCatagory ={setCatagory}/>
    </div>
  )
}

export default home
