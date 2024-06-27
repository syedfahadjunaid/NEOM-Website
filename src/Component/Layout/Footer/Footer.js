import React from "react";
import "./Footer.css";
import logo from "../../Assest/Neom-logo 1.png";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Place,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_first">
          <img src={logo} alt="logo" />
          <p>
            The need for timely, accurate info is vital. The internet provides
            access to news, research, etc. However, it's important to make sure
            the source is reliable and the info is up-to-date. Read carefully
            and research the website to ensure accuracy.
          </p>
        </div>
        <div className="footer-mid">
          <div className="footer_second">
            <ul>
              <li>
                <NavLink to="/aboutus">
                  <p>About Us</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <p>Contact Us</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/help">
                  <p>Help</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_third">
            <ul>
              <li>
                <NavLink to="/">
                  {" "}
                  <p>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/product">
                  <p>Product</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery">
                  <p>Gallery</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_fourth">
          <span>
            <Place style={{ color: "#F52E26", fontSize: "30px" }} />
            <p>ABC Company, 123 East, 17th Street, St. louis 10001</p>
          </span>
          <span>
            <Phone style={{ color: "#F52E26", fontSize: "30px" }} />
            <p>(123) 456-7890</p>
          </span>
          <span>
            <Email style={{ color: "#F52E26", fontSize: "30px" }} />
            <p>Nemesis@gmail.com</p>
          </span>
        </div>
      </div>
      <div className="footer_social_media">
        <div className="footer_social_media_left">
          <p>Social Media</p>
          <span>
            <Facebook
              style={{ color: "#F52E26", fontSize: "25px" }}
              className="footer_social_media_left_icon"
            />
            <Twitter
              style={{ color: "#F52E26", fontSize: "25px" }}
              className="footer_social_media_left_icon"
            />
            <LinkedIn
              style={{ color: "#F52E26", fontSize: "25px" }}
              className="footer_social_media_left_icon"
            />
            <YouTube
              style={{ color: "#F52E26", fontSize: "25px" }}
              className="footer_social_media_left_icon"
            />
            <Instagram
              style={{ color: "#F52E26", fontSize: "25px" }}
              className="footer_social_media_left_icon"
            />
          </span>
        </div>
        <div className="footer_social_media_right">
          <div className="footer_social_media_subSection">
            <NavLink to="/privacypolicy">
              <p>Privacy Policy</p>
            </NavLink>
            <NavLink to="/termsofuse">
              <p>Terms of Use</p>
            </NavLink>
          </div>
          <div className="footer_social_media_subSection">
            <NavLink to="/salesandrefunds">
              <p>Sales and Refunds</p>
            </NavLink>
            <NavLink to="/legal">
              <p>Legal</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>Copyright © 2022 • ABC Company.</p>
      </div>
    </footer>
  );
}

export default Footer;
