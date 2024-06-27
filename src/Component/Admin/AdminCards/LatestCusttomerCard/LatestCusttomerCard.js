import React from 'react'
import './LatestCusttomerCard.css'
function LatestCusttomerCard({title,serialNumber}) {
  return (
    <div className='latestcustomercard'>
        <p className='latestcustomercard_para1'>{serialNumber}.</p>
        <p className='latestcustomercard_para2' >{title}</p>
    </div>
  )
}

export default LatestCusttomerCard