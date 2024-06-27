import React from "react";
import "./LaunchSection.css";
import img from "../../Assest/rapeseed-oil-canola-rape-flowers-wooden-table 1.png";
function LaunchSection() {
  return (
    <div className="launchsection">
      <h3>Eat Healthy, Be Active with Neom! </h3>
      <p className="launchsection_para2">
      From farm to plate, our finest selection of 100% MP Sharbati Wheat Atta, Daliya, Soya Chunks, Pasta and Organic Mustard Oil is meticulously created to guarantee exceptional nutritional quality with each and every bite.
      </p>
      <div className="launchsection_div">
        <div className="launchsection_div_left">
          <span>
            <p className="launchsection_div_left_para1">Neom Organic Mustard Oil </p>
            <p className="launchsection_div_left_para2">Neom Organic Mustard Oil is derived through the traditional method of pressing the initial batch of mustard seeds, delivering intense pungency and aromatic qualities.</p>
          </span>
          <span>
            <p className="launchsection_div_left_para1">100% MP Sharbati Wheat Atta</p>
            <p className="launchsection_div_left_para2">Carefully selected from the best wheat fields in Madhya Pradesh, Neom Atta is crafted using 100% wheat flour and completely devoid of any additives, ensuring impeccably soft and fluffy chapattis every time.</p>
          </span>{" "}
          <span>
            <p className="launchsection_div_left_para1">Neom Daliya</p>
            <p className="launchsection_div_left_para2">Neom Wheat Daliya represents a delicately milled variant of 100% MP Wheat Kernels, preserving both vibrancy and nutritional value. With its adaptable texture, this broken wheat promotes healthiness by incorporating the entire grain.</p>
          </span>{" "}
          <span>
            <p className="launchsection_div_left_para1">Neom Soya Chunks</p>
            <p className="launchsection_div_left_para2">Neom Soya Chunks offer your essential daily protein intake, providing a wealth of amino acids that not only fulfill your daily protein requirements but also enhance your immune system's resilience.</p>
          </span> 
          
        </div>
        <div className="launchsection_div_right">
          <img src={img} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default LaunchSection;
