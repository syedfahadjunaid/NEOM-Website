import React from "react";
import "./Gallery.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import GalleryTopImg1 from "../../Assest/gallery/1309705132.jpg";
import GalleryTopImg2 from "../../Assest/gallery/chapati-tava-roti-also-known-as-indian-bread-fulka-phulka-main-ingredient-lunch-dinner-india-pakistan-selective-focus.jpg";
import GalleryTopImg3 from "../../Assest/gallery/cleaned-hazelnuts-brown-bowl-high-angle-view-white-wooden-table.jpg";
import GalleryTopImg4 from "../../Assest/gallery/closeup-bowl-full-atta-flour-surrounded-by-ripe-wheat.jpg";
import GalleryTopImg5 from "../../Assest/gallery/pexels-engin-akyurt-1437267.jpg";
import GalleryMidImg6 from "../../Assest/gallery/pexels-engin-akyurt-1487511.jpg";
import GalleryMidImg7 from "../../Assest/gallery/portrait-thai-traveler-man-glasses-pouring-sunflower-oil-into-frying-pan-outdoor-cooking-traveling-camping-lifestyle-concept.jpg";
import GalleryMidImg8 from "../../Assest/gallery/some-woman-pouring-oil-delicious-salad-plate-wooden-black-background-side-view-space-text.jpg";
import GalleryMidImg9 from "../../Assest/gallery/vegetable-dalia-daliya-khichadi-broken-wheat-khichdi-with-tomato-green-peas-chilli-served-bowl-plate.jpg";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import GalleryCard from "../../Cards/GalleryCard/GalleryCard";
import GalleryVideocard from "../../Cards/GalleryVideocard/GalleryVideocard";
import video from "../../Assest/video/pexels-roman-odintsov-5657574 (2160p) (1) (1).mp4";
import Footer1 from "../../Layout/Footer/Footer1";

function Gallery() {
  const items = [
    <GalleryCard image={GalleryTopImg1} />,
    <GalleryCard image={GalleryTopImg2} />,
    <GalleryCard image={GalleryTopImg3} />,
    <GalleryCard image={GalleryTopImg4} />,
    <GalleryCard image={GalleryTopImg5} />,
    <GalleryCard image={GalleryMidImg6} />,
    <GalleryCard image={GalleryMidImg7} />,
    <GalleryCard image={GalleryMidImg8} />,
    <GalleryCard image={GalleryMidImg9} />,
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
      items: 3,
      itemsFit: "contain",
    },
    1224: {
      items: 4,
      itemsFit: "contain",
    },
  };
  return (
    <>
      <Navbar />
      <div className="Gallery-Section">
        <NavigationButtons currentPage="Gallery" />
        <div className="Gallery-SubSection">
          <div className="Gallery-Image-Section">
            {/* <div className="Gallery-Image">
            <img src={GalleryTopImg1} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg2} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg3} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg4} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg5} alt="gallery" />
          </div> */}
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              disableButtonsControls={true}
              autoPlay={true}
              infinite={true}
              autoPlayInterval={2000}
       
            />
          </div>
          <div className="Gallery-Image-Section">
            {/* <div className="Gallery-Image">
            <img src={GalleryTopImg1} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg2} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg3} alt="gallery" />
          </div> */}
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              disableButtonsControls={true}
              autoPlay={true}
              infinite={true}
              autoPlayInterval={2000}
            />
          </div>
          <div className="Gallery-Image-Section">
            {/* <div className="Gallery-Image">
            <img src={GalleryMidImg} alt="gallery" />
          </div> */}
            <GalleryVideocard video={video} />
          </div>

          <div className="Gallery-Image-Section-Bottom">
            {/* <div className="Gallery-Image">
            <img src={GalleryTopImg4} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg5} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg1} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg2} alt="gallery" />
          </div>
          <div className="Gallery-Image">
            <img src={GalleryTopImg3} alt="gallery" />
          </div> */}
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              disableButtonsControls={true}
              autoPlay={true}
              infinite={true}
              autoPlayInterval={2000}
            />
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}

export default Gallery;
