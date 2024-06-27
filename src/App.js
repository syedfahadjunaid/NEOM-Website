import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Component/Pages/Homepage/Homepage";
import ProductPage from "./Component/Pages/ProductPage/ProductPage";
import SingleProductPage from "./Component/Pages/SingleProductPage/SingleProductPage";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import UserProfile from "./Component/Pages/UserProfile/UserProfile";
import LoginPage from "./Component/Pages/LoginPage/LoginPage";
import SignupPage from "./Component/Pages/SignupPage/SignupPage";
import AboutUs from "./Component/Pages/AboutUs/AboutUs";
import Gallery from "./Component/Pages/Gallery/Gallery";
import PrivacyPolicy from "./Component/Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./Component/Pages/TermsOfUse/TermsOfUse";
import SalesAndRefunds from "./Component/Pages/SalesAndRefunds/SalesAndRefunds";
import Legal from "./Component/Pages/Legal/Legal";
import Cart from "./Component/Pages/Cart/Cart";
import AddressConfirmation from "./Component/Pages/Cart-AddressConfirmation/AddressConfirmation";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import Admin from "./Component/Admin/admin";
import Error404 from './Component/Pages/ErrorPage/Error404'
import OrderSuccessPage from "./Component/Pages/OrderSuccessPage/OrderSuccessPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/singleproduct/:id" element={<SingleProductPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/salesandrefunds" element={<SalesAndRefunds />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/orderconfirm" element={<OrderSuccessPage />} />
     
          <Route
            path="/addressconfirmation"
            element={<AddressConfirmation />}
          />
               <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
