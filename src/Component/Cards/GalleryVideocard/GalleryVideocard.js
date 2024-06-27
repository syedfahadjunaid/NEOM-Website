import React from "react";
import "./GalleryVideocard.css";
function GalleryVideocard({video}) {
  return (

      <video controls className="galleryvideocard">
        <source src={video} type="video/mp4" />
      </video>

  );
}

export default GalleryVideocard;
