import React from "react";
import "./AdsSection.css";
import img from "../../Assest/24-8-23 (2)_page-0001.jpg";
import img1 from "../../Assest/news add6_page-0001.jpg";
import img2 from "../../Assest/24-8-23_page-0001.jpg";
import { Link } from "react-router-dom";
function AdsSection() {
  return (
    <div className="adssection">
      <div className="adssection_left">
        <div>
          <Link to='#'>
          <img src={img} alt="ads banner" />
          </Link>
         
        </div>
      </div>
      <div className="adssection_right">
        <div>
          <Link to='#'>
          <img src={img1} alt="ads banner" />
          </Link>
         
        </div>
        <div>
          <Link to='#'>
          <img src={img2} alt="ads banner" />
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default AdsSection;
