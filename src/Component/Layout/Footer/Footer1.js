import React from "react";
import "./Footer1.css";
import footerLogo from "../../Assest/Neom-logo 1.png";
import { Email, Facebook, Instagram, LocationOn, Phone } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
function Footer1() {
  const history = useNavigate();
  return (
    <div className="footer1">
      <div className="footer1_top">
        <img src={footerLogo} alt="footer" />
        <p>
          Swaad Agro Industries Pvt. Ltd stands as a trailblazer in the
          production and promotion of agro-products, particularly excelling in
          the production of premium wheat-based goods. We take the forefront in
          the manufacture and promotion of a variety of wheat products,
          including 100% Sharbati MP Wheat Flour (Atta), Pasta (100% Sooji),
          Daliya (Broken Wheat) and Soya Chunks (Soya Flour) and Organic Mustard
          Oil, ensuring top-notch quality.
        </p>
      </div>
      <div className="footer1_middle">
        <div className="footer1_middle_first">
          <h6>Contact Us</h6>
          <span>
            <LocationOn />
            <p>
              Head Office SWAD AGRO INDUSTRIES PVT LTD B K COMPLEX , Narona,
              Mohaan Road , Near Shakuntala University 226017
            </p>
          </span>
          <span>
            <Email />
            <Link
              to="mailto:info@swaadagro.com"
              target="_blank"
              className="footer1_middle_first_link"
            >
              <p>info@swaadagro.com</p>
            </Link>
          </span> 
          <span>
            <Phone />
            <Link
              to="tel:18001216400"
              className="footer1_middle_first_link"
            >
              <p>1800-121-6400</p>
            </Link>
          </span>
        </div>
        <div className="footer1_middle_second">
          <h6>Product</h6>
          <p onClick={() => history(`/product/Neom Wheat`)}>Neam Atta</p>
          <p onClick={() => history("/product/Neom Soya Chunks")}>Soya chunks</p>
          <p onClick={() => history("/product/Neom Organic Mustard Oil")}>Mustard Oil</p>
          <p onClick={() => history("/product/Neom Daliya")}>Daliya</p>
          <p onClick={() => history("/product/Neom Pasta")}>Pasta</p>
        </div>
        <div className="footer1_middle_third">
          <h6>Company</h6>
          <p onClick={() => history("/")}>Home</p>
          <p onClick={() => history("/aboutus")}>About Us</p>
          <p onClick={() => history("/contact")}>Contact us</p>
          <p onClick={() => history("/gallery")}>Gallery</p>
        </div>
        <div className="footer1_middle_fourth">
          <h6>Let's do it!</h6>
          <span>
            <Link
              to="https://www.facebook.com/NeomIndiaPvtLtd"
              target="_blank"
              className="footer1_middle_fourth_link"
            >
              <Facebook
                className="footer1_middle_fourth_icon"
                style={{ fontSize: "35px" }}
              />
            </Link>
            <Link
              to="https://www.instagram.com/neom_india/?hl=en"
              target="_blank"
              className="footer1_middle_fourth_link"
            >
              <Instagram
                className="footer1_middle_fourth_icon"
                style={{ fontSize: "35px" }}
              />
            </Link>

            {/* <YouTube className="footer1_middle_fourth_icon" />
            <Twitter className="footer1_middle_fourth_icon" />
            <LinkedIn className="footer1_middle_fourth_icon" /> */}
          </span>
          <h6>Subscribe</h6>
          <form>
            <span>
              <input
                type="text"
                placeholder="Email"
                style={{ paddingLeft: "10px" }}
              />
            </span>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer1_bottom">
        <div className="footer1_bottom_left">
          <p onClick={() => history("/privacypolicy")}>Privacy Policy</p>
          <p onClick={() => history("/termsofuse")}>Terms of Use</p>
          <p onClick={() => history("/salesandrefunds")}>Sales and Refunds</p>
        </div>
        <div className="footer1_bottom_right">
          <p>© 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
