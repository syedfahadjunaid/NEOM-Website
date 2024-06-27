import React from "react";
import "./HeroBanner.css";
import img from "../../../Assest/image 191.png";
import img1 from "../../../Assest/Mockup/pasta_1.png";
import img2 from "../../../Assest/Mockup/pasta_2.png";
import img3 from "../../../Assest/Mockup/pasta_3.png";
import img4 from "../../../Assest/Mockup/pasta_4.png";
import img5 from "../../../Assest/Mockup/5kg-bottle.png";
import img6 from "../../../Assest/Mockup/Atta_5,10,25.png";
import img7 from "../../../Assest/Mockup/Daliya_500.png";
import img8 from "../../../Assest/Mockup/mustard-oil1.png";
import img9 from "../../../Assest/Mockup/Soya_Chunks.png";
import img10 from "../../../Assest/TRET5E4-01.png";
import HerobannerCard from "../../../Cards/HerobannerCard/HerobannerCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const items = [
  <HerobannerCard image={img1} />,
  <HerobannerCard image={img2} />,
  <HerobannerCard image={img3} />,
  <HerobannerCard image={img4} />,
  <HerobannerCard image={img5} />,
  <HerobannerCard image={img6} />,
  <HerobannerCard image={img7} />,
  <HerobannerCard image={img8} />,
  <HerobannerCard image={img9} />,
];
const responsive = {
  0: {
    items: 1,
  },
  720: {
    items: 2,
    itemsFit: "contain",
  },
  1024: {
    items: 2,
    itemsFit: "contain",
  }, 1224: {
    items: 3,
    itemsFit: "contain",
  },
};
function HeroBanner() {
  return (
    <div className="herobanner">
      {/* <h1 className="herobanner_heading">
        I'm Just Here For <br />
        <span>The Snacks</span>
      </h1> */}
      <img src={img10} alt="banner" className="herobanner_img"/>
      {/* <span>
        <input type="text" placeholder="Seacrh..." />
        <Search />
      </span> */}
      <div className="herobanner_cards">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          disableDotsControls={true}
          disableButtonsControls={true}
          autoPlayInterval={2000}
        />
      </div>
      <img src={img} alt="banner" className="herobanner_bottom" />
    </div>
  );
}

export default HeroBanner;
