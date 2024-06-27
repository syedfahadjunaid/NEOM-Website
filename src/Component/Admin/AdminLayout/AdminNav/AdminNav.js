import React from "react";
import "./AdminNav.css";
import { NotificationAdd, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
function AdminNav({
  setReview,
  setDashBoard,
  setProfilepage,
  setGallery,
  setPaymentMethod,
  setGeneralSystem,
  setUser,
  setBlog,
  setProductAds,
  setHomePageAbout,
  setInformationCard,
  setWebsiteBanner,
  setFooter,
  setWebsiteHeader,
  setCoupan,
  setContact,
  setAbout,
  setOrder,
  setCategorie,
  setProduct,
  setPage,
}) {
  const profilehandle = () => {
    setProfilepage(true);
    setGallery(false);
    setPaymentMethod(false);
    setGeneralSystem(false);
    setUser(false);
    setBlog(false);
    setProductAds(false);
    setHomePageAbout(false);
    setInformationCard(false);
    setWebsiteBanner(false);
    setFooter(false);
    setWebsiteHeader(false);
    setCoupan(false);
    setContact(false);
    setAbout(false);
    setOrder(false);
    setCategorie(false);
    setProduct(false);
    setPage(false);
    setDashBoard(false)
    setReview(false)
  };
  return (
    <div className="adminnav">
      <div className="adminnav_left">
        <span>
          <input type="text" placeholder="Search  anything here..." />
          <Search />
        </span>
      </div>
      <div className="adminnav_right">
        <NotificationAdd className="adminnav_right_icon" />
        <div className="adminnav_right_icon_div">
          <Avatar className="adminnav_right_icon" />
          <span>
            <p onClick={profilehandle}>My Profile</p>
            <p>Logout</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
