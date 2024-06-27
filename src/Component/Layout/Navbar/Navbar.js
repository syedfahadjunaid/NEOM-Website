import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../Assest/Neom-logo 1.png";
import { ShoppingCartCheckout, Menu, Close, KeyboardArrowDown } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import atta from "../../Assest/navbar/atta.png";
import oil from "../../Assest/navbar/oil.png";
import soya from "../../Assest/navbar/soya.png";
import dalia from "../../Assest/navbar/daliya.png";
import pasta from "../../Assest/navbar/pasta.png";
import { useSelector } from "react-redux";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prodMenuOpen, setProdMenuOpen] = useState(false);

  const handleProdToggle = () => {
    setProdMenuOpen(!prodMenuOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const history = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  let activeStyle = {
    color: "#e94a53",
    fontweight: "700",
  };
  const { cart } = useSelector((state) => state.allCart);
  return (
    <nav className={`main-nav ${scrolled ? "nav_scrolled" : ""}`}>
      <div className="nav-logo">
        <NavLink to="/">
          <img src={logo} alt="logo" className="nav-logo-img"/>
        </NavLink>
      </div>
      <div className="nav-mobile-right">
        <span className="footer_cart">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/cart"
          >
            <span className="cart_count">
              <ShoppingCartCheckout />

              <p>Cart</p>
              {cart?.length > 0 ? (
                <p className="cart_count_count">{cart?.length}</p>
              ) : (
                ""
              )}
            </span>
          </NavLink>
        </span>
        <div className="nav-menu-icon" onClick={handleMenuToggle}>
          <Menu />
        </div>
      </div>
      <ul className={` nav-menu ${menuOpen ? "menuOpen" : "menuClose"}`}>
        <div className="menu-close-icon" onClick={handleMenuToggle}>
          {" "}
          <Close style={{ fontSize: "48px" }} />
        </div>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          <li onClick={handleMenuToggle}>Home</li>
        </NavLink>
        <li onClick={handleProdToggle} className="product_nav">
         <p className="product_nav_para"> Product <KeyboardArrowDown/></p>
          <div
            className={`product_nav_div ${
              prodMenuOpen ? "prodMenuOpen" : "prodMenuClose"
            }`}
          >
            <div className="product_nav_div_arrow"></div>
            <ul>
              <li onClick={() => history(`/product/Neom Wheat`)}>
                <div className="product_nav_div_sub_div">
                  <img src={atta} alt="category" />
                  <span>
                    <p onClick={handleMenuToggle}>Neom Whole Wheat</p>
                   
                  </span>
                </div>
              </li>
              <li onClick={() => history("/product/Neom Organic Mustard Oil")}>
                <div className="product_nav_div_sub_div">
                  <img src={oil} alt="category" />
                  <span>
                    <p onClick={handleMenuToggle}>Neom Organic Musturd Oil</p>
                  </span>
                </div>
              </li>
              <li onClick={() => history("/product/Neom Daliya")}>
                <div className="product_nav_div_sub_div">
                  <img src={dalia} alt="category" />
                  <span>
                    <p onClick={handleMenuToggle}>Neom Wheat Daliya</p>
                  </span>
                </div>
              </li>
              <li onClick={() => history("/product/Neom Soya Chunks")}>
                <div className="product_nav_div_sub_div">
                  <img src={soya} alt="category" />
                  <span>
                    <p onClick={handleMenuToggle}>Neom Soya Chunks</p>
                  </span>
                </div>
              </li>
               <li onClick={() => history("/product/Neom Pasta")}>
                <div className="product_nav_div_sub_div">
                  <img src={pasta} alt="category" />
                  <span>
                    <p onClick={handleMenuToggle} >Neom Pasta</p>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/aboutus"
        >
          <li onClick={handleMenuToggle}>About Us</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/gallery"
        >
          <li onClick={handleMenuToggle}>Gallery</li>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/contact"
        >
          <li onClick={handleMenuToggle}>Contact Us</li>
        </NavLink>
        <li className="nav-singin-li" onClick={handleMenuToggle}>
          <span className="nav-signin-mobile">
            <NavLink to="/signin">
              <button className="Signin-Button">Sign In</button>
            </NavLink>
          </span>
        </li>
      </ul>
      <div className="nav-cart-footer">
        <span className="footer_cart">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/cart"
          >
            <span className="cart_count">
              <ShoppingCartCheckout />

              <p>Cart</p>
              {cart?.length > 0 ? (
                <p className="cart_count_count">{cart?.length}</p>
              ) : (
                ""
              )}
            </span>
          </NavLink>
        </span>
        <span className="nav-signin">
          <NavLink to="/signin">
            <button className="Signin-Button">Sign In</button>
          </NavLink>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
