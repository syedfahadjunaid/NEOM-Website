import React, { useEffect } from "react";
import "./ProductPage.css";
import ProductCard from "../../Cards/ProductCard/ProductCard";
import Filter from "../../Layout/Filter/Filter";
import CustomPagination from "../../Layout/CustomPagination/CustomPagination";
import Navbar from "../../Layout/Navbar/Navbar";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { ArrowDropDownRounded, ArrowDropUpRounded } from "@mui/icons-material";
import Footer1 from "../../Layout/Footer/Footer1";
import mustordOil from "../../Assest/Mockup/5kg-bottle.png";
import mustordOilorganic from "../../Assest/Mockup/mustard-oil1.png";
import Wheat from "../../Assest/Mockup/Atta_5,10,25.png";
import Pasta from "../../Assest/Mockup/pasta_1.png";
import Pasta1 from "../../Assest/Mockup/pasta_2.png";
import Pasta2 from "../../Assest/Mockup/pasta_3.png";
import daliya from "../../Assest/Mockup/Daliya_500.png";
import soya from "../../Assest/Mockup/Soya_Chunks.png";
import Data from "../../data/data";
import { useParams } from "react-router-dom";
function ProductPage() {
  const { id } = useParams();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [filterOpen, setFilterOpen] = useState(false);
  const [productData, setProductData] = useState();

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const data = [
    {
      title: "Organic Musturd Oil",
      img: mustordOil,
      price: 720,
      mrp: 800,
      id: 2,
      size: "5ltr",
      rating: 4.7,
      quantity: 1,
    },
    {
      title: "Whole Wheat",
      img: Wheat,
      price: 410,
      id: 3,
      size: "5kg",
      rating: 4.8,
      mrp: 450,
      quantity: 1,
    },
    {
      title: "Wheat Daliya",
      img: daliya,
      price: 720,
      id: 4,
      size: "5kg",
      rating: 4.5,
      mrp: 750,
      quantity: 1,
    },
    {
      title: "Soya Chunks",
      img: soya,
      price: 320,
      id: 5,
      size: "5kg",
      rating: 4.6,
      mrp: 450,
      quantity: 1,
    },
    {
      title: "Rigatoni Pasta",
      img: Pasta,
      price: 720,
      id: 6,
      size: "5kg",
      rating: 4.9,
      mrp: 850,
      quantity: 1,
    },
    {
      title: "Fussili Pasta",
      img: Pasta1,
      price: 120,
      id: 7,
      size: "1kg",
      rating: 4.9,
      mrp: 150,
      quantity: 1,
    },
    {
      title: "Penne Pasta",
      img: Pasta2,
      price: 120,
      id: 8,
      size: "1kg",
      rating: 4.7,
      mrp: 150,
      quantity: 1,
    },
    {
      title: "Organic Musturd Oil",
      img: mustordOilorganic,
      price: 150,
      id: 9,
      size: "1ltr",
      rating: 4.7,
      mrp: 180,
      quantity: 1,
    },
  ];
  const dataHandle = (id) => {
    const product_data = Data.filter((item) => item.category === id);
    setProductData(product_data.length>0 && product_data);
    console.log(productData);
  };
  useEffect(() => {
    dataHandle(id);
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="product_breadcrums">
        <div className="product_breadcrums_left">
          <NavigationButtons currentPage="Products" />
        </div>
        <div className="product_breadcrums_right">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Short By</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Popularity</MenuItem>
              <MenuItem value={10}>High To Low</MenuItem>
              <MenuItem value={20}>Low To High</MenuItem>
              <MenuItem value={30}>Newest First</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="productpage-mobile-filter-button">
        <button onClick={handleFilterToggle}>
          Filter
          <div className="productpage-mobile-filter-button-arrow">
            {filterOpen ? <ArrowDropUpRounded /> : <ArrowDropDownRounded />}
          </div>
        </button>
      </div>
      <div className="productpage">
        <div
          className={`productpage_left ${
            filterOpen ? "filterOpen" : "filterClose"
          }`}
        >
          <Filter />
        </div>
        <div className="productpage_right">
          {productData?.map((item) => (
            <ProductCard
              title={item?.title}
              image={item?.img[0]}
              price={item?.price}
              mrp={item?.mrp}
              size={item?.size}
              rating={item?.rating}
              category={item?.category}
              item={item}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
      <div className="product_pagination">
        <CustomPagination />
      </div>
      <Footer1 />
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
    </>
  );
}

export default ProductPage;
