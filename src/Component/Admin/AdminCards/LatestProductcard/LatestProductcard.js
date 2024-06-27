import React from 'react'
import './LatestProductcard.css'
import img from '../../AdminAsset/AdminImages/Neom-logo 1.png'
function LatestProductcard() {
  return (
    <div className='latestproductcard'>
        <div className="latestproductcard_left">
            <p>Product Name </p>
            <span>
                <p>Sold</p> : <strong>500</strong>
            </span>
        </div>
        <div className="latestproductcard_right">
            <img src={img} alt="product" />
        </div>
    </div>
  )
}

export default LatestProductcard