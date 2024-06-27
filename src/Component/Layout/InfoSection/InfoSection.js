import React from "react";
import "./InfoSection.css";
import img from "../../Assest/1 (1).png";
import img1 from "../../Assest/4.png";
import img2 from "../../Assest/2.png";
import img3 from "../../Assest/3.png";
function InfoSection() {
  return (
    <div className="infosection">
      <div className="infosectionCard">
        <div className="infosectionCard_img">
          <img src={img} alt="icons" />
        </div>
        <div className="infosectionCard_details">
          <p className="infosectionCard_details_para">
          Utilizing over 500 Selection Centers
          </p>
        </div>
      </div>{" "}
      <div className="infosectionCard">
        <div className="infosectionCard_img">
          <img src={img1} alt="icons" />
        </div>
        <div className="infosectionCard_details">
          <p className="infosectionCard_details_para">
          A Three-Phase Cleaning Procedure
          </p>
        </div>
      </div>
      <div className="infosectionCard">
        <div className="infosectionCard_img">
          <img src={img2} alt="icons" />
        </div>
        <div className="infosectionCard_details">
          <p className="infosectionCard_details_para">
          Food Processing using Traditional Methods
          </p>
        </div>
      </div> 
      <div className="infosectionCard">
        <div className="infosectionCard_img">
          <img src={img3} alt="icons" />
        </div>
        <div className="infosectionCard_details">
          <p className="infosectionCard_details_para">
          Air-Tight Packaging for Long Freshness   
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
