import React from "react";
import "./OrderSuccessPage.css";
import { Link } from "react-router-dom";
import { ShoppingBag } from "@mui/icons-material";
function OrderSuccessPage() {
  return (
    <div className="ordersuccesspage">
      <div className="ordersuccesspage_top">
        <h3>Thanks for your order !</h3>
        <p>The order confirmation has been sent to email.@com</p>
        <p> Order ID # 45454555</p>
      </div>
      <div className="ordersuccesspage_middle">
        <span>
          <p>Subtotal </p>
          <p>₹ 16,000</p>
        </span>{" "}
        <span>
          <p>Applied Discount code </p>
          <p>20%OFF</p>
        </span>{" "}
        <span>
          <p>Discount </p>
          <p>-₹ 400 (20% OFF)</p>
        </span>{" "}
        <span>
          <p>Shipment cost </p>
          <p>₹80</p>
        </span>
        <span className="ordersuccesspage_middle_grandtotal">
          <p>Grand Total</p>
          <p>₹16,090</p>
        </span>
      </div>
      <div className="ordersuccesspage_bottom">
        <Link to="/">
          <p>Continue Shopping </p>
          <ShoppingBag />
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
