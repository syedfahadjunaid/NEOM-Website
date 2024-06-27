import React, { useState } from "react";
import "./LoginPage.css";
import ForgotPasswordModal from "../../ForgotPasswordModal/ForgotPasswordModal";
import LoginImage from "../../Assest/Login-Page-Image.png";
import GoogleImage from "../../Assest/Google.svg";
import FbImage from "../../Assest/fb.svg";
import { Link } from "react-router-dom";
import * as colors from "../../Colors";

function LoginPage() {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const handleForgotPasswordClick = () => {
    setForgotPasswordOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
  };

  return (
    <div className="Login-Page">
      <div className="Login-Content">
        <div className="Login-Form-Content">
          <div className="Login-Heading">
            <h1 style={{ color: colors.headingColor }}>Welcome back 😉</h1>
          </div>
          <div className="Login-Text" style={{ color: colors.textColor }}>
            <span>
              To keep connnected with us please login with your personal
              information by <br></br> email address and password
            </span>
          </div>
          <div className="Login-Form">
            <div className="Login-Form-Head">
              <h3 style={{ color: colors.headingColor }}>Sign in</h3>
            </div>
            <div className="Login-Email">
              <input
                style={{ color: colors.formTextColor }}
                type="email"
                placeholder="Email Address *"
              />
            </div>
            <div className="Login-Password">
              <input
                style={{ color: colors.formTextColor }}
                type="password"
                placeholder="Password *"
              />
            </div>
            <div className="Login-Button-Section">
              <button
                style={{
                  backgroundColor: colors.buttonColorPrimary,
                  color: colors.buttonTextColor,
                }}
                className="Login-Button"
              >
                Login →
              </button>
              <div
                style={{ color: colors.headingColor }}
                className="Login-Button-SideText"
              >
                <span onClick={handleForgotPasswordClick}>
                  Forgot your password?
                </span>
              </div>
            </div>
            <div className="Login-CreateAccount">
              <Link to="/signup">
                <button
                  className="Login-CreateAccount-Button"
                  style={{
                    backgroundColor: colors.buttonColorSecondary,
                    color: colors.buttonTextColor,
                  }}
                >
                  CREATE NEW ACCOUNT
                </button>
              </Link>
            </div>
            <div className="Login-Join-Options">
              <span style={{ color: colors.formTextColor }}>
                Or you can join with
              </span>
              <div className="Login-Join-Icons">
                <div className="Login-Google-Icon">
                  <img src={GoogleImage} alt="Google" />
                </div>
                <div className="Login-Facebook-Icon">
                  <img src={FbImage} alt="Facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Login-SideImage-Container">
          <img className="Login-SideImage" src={LoginImage} alt="Artwork" />
        </div>
      </div>
      <ForgotPasswordModal
        open={forgotPasswordOpen}
        onClose={handleForgotPasswordClose}
      />
    </div>
  );
}

export default LoginPage;
