import React from "react";
import "./OurProductSection.css";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import mustordOil from "../../Assest/Mockup/5kg-bottle.png";
import Wheat from "../../Assest/Mockup/Atta_5,10,25.png";
import Pasta from "../../Assest/Mockup/pasta_1.png";
import daliya from "../../Assest/Mockup/Daliya_500.png";
import soya from "../../Assest/Mockup/Soya_Chunks.png";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import Data from '../../data/data'
function OurProductSection() {
  const [open, setOpen] = useState(false);
const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
      img: mustordOil,
      price: 720,
      mrp:800,
      id: 2,
      size: "5kg",
      rating:4.7,
      quantity:1,

    },
    {
      title: "Whole Wheat",
      img: Wheat,
      price: 410,
      id: 3,
      size: "5kg",
      rating:4.8,
      mrp:450,
      quantity:1,
    },
    {
      title: "Wheat Daliya",
      img: daliya,
      price: 720,
      id: 4,
      size: "5kg",
      rating:4.5,
      mrp:750,
      quantity:1,
    },
    {
      title: "Soya Chunks",
      img: soya,
      price: 320,
      id: 5,
      size: "5kg",
      rating:4.6,
      mrp:450,
      quantity:1,
    },
    {
      title: "Pasta",
      img: Pasta,
      price: 720,
      id: 6,
      size: "5kg",
      rating:4.9,
      mrp:850,
      quantity:1,
    },
  ];
  return (
    <div className="ourproductsection">
      <div className="ourproductsection_heading">
        <h3>Our Product </h3>
      </div>
      <div className="ourproductsection_card">
      <AliceCarousel mouseTracking responsive={responsive} disableButtonsControls>
      {Data?.map((item) => (
          <ProductCard title={item?.title} image={item?.img[0]} price={item?.price} mrp={item?.mrp} rating={item?.rating} size={item?.size} item={item} id={item.id} setOpen={setOpen}/>
        ))}

      </AliceCarousel>
       
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Successfully Added To Cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default OurProductSection;
