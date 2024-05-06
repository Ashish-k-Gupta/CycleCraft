import React, { useState } from 'react'
import '../home/home.css'
import Header from '../../components/Header/Header'
import ExploreGarage from '../../components/ExploreGarage/ExploreGarage'
import BikeDisplay from '../../components/BikeDisplay/BikeDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreGarage category = {category} setCategory ={setCategory}/>
      <BikeDisplay category ={category}/>
      <AppDownload/>
    </div>
  )
}

export default home

/* 
cd ../../../f/code/projectinterview/100xdevsharkirat/reactproject/cyclecraft

*/