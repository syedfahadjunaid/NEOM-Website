import React from "react";
import "./ProductCard.css";
import img from "../../Assest/8674418_23 1.png";
import { Rating,  Stack } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slice/CartSlice";
function ProductCard({ title, size, price, image, id, rating, mrp, item,setOpen ,category}) {
  
  const history = useNavigate();
  const productData = {
    id: 1,
    name: "Neom Atta",
    price: 250,
    quantity: 1,
    image: img,
    size: "5kg",
  };
  const dispatch = useDispatch();
  const addToCartHandle = () => {
 
    dispatch(addToCart(item?item:productData));
   setOpen(true)

  };
  const buyHandle = () => {
    dispatch(addToCart(item?item:productData));
    history("/cart");
  };
  return (
    <div className="productcard">
      <div
        className="productcard_img"
        onClick={() => history(`/singleproduct/${title}`)}
      >
        <img src={image ? image : img} alt="product img" />
      </div>
      <div className="productcard_details">
        <p onClick={() => history(`/singleproduct/${title}`)}>
          {title ? title : "Snack -- product"}
        </p>
        <p
          onClick={() => history(`/singleproduct/${title}`)}
          className="productcard_details_para"
        >
          ({size ? size : "100gram"})
        </p>
        <span onClick={() => history(`/singleproduct/${title}`)}>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={rating ? rating : "4.5"}
              precision={0.5}
              readOnly
              className="productcard_details_rating"
            />
          </Stack>
          <p>{rating ? rating : "4.3"}</p>
        </span>
        <span
          onClick={() => history(`/singleproduct/${title}`)}
          className="productcard_details_price"
        >
          <strong>₹{price ? price : "500"}</strong>
          <s>₹{mrp ? mrp : "700"}</s>
        </span>
        <span className="productcard_details_buy">
          <button onClick={buyHandle}>Buy Now</button>
          <p onClick={addToCartHandle}>
            <ShoppingBag className="productcard_details_buy_icon" />
          </p>
        </span>
      </div>
     
    </div>
  );
}

export default ProductCard;
