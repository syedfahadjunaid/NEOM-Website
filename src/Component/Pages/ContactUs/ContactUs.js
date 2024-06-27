import React from "react";
import "./ContactUs.css";
import { useForm } from "react-hook-form";
import LocationVector from "../../Assest/ContactUs-Location-Vector.svg";
import CallVector from "../../Assest/ContactUs-Call-Vector.svg";
import MailVector from "../../Assest/ContactUs-Mail-Vector.svg";
import BackDropImage from "../../Assest/ContactUs-Main-Image.png";
import ContactUsArrowImg from "../../Assest/ContactUs-Arrow-Vectoe.png";
import Footer from "../../Layout/Footer/Footer";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer1 from "../../Layout/Footer/Footer1";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <div className="ContactUs-Section">
        <NavigationButtons currentPage="Contact Us" />
        <div className="ContactUs-SubSection">
          <div className="ContactUs-Cards">
            <div className="ContactUs-Cards-Card">
              <div className="ContactUs-Card-Logo">
                <LocationOn style={{ color: "#e4261e", fontSize: "35px" }} />
              </div>
              <div className="ContactUs-Card-Heading">
                <h1>Our Location</h1>
              </div>
              <div className="ContactUs-Card-Text">
                <span>
                  Head Office SWAD AGRO INDUSTRIES PVT LTD B K COMPLEX 226017
                </span>
              </div>
            </div>
            <div className="ContactUs-Cards-Card">
              <div className="ContactUs-Card-Logo">
                <Phone style={{ color: "#e4261e", fontSize: "35px" }} />
              </div>
              <div className="ContactUs-Card-Heading">
                <h1>Contact Us AnyTime</h1>
              </div>
              <div className="ContactUs-Card-Text">
                <span><Link to='tel:18001216400'>1800-121-6400</Link></span>
              </div>
            </div>
            <div className="ContactUs-Cards-Card">
              <div className="ContactUs-Card-Logo">
                <Email style={{ color: "#e4261e", fontSize: "35px" }} />
              </div>
              <div className="ContactUs-Card-Heading">
                <h1>Email Us</h1>
              </div>
              <div className="ContactUs-Card-Text">
                <span>
                  <Link to="mailto:info@swaadagro.com">info@swaadagro.com</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="ContactUs-Image">
            <img src={BackDropImage} alt="gallery" />
          </div>
          <div className="ContactUs-ContactForm-Section">
            <div className="ContactUs-ContactForm-Text">
              <div className="ContactUs-ContactForm-Text-Heading">
                <h1>Contact Information</h1>
              </div>
              <div className="ContactUs-ContactForm-SubText">
                <span>Say something to start a live chat!</span>
              </div>
            </div>
            <div className="ContactUs-ContactForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="ContactUs-ContactForm-Inputs">
                  <div className="ContactUs-ContactForm-Inputs-First-Input">
                    <div className="ContactUs-ContactForm-Input">
                      <label className="ContactUs-ContactForm-Input-Label">
                        Full Name
                      </label>
                      <input
                        type="name"
                        {...register("name", {
                          required: "Name is required",
                          validate: (value) => {
                            if (value.trim() === "") {
                              return "Name should not be empty or spaces only";
                            }
                          },
                        })}
                      />
                      {errors.name && (
                        <span className="ContactUs-Form-Errors">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="ContactUs-ContactForm-Input-Group">
                    <div className="ContactUs-ContactForm-Input">
                      <label className="ContactUs-ContactForm-Input-Label">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <span className="ContactUs-Form-Errors">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="ContactUs-ContactForm-Input">
                      <label className="ContactUs-ContactForm-Input-Label">
                        Phone Number
                      </label>
                      <input
                        type="phone"
                        placeholder="+1 012 3456 789"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^(\+[0-9]{1,3})?[0-9]{6,}$/i,
                            message: "Invalid phone number format",
                          },
                        })}
                      />
                      {errors.phone && (
                        <span className="ContactUs-Form-Errors">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="ContactUs-ContactForm-Inputs-First-Input">
                    <div className="ContactUs-ContactForm-Input">
                      <label className="ContactUs-ContactForm-Input-Label">
                        Message
                      </label>
                      <textarea
                        placeholder="Write your message.."
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 50,
                            message: "Password must be at least 50 characters",
                          },
                        })}
                      ></textarea>
                      {errors.message && (
                        <span className="ContactUs-Form-Errors">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ContactUs-ContactForm-Button-Section">
                  <div className="ContactUs-ContactForm-Button">
                    <button onSubmit={handleSubmit(onSubmit)}>
                      Send Message
                    </button>
                  </div>
                  <div className="ContactUs-ContactForm-ArrowImage">
                    <img src={ContactUsArrowImg} alt="galery"></img>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}

export default ContactUs;
