import React from "react";
import "./AdminLogin.css";
import img from "../../AdminAsset/AdminImages/6184159_3094350 1.png";
import { ArrowForward } from "@mui/icons-material";
function AdminLogin({setLogin}) {
    const loginHandle=(e)=>{
e.preventDefault()
setLogin(true)
    }
  return (
    <div className="adminlogin">
      <div className="adminlogin_left">
        <img src={img} alt="logo" />
      </div>
      <div className="adminlogin_right">
        <form>
          <p className="adminlogin_right-para1">Welcome 😉 </p>
          <p className="adminlogin_right-para2">
            To keep connnected with us please login with your personal
            information by email address and password{" "}
          </p>
          <p className="adminlogin_right-para3">Sign In</p>
          <span>
            <input type="text" placeholder="Email Address *" />
          </span>
          <span>
            <input type="password" placeholder="Password *" />
          </span>
          <button onClick={loginHandle}>Login <ArrowForward style={{marginLeft:'5px'}}/></button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
