import React from "react";
import "./VideoCard.css";
import video from "../../Assest/video/production_id_4057917 (2160p).mp4";
function Videocard({videoUrl}) {
  return(
    // <img src={img} alt="video" className="videocardimg" />;
  
    <video  controls controlsList="nodownload" className="videocard">
    <source src={videoUrl?videoUrl:video} type="video/mp4" style={{width:'100%'}}/>

  </video>

  )

 
}

export default Videocard;
