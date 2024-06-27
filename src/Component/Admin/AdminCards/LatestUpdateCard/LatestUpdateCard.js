import React from 'react'
import './LatestUpdateCard.css'
import img from '../../AdminAsset/AdminImages/Vector (1).png'
function LatestUpdateCard() {
  return (
    <div className='latestupdatecard'>
        <span>
           <img src={img} alt="logo" />
        </span>
        <div>
            <strong>45</strong>
            <p>Total Orders</p>
        </div>
    </div>
  )
}

export default LatestUpdateCard