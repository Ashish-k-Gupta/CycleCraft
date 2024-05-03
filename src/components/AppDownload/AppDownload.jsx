import React from 'react'
import './AppDownload.css'


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Expericence Download <br/> CycleCraft App</p>
        <div className="app-download-platform">
            <img className='playStore' src={assets.playStore} alt="" />
            <img className='appStore' src={assets.appStore} alt="" />
        </div>
      
    </div>
  )
}
import './AppDownload.css'
import assets from '../../assets/assets'


export default AppDownload
