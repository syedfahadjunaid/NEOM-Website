import React from 'react'
import './GalleryCard.css'
function GalleryCard({image}) {
  return (
   <img src={image} alt='gallery' className='gallerycard'/>
  )
}

export default GalleryCard