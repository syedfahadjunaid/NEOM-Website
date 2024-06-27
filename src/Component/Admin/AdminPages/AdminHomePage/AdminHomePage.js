import React, { useState } from "react";
import "./AdminHomePage.css";
import AdminSideBar from "../../AdminLayout/AdminSideBar/AdminSideBar";
import AdminNav from "../../AdminLayout/AdminNav/AdminNav";
import AdminOrderPage from "../AdminOrderPage/AdminOrderPage";
import AdminCategoryPage from "../AdminCategoryPage/AdminCategoryPage";
import AdminProductPage from "../AdminProductPage/AdminProductPage";
import AdminPagesManage from "../AdminPagesManage/AdminPagesManage";
import AdminAboutsUsPage from "../AdminAboutsUsPage/AdminAboutsUsPage";
import AdminContactPage from "../AdminContactPage/AdminContactPage";
import AdminCoupanPage from "../AdminCoupanPage/AdminCoupanPage";
import AdminWebSiteHeader from "../AdminWebSiteHeader/AdminWebSiteHeader";
import AdminFooterPage from "../AdminFooterPage/AdminFooterPage";
import AdminWebsiteBanner from "../AdminWebsiteBanner/AdminWebsiteBanner";
import AdminInformationCard from "../AdminInformationCard/AdminInformationCard";
import AdminHomePageAboutSection from "../AdminHomePageAboutSection/AdminHomePageAboutSection";
import AdminProductAds from "../AdminProductAds/AdminProductAds";
import AdminBlogPage from "../AdminBlogPage/AdminBlogPage";
import AdminUserTablePage from "../AdminUserTablePage/AdminUserTablePage";
import AdminGeneralSettings from "../AdminGeneralSettings/AdminGeneralSettings";
import AdminPaymentPage from "../AdminPaymentPage/AdminPaymentPage";
import AdminGalleryPage from "../AdminGalleryPage/AdminGalleryPage";
import AdminProfilePage from "../AdminProfilePage/AdminProfilePage";
import AdminDashboardpage from "../AdminDashboardpage/AdminDashboardpage";
import AdminReviewPage from "../AdminReviewPage/AdminReviewPage";
function AdminHomePage() {
  const [dashBoard, setDashBoard] = useState(true);
  const [order, setOrder] = useState(false);
  const [categorie, setCategorie] = useState(false);
  const [product, setProduct] = useState(false);
  const [page, setPage] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [coupan, setCoupan] = useState(false);
  const [websiteHeader, setWebsiteHeader] = useState(false);
  const [footer, setFooter] = useState(false);
  const [websiteBanner, setWebsiteBanner] = useState(false);
  const [informationCard, setInformationCard] = useState(false);
  const [homePageAbout, setHomePageAbout] = useState(false);
  const [productAds, setProductAds] = useState(false);
  const [blog, setBlog] = useState(false);
  const [user, setUser] = useState(false);
  const [generalSystem, setGeneralSystem] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [profilepage, setProfilepage] = useState(false);
  const [review, setReview] = useState(false);
  return (
    <div className="adminhomepage">
      <div className="adminhomepage_left">
        <AdminSideBar
        review={review}
        setReview={setReview}
          dashBoard={dashBoard}
          setDashBoard={setDashBoard}
          setProfilepage={setProfilepage}
          gallery={gallery}
          setGallery={setGallery}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          generalSystem={generalSystem}
          setGeneralSystem={setGeneralSystem}
          user={user}
          setUser={setUser}
          blog={blog}
          setBlog={setBlog}
          productAds={productAds}
          setProductAds={setProductAds}
          homePageAbout={homePageAbout}
          setHomePageAbout={setHomePageAbout}
          informationCard={informationCard}
          setInformationCard={setInformationCard}
          websiteBanner={websiteBanner}
          setWebsiteBanner={setWebsiteBanner}
          footer={footer}
          setFooter={setFooter}
          websiteHeader={websiteHeader}
          setWebsiteHeader={setWebsiteHeader}
          coupan={coupan}
          setCoupan={setCoupan}
          contact={contact}
          setContact={setContact}
          about={about}
          setAbout={setAbout}
          page={page}
          setPage={setPage}
          order={order}
          setOrder={setOrder}
          setCategorie={setCategorie}
          categorie={categorie}
          product={product}
          setProduct={setProduct}
        />
      </div>
      <div className="adminhomepage_right">
        <AdminNav
        setReview={setReview}
          setProfilepage={setProfilepage}
          setGallery={setGallery}
          setPaymentMethod={setPaymentMethod}
          setGeneralSystem={setGeneralSystem}
          setUser={setUser}
          setBlog={setBlog}
          setProductAds={setProductAds}
          setHomePageAbout={setHomePageAbout}
          setInformationCard={setInformationCard}
          setWebsiteBanner={setWebsiteBanner}
          setFooter={setFooter}
          setWebsiteHeader={setWebsiteHeader}
          setCoupan={setCoupan}
          setContact={setContact}
          setAbout={setAbout}
          setPage={setPage}
          setOrder={setOrder}
          setCategorie={setCategorie}
          setProduct={setProduct}
          setDashBoard={setDashBoard}
        />
        {dashBoard && <AdminDashboardpage />}
        {order && <AdminOrderPage />}
        {categorie && <AdminCategoryPage />}
        {product && <AdminProductPage />}
        {page && <AdminPagesManage />}
        {about && <AdminAboutsUsPage />}
        {contact && <AdminContactPage />}
        {coupan && <AdminCoupanPage />}
        {websiteHeader && <AdminWebSiteHeader />}
        {footer && <AdminFooterPage />}
        {websiteBanner && <AdminWebsiteBanner />}
        {informationCard && <AdminInformationCard />}
        {homePageAbout && <AdminHomePageAboutSection />}
        {productAds && <AdminProductAds />}
        {blog && <AdminBlogPage />}
        {user && <AdminUserTablePage />}
        {generalSystem && <AdminGeneralSettings />}
        {paymentMethod && <AdminPaymentPage />}
        {gallery && <AdminGalleryPage />}
        {profilepage && <AdminProfilePage />}
        {review && <AdminReviewPage />}
      </div>
    </div>
  );
}

export default AdminHomePage;
