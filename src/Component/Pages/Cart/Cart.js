import React from "react";
import "./Cart.css";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import CartCard from "./CartCard/CartCard";
import "../Cart/CartCard/CartCard.css";
import CartTallyCard from "./CartTally/CartTallyCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";

function Cart() {
  const { cart } = useSelector((state) => state.allCart);
  const renderedItemsCards = cart.map((item, index) => {
    return (
      <div className="Cart-Card-Container" key={index}>
        <CartCard
          itemId={item.id}
          itemName={item.title}
          itemSize={item.size}
          itemPrice={item.price}
          itemImage={item.img[0]}
          itemQuantity={item.quantity}
          itemMrp={item.mrp}

        />,
      </div>
    );
  });

  return (
    <>
    <Navbar/>
     <div className="Cart-Section">
      <NavigationButtons currentPage="Cart" />
      {cart?.length === 0 ? (
        <div className="cart_empty">
          <p>Your Cart Seem To Be Empty</p>
          <Link to='/'>Home</Link>
          
        </div>
      ) : (
        <div className="Cart-SubSection">
          <div className="Cart-Main-Section">
            <div className="Cart-Products-Section">
              <div className="Cart-Items-Heading">
                <h4>{cart?.length} Items In Cart</h4>
              </div>
              <div className="Cart-Items-List">{renderedItemsCards}</div>
            </div>
            <CartTallyCard />
          </div>
        </div>
      )}
    </div>
    
    </>
   
  );
}

export default Cart;
