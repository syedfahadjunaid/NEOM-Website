import React from "react";
import "./Homepage.css";
import HeroBanner from "../../Layout/Banner/HeroBanner/HeroBanner";
// import Footer from "../../Layout/Footer/Footer";
import VideoSection from "../../Layout/VideoSection/VideoSection";
import CategorySection from "../../Layout/CategorySection/CategorySection";
import OurProductSection from "../../Layout/OurProductSection/OurProductSection";
import AdsSection from "../../Layout/AdsSection/AdsSection";
import LaunchSection from "../../Layout/LaunchSection/LaunchSection";
import InfoSection from "../../Layout/InfoSection/InfoSection";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer1 from "../../Layout/Footer/Footer1";

function Homepage() {
  return (
    <>
    <Navbar/>
    <div className="homepage">
      
      <HeroBanner />
      <InfoSection/>
      <CategorySection />
      <LaunchSection/>
      <OurProductSection/>
      <AdsSection/>
      <VideoSection />
      <Footer1 />
    </div>
    </>
 
  );
}

export default Homepage;
