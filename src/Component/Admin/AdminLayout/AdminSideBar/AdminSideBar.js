import React, { useState } from "react";
import "./AdminSideBar.css";
import img from "../../AdminAsset/AdminImages/Neom-logo 1.png";
import {
  Article,
  CallToAction,
  Collections,
  Dashboard,
  Dvr,
  Info,
  KeyboardArrowDown,
  Message,
  Person,
  PriceChange,
  ProductionQuantityLimits,
  RateReview,
  Settings,
  ShoppingBag,
  WebAsset,
} from "@mui/icons-material";
function AdminSideBar({
  review,
  setReview,
  dashBoard,
  setDashBoard,
  setProfilepage,
  setGallery,
  gallery,
  setPaymentMethod,
  paymentMethod,
  generalSystem,
  setGeneralSystem,
  user,
  setUser,
  blog,
  setBlog,
  setProductAds,
  productAds,
  setHomePageAbout,
  homePageAbout,
  setInformationCard,
  informationCard,
  setWebsiteBanner,
  websiteBanner,
  footer,
  setFooter,
  websiteHeader,
  setWebsiteHeader,
  coupan,
  setCoupan,
  contact,
  setContact,
  about,
  setAbout,
  order,
  setOrder,
  categorie,
  setCategorie,
  setProduct,
  product,
  page,
  setPage,
}) {
  const selecthandle = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Order") {
      setOrder(true);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === "All Categories") {
      setOrder(false);
      setCategorie(true);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === "All Products") {
      setOrder(false);
      setCategorie(false);
      setProduct(true);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Page's`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(true);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `About Us`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(true);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Contact`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(true);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Coupons`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(true);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Website Header`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(true);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Footer`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(true);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Website Banner`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(true);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Information Cards`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(true);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Information Cards`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(true);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `About Home`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(true);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Product Ads`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(true);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Blog's`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(true);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `User`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(true);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `General Settings`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(true);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Payment Methods Settings`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(true);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Gallery`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(true);
      setProfilepage(false);
      setDashBoard(false);
      setReview(false);
    }
    if (e.target.textContent === `Dashboard`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(true);
      setReview(false);
    }
     if (e.target.textContent === `Review's`) {
      setOrder(false);
      setCategorie(false);
      setProduct(false);
      setPage(false);
      setAbout(false);
      setContact(false);
      setCoupan(false);
      setWebsiteHeader(false);
      setFooter(false);
      setWebsiteBanner(false);
      setInformationCard(false);
      setHomePageAbout(false);
      setProductAds(false);
      setBlog(false);
      setUser(false);
      setGeneralSystem(false);
      setPaymentMethod(false);
      setGallery(false);
      setProfilepage(false);
      setDashBoard(false);
      setReview(true);
    }
  };
  const [systemSetting, setSystemSetting] = useState(false);
  const [appearance, setAppearance] = useState(false);
  const [productSideBar, setProductSideBar] = useState(false);
  const [homePage, setHomePage] = useState(false);
  return (
    <div className="adminsidebar">
      <div className="adminsidebar_logo">
        <img src={img} alt="logo" />
        <p>Admin Panel</p>
      </div>
      <div className="adminsidebar_menu">
        <span
          onClick={selecthandle}
          className={dashBoard ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <Dashboard />
          <p>Dashboard</p>
        </span>
        <span
          onClick={selecthandle}
          className={order ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <ProductionQuantityLimits />
          <p>Order</p>
        </span>
        <span
          onClick={() => setProductSideBar(!productSideBar)}
          className={
            productSideBar ? "adminSideActive1 " : "adminsidebar_menu_span"
          }
        >
          <ShoppingBag />
          <p>
            Products{" "}
            <KeyboardArrowDown
              className={
                productSideBar
                  ? "adminsidebar_menu_icon activearrow"
                  : "adminsidebar_menu_icon notactivearrow"
              }
            />
          </p>
        </span>
        {productSideBar && (
          <div
            className={
              productSideBar
                ? "adminsidebar_menu_div showtab"
                : "adminsidebar_menu_div"
            }
          >
            <p
              onClick={selecthandle}
              className={categorie ? "adminSideActive1" : ""}
            >
              All Categories
            </p>
            <p
              onClick={selecthandle}
              className={product ? "adminSideActive1" : ""}
            >
              All Products
            </p>
          </div>
        )}
        <span
          onClick={selecthandle}
          className={page ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <Article />
          <p>Page's</p>
        </span>
        <span
          onClick={selecthandle}
          className={about ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <Info />
          <p>About Us</p>
        </span>
        <span
          onClick={selecthandle}
          className={contact ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <Message />
          <p>Contact</p>
        </span>
        <span
          onClick={selecthandle}
          className={coupan ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <PriceChange />
          <p>Coupons</p>
        </span>
        <span
          onClick={selecthandle}
          className={gallery ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <Collections />
          <p>Gallery</p>
        </span>
        <span
          onClick={() => setAppearance(!appearance)}
          className={
            appearance ? "adminSideActive1 " : "adminsidebar_menu_span"
          }
        >
          <Dvr />
          <p>
            Appearance{" "}
            <KeyboardArrowDown
              className={
                appearance
                  ? "adminsidebar_menu_icon activearrow"
                  : "adminsidebar_menu_icon notactivearrow"
              }
            />
          </p>
        </span>
        {appearance && (
          <div className="adminsidebar_menu_div">
            <p
              onClick={() => setHomePage(!homePage)}
              className={homePage ? "adminSideActive1" : ""}
            >
              Home page{" "}
              <KeyboardArrowDown
                className={
                  homePage
                    ? "adminsidebar_menu_icon activearrow"
                    : "adminsidebar_menu_icon notactivearrow"
                }
              />
            </p>
            {homePage && (
              <span>
                <p
                  onClick={selecthandle}
                  className={websiteBanner ? "adminSideActive1" : ""}
                >
                  Website Banner
                </p>
                <p
                  onClick={selecthandle}
                  className={informationCard ? "adminSideActive1" : ""}
                >
                  Information Cards
                </p>
                <p
                  onClick={selecthandle}
                  className={homePageAbout ? "adminSideActive1" : ""}
                >
                  About Home
                </p>
                <p
                  onClick={selecthandle}
                  className={productAds ? "adminSideActive1" : ""}
                >
                  Product Ads
                </p>
              </span>
            )}
          </div>
        )}
        <span
          onClick={selecthandle}
          className={
            websiteHeader ? "adminSideActive" : "adminsidebar_menu_span"
          }
        >
          <WebAsset />
          <p>Website Header</p>
        </span>
        <span
          onClick={selecthandle}
          className={footer ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <CallToAction />
          <p>Footer</p>
        </span>
        {/* <span onClick={selecthandle} className={blog ? "adminSideActive" : ""}>
          <ChromeReaderMode />
          <p>Blog's</p>
        </span> */}
        <span
          onClick={selecthandle}
          className={user ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <Person />
          <p>User</p>
        </span>
        <span
          onClick={selecthandle}
          className={review ? "adminSideActive" : "adminsidebar_menu_span"}
        >
          <RateReview />
          <p>Review's</p>
        </span>
        <span
          onClick={() => setSystemSetting(!systemSetting)}
          className={
            systemSetting ? "adminSideActive1 " : "adminsidebar_menu_span"
          }
        >
          <Settings />
          <p>
            System Settings{" "}
            <KeyboardArrowDown
              className={
                systemSetting
                  ? "adminsidebar_menu_icon activearrow"
                  : "adminsidebar_menu_icon notactivearrow"
              }
            />
          </p>
        </span>
        {systemSetting && (
          <div className="adminsidebar_menu_div">
            <p
              onClick={selecthandle}
              className={generalSystem ? "adminSideActive1" : ""}
            >
              General Settings
            </p>
            <p
              onClick={selecthandle}
              className={paymentMethod ? "adminSideActive1" : ""}
            >
              Payment Methods Settings
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminSideBar;
