import React, { useState } from "react";
import "./SingleProductPage.css";
import { Alert, Rating, Snackbar } from "@mui/material";
import { KeyboardArrowDown, LocalMall } from "@mui/icons-material";
import Quantity from "../../Layout/Quantity/Quantity";
import YouMayAlsoLikeSection from "../../Layout/YouMayAlsoLikeSection/YouMayAlsoLikeSection";
import ReviewSection from "../../Layout/ReviewSection/ReviewSection";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slice/CartSlice";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import NavigationButtons from '../../Layout/NavigationButtons/NavigationButtons'
import Footer1 from "../../Layout/Footer/Footer1";
import Data from "../../data/data";
import { useEffect } from "react";
function SingleProductPage() {
  const history = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [highlights, setHighlights] = useState(true);
  const [description, setDescription] = useState(true);
  const [specification, setSpecification] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [price, setPrice] = useState();
  const [mrp, setMrp] = useState();
  const [size, setSize] = useState();
  const [rating, setRating] = useState();
  const [services, setServices] = useState();
  const [highlight, setHighlight] = useState();
  const [descriptions, setDescriptions] = useState();
  const [specifications, setSpecifications] = useState();
  const [productId, setProductId] = useState();
  const [images, setImages] = useState();
  const productData = {
    id: productId ? productId : 1,
    title: title ? title : "Neom Atta",
    price: price ? price : 250,
    mrp: mrp ? mrp : 300,
    quantity: quantity,
    img: images,
    size: "5kg",
  };
  const dispatch = useDispatch();
  const addToCartHandle = () => {
    dispatch(addToCart(productData));
    handleClick();
  };
  const buyHandle = () => {
    dispatch(addToCart(productData));
    history("/cart");
  };
  const [selectedImage, setSelectedImage] = useState(images && images[0]);
  const selectedImageHandle = (e) => {
    setSelectedImage(e.target.src);
  };
  const { id } = useParams();
  const dataHandle = (id) => {
    const product_data = Data.filter((item) => item?.title === (id));
    setTitle(product_data[0]?.title);
    setSubTitle(product_data[0]?.subtitle);
    setPrice(product_data[0]?.price);
    setMrp(product_data[0]?.mrp);
    setSize(product_data[0]?.size);
    setRating(product_data[0]?.rating);
    setServices(product_data[0]?.Services);
    setHighlight(product_data[0]?.Highlights);
    setDescriptions(product_data[0]?.Description);
    setSpecifications(product_data[0]?.Specifications);
    setImages(product_data[0]?.img);
    setProductId(product_data[0]?.id);
    console.log(product_data[0]);
    console.log(images);
  };
  useEffect(() => {
    dataHandle(id);
    console.log(images);
  }, [id, images]);
  return (
    <>
      <Navbar />
      <div className="singleproductpage">
        <NavigationButtons currentPage={title && title}/>
        <div className="singleproductpage_details">
          <div className="singleproductpage_details_left">
            <div className="singleproductpage_details_left_main">
              <img src={images && images[0]} alt="product look" />
            </div>
            <div className="singleproductpage_details_left_all_image">
              <span>
                <img
                  src={images && images[0]}
                  alt="product look"
                  onClick={selectedImageHandle}
                />
              </span>
              <span>
                <img
                  src={images && images[0]}
                  alt="product look"
                  onClick={selectedImageHandle}
                />
              </span>
              <span>
                <img
                  src={images && images[0]}
                  alt="product look"
                  onClick={selectedImageHandle}
                />
              </span>
              <span>
                <img
                  src={images && images[0]}
                  alt="product look"
                  onClick={selectedImageHandle}
                />
              </span>
            </div>
            <div className="singleproductpage_details_left_button">
              <button
                className="singleproductpage_details_left_button_buynow"
                onClick={buyHandle}
              >
                Buy Now
              </button>
              <button
                className="singleproductpage_details_left_button_addtocart"
                onClick={addToCartHandle}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="singleproductpage_details_right">
            <h3>{title ? title : ""}</h3>
            <div className="singleproductpage_details_right_rating">
              <Rating
                name="half-rating-read"
                defaultValue={rating ? rating : 4.6}
                precision={0.5}
                readOnly
              />
              <p>243</p>
              <p>17 Reviews</p>
            </div>
            <div className="singleproductpage_details_right_shortdesc">
              <p>
                {subTitle
                  ? subTitle
                  : ` Neom Atta is made from whole wheat flour, which is a good source
                of fiber and protein. Fiber helps to keep you feeling full and
                satisfied, while protein helps to build and repair muscle
                tissue.`}
              </p>
            </div>
            <div className="singleproductpage_details_right_price">
              <strong>₹ {price}</strong>
              <s>₹ {mrp}</s>
            </div>
            <div className="singleproductpage_details_right_quantity">
              <span>
                <p>Quantity</p>
                <LocalMall />
              </span>
              <div className="singleproductpage_details_right_quantity_quantity">
                <span>15Kg</span>
                <span>10Kg</span>
                <span>5Kg</span>
              </div>
            </div>
            <div className="singleproductpage_counter">
              <Quantity setQuantity={setQuantity} quantity={quantity} />
            </div>
            <div className="singleproductpage_details_right_services">
              <span>
                <p>Services</p>
              </span>
              <div>
                <ul>
                  {services?.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="singleproductpage_details_right_highlight">
              <span onClick={() => setHighlights(!highlights)}>
                <p>Highlights</p>
                <KeyboardArrowDown />
              </span>
              {highlights && (
                <div>
                  <ul>
                    {highlight?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="singleproductpage_details_right_description">
              <span onClick={() => setDescription(!description)}>
                <p>Description</p>
                <KeyboardArrowDown />
              </span>
              {description && (
                <div>
                  <ul>
                    {descriptions?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="singleproductpage_details_right_specfication">
              <span onClick={() => setSpecification(!specification)}>
                <p>Specifications</p>
                <KeyboardArrowDown />
              </span>
              {specification && (
                <div>
                  <ul>
                    {specifications?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <ReviewSection />
        <YouMayAlsoLikeSection />
        <Footer1 />
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            SuccessFully Added To Cart!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default SingleProductPage;
