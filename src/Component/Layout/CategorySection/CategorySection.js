import React from "react";
import "./CategorySection.css";
import CategoryCard from "../../Cards/CategoryCard/CategoryCard";
import img from "../../Assest/Mockup/5kg-bottle.png";
import img1 from "../../Assest/Mockup/Atta_5,10,25.png";
import img2 from "../../Assest/Mockup/Daliya_500.png";
import img3 from "../../Assest/Mockup/Soya_Chunks.png";
import img4 from "../../Assest/Mockup/pasta_1.png";
import AliceCarousel from "react-alice-carousel";
import Data from '../../data/data'
import 'react-alice-carousel/lib/alice-carousel.css';
function CategorySection() {
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
  const data = [
    {
      title: "Organic Musturd Oil",
      subtitle:'Neom Organic Mustard Oil is derived through the traditional method of pressing the initial batch of mustard seeds, delivering intense pungency and aromatic qualities.',
      img: img,
      link:'/product/Neom Organic Mustard Oil'
    },
    {
      title: "Whole Wheat",
      subtitle:'Carefully selected from the best wheat fields in Madhya Pradesh, Neom Atta is crafted using 100% wheat flour and completely devoid of any additives, ensuring impeccably soft and fluffy chapattis every time.',
      img: img1,
      link:'/product/Neom Wheat'
    },
    {
      title: "Wheat Daliya",
      subtitle:'Neom Wheat Daliya represents a delicately milled variant of 100% MP Wheat Kernels, preserving both vibrancy and nutritional value. With its adaptable texture, this broken wheat promotes healthiness by incorporating the entire grain.',
      img: img2,
      link:'/product/Neom Daliya'
    },
    {
      title: "Soya Chunks",
      subtitle:"Neom Soya Chunks offer your essential daily protein intake, providing a wealth of amino acids that not only fulfill your daily protein requirements but also enhance your immune system's resilience.",
      img: img3,
      link:'/product/Neom Soya Chunks'
    },
    {
      title: "Pasta",
      subtitle:"Created from premium wheat semolina (Sooji), this product is perfect for a fast snack, a nutritious addition to salads, a great inclusion in children's lunchboxes, or a wholesome family meal.",
      img: img4,
      link:'/product/Neom Pasta'
    },
  ];
  return (
    <div className="categorysection">
      <div className="categorysection_head">
        <h3>Category</h3>
      </div>
      <div className="categorysection_cards">
        <AliceCarousel mouseTracking responsive={responsive} disableButtonsControls>
        {data?.map((item) => (
          <CategoryCard title={item?.title} image={item?.img} subtitle={item?.subtitle} link={item?.link}/>
        ))}
        </AliceCarousel>
        
      </div>
    </div>
  );
}

export default CategorySection;
