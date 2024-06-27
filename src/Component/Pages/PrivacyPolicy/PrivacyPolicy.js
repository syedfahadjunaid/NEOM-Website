import React from "react";
import "./PrivacyPolicy.css";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer1 from "../../Layout/Footer/Footer1";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  const pagesData = {
    description: `Thank you for choosing Neom, a brand by Swaad Agro Industries Pvt. Ltd. This Privacy Policy governs the manner in which we gather, use, uphold, and reveal information obtained from users (referred to as "you" or "users") of www.neomindia.co.in (referred to as "the Website"). This Privacy Policy pertains to the Website as well as all the products and services provided by Swaad Agro Industries Pvt Ltd.`,
    sections: [
      {
        heading: "Information Collection",
        content:
          "We may gather personal identification details from users through various means, including but not limited to, when users browse our Website, sign up on the Website, place orders, subscribe to the newsletter, participate in surveys, complete forms, or engage in other activities, services, features, or resources we provide on our Website. Users may be requested for, as appropriate, their name, email addresses postal address, phone number, and credit card information. We will only collect personal identification information from users if they willingly provide such information to us. Users always have the option to decline providing personally identifiable information, although this might hinder their engagement in certain Website-related activities.",
      },
      {
        heading: "Non-personal Identification Information",
        content:
          "We take security measures to protect your personal information from unauthorized access, use, or disclosure. We employ industry-standard techniques to safeguard the confidentiality and integrity of your data. These measures include encryption, secure storage, and restricted access to authorized personnel only.",
      },
      {
        heading: "Web Browser Cookies",
        content:
          "We may collect non-personal identification information about users each time they interact with our Website. This information may encompass the browser name, computer type, and technical details about users' method of connecting to our Website, such as operating systems and utilized Internet service providers, among other similar data.",
      },
      {
        heading: "Utilization of Collected Information",
        content:
          "Our website may use cookies and similar tracking technologies to enhance your experience and gather information about your behavior on our site. These technologies collect non-personal information such as your IP address, browser type, and pages visited. You can choose to disable cookies through your browser settings, although this may limit certain functionalities of our website.",
      },
      {
        heading: "Safeguarding Your Information",
        content:
          "Our website may contain links to external sites that are not operated by us. We are not responsible for the privacy practices or content of these sites. We recommend reviewing the privacy policies of any third-party websites you visit.",
      },
      {
        heading: "Sharing Your Personal Information",
        content:
          "Our services are not intended for users under the age of 13. We do not knowingly collect or store personal information from children. If we become aware that a child under",
      },
      {
        heading: "Alterations to This Privacy Policy",
        content:
          "Our services are not intended for users under the age of 13. We do not knowingly collect or store personal information from children. If we become aware that a child under",
      },
    ],
  };

  const { description, sections } = pagesData;
  return (
    <>
      <Navbar />
      <div className="Page-Section">
        <NavigationButtons currentPage="Privacy Policy" />
        <div className="Page-SubSection">
          <div className="Page-Heading-Section">
            <div className="Page-Heading">
              <h1>Privacy Policy</h1>
            </div>
            <div className="Page-SubHeading">
              <h4>Update 19/02023</h4>
            </div>
          </div>
          <div className="Page-Content">
            <p className="Page-Content-para">
              Thank you for choosing Neom, a brand by Swaad Agro Industries Pvt.
              Ltd. This Privacy Policy governs the manner in which we gather,
              use, uphold, and reveal information obtained from users (referred
              to as "you" or "users") of www.neomindia.co.in (referred to as
              "the Website"). This Privacy Policy pertains to the Website as
              well as all the products and services provided by Swaad Agro
              Industries Pvt Ltd.
            </p>
            <div className="Page-Sections">
              <h2>1. Information Collection</h2>
              <p>
                We may gather personal identification details from users through
                various means, including but not limited to, when users browse
                our Website, sign up on the Website, place orders, subscribe to
                the newsletter, participate in surveys, complete forms, or
                engage in other activities, services, features, or resources we
                provide on our Website. Users may be requested for, as
                appropriate, their name, email addresses postal address, phone
                number, and credit card information. We will only collect
                personal identification information from users if they willingly
                provide such information to us. Users always have the option to
                decline providing personally identifiable information, although
                this might hinder their engagement in certain Website-related
                activities.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>2. Non-personal Identification Information</h2>
              <p>
                We may collect non-personal identification information about
                users each time they interact with our Website. This information
                may encompass the browser name, computer type, and technical
                details about users' method of connecting to our Website, such
                as operating systems and utilized Internet service providers,
                among other similar data.
              </p>
            </div>{" "}
            <div className="Page-Sections">
              <h2>3. Web Browser Cookies</h2>
              <p>
                Our Website might utilize "cookies" to enhance the user
                experience. Users' web browsers save cookies on their hard
                drives for record-keeping purposes and, occasionally, to track
                information about them. Users can configure their web browsers
                to decline cookies or receive alerts when cookies are being
                sent. In such cases, please note that some parts of the Website
                might not function optimally.
              </p>
            </div>{" "}
            <div className="Page-Sections">
              <h2>4. Utilization of Collected Information</h2>
              <p>
                We might gather and utilize users' personal information for the
                subsequent purposes:
              </p>
              <ul>
                <li>
                  To enhance customer service: The information you provide helps
                  us to respond more effectively to your customer service
                  queries and support needs.
                </li>
                <li>
                  To personalize user experience: We might utilize information
                  in an aggregate form to comprehend how our users collectively
                  use the services and resources provided on our Website.
                </li><li>
                To process transactions: We may use the information users supply about themselves when placing an order solely to fulfill that order's service. We do not share this 
                </li>
                <li>
                To send periodic emails: We may use the email address to forward user information and updates regarding their orders. It might also be used to address their inquiries, questions, and other requests. If users choose to subscribe to our mailing list, they will receive emails that could encompass company news, updates, related product or service details, etc. If users ever wish to unsubscribe from receiving future emails, we incorporate comprehensive unsubscribe instructions at the base of each email or users can contact us through our Website.
                </li>
              </ul>
            </div>{" "}
            <div className="Page-Sections">
              <h2>5. Safeguarding Your Information</h2>
              <p>
              We adopt appropriate practices for data collection, storage, processing, and security measures to guard against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Website.
              </p>
           
            </div>{" "}
            <div className="Page-Sections">
              <h2>6. Sharing Your Personal Information</h2>
              <p>
              We do not trade, sell, or lease users' personal identification information to external parties. We might share generic, aggregated demographic information that is not linked to any personal identification information concerning visitors and users with our business partners, reliable affiliates, and advertisers for the aforementioned purposes.
              </p>
            </div>{" "}
            <div className="Page-Sections">
              <h2>7. Alterations to This Privacy Policy</h2>
              <p>
              We retain the right to update this Privacy Policy at any time. In doing so, we will modify the revised date at the bottom of this page. We recommend that users check this page frequently for any changes in order to remain informed about how we safeguard the personal information we collect. By using our Website, you acknowledge and consent that it is your responsibility to periodically review this Privacy Policy and stay informed about any revisions.
              </p>
              <p>If you have inquiries about this Privacy Policy, the operations of this Website, or your interactions with this Website, please contact us at <Link to='mailto:info@swaadagro.com.' target="_blank">info@swaadagro.com</Link>. </p>
            </div>
          </div>
        </div>

        <Footer1 />
      </div>
    </>
  );
}

export default PrivacyPolicy;
