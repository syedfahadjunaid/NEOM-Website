import React from "react";
import "./SalesAndRefunds.css";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import Footer1 from "../../Layout/Footer/Footer1";
import Navbar from "../../Layout/Navbar/Navbar";
import { Link } from "react-router-dom";

function SalesAndRefunds() {
  const pagesData = {
    description:
      "At our company, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.",
    sections: [
      {
        heading: "Information Collection and Use",
        content:
          "We may collect various types of information from you when you interact with our website or services. This information may include your name, email address, contact information, demographic data, and any other information you provide voluntarily. We use this information to personalize your experience, provide the services you request, improve our website functionality, and send you relevant communications.",
      },
      {
        heading: "Data Security",
        content:
          "We take security measures to protect your personal information from unauthorized access, use, or disclosure. We employ industry-standard techniques to safeguard the confidentiality and integrity of your data. These measures include encryption, secure storage, and restricted access to authorized personnel only.",
      },
      {
        heading: "Information Sharing",
        content:
          "We do not sell, trade, or transfer your personal information to third parties without your consent. However, we may share your data with trusted partners or service providers who assist us in operating our website or providing our services. These partners are bound by confidentiality agreements and are only granted access to the information necessary to perform their tasks.",
      },
      {
        heading: "Cookies and Tracking Technologies",
        content:
          "Our website may use cookies and similar tracking technologies to enhance your experience and gather information about your behavior on our site. These technologies collect non-personal information such as your IP address, browser type, and pages visited. You can choose to disable cookies through your browser settings, although this may limit certain functionalities of our website.",
      },
      {
        heading: "External Websites",
        content:
          "Our website may contain links to external sites that are not operated by us. We are not responsible for the privacy practices or content of these sites. We recommend reviewing the privacy policies of any third-party websites you visit.",
      },
      {
        heading: "Children's Privacy",
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
        <NavigationButtons currentPage="Sales and Refunds" />
        <div className="Page-SubSection">
          <div className="Page-Heading-Section">
            <div className="Page-Heading">
              <h1>Sales and Refunds</h1>
            </div>
            <div className="Page-SubHeading">
              <h4>Update 19/02023</h4>
            </div>
          </div>
          <div className="Page-Content">
            <p>
              In the event of encountering quality issues, expired products,
              packaging defects causing damage, or incorrect item deliveries, we
              kindly request you to get in touch with us via email or by calling
              our customer care number to communicate the details of your
              concern. When providing this information, please ensure to include
              the following particulars: a) order number, b) names of the
              affected item/s, c) a photograph of the product related to the
              raised concern, and d) a description of the issue. It's important
              to note that such concerns need to be reported within twenty-four
              (24) hours from the time your order is delivered to your specified
              address. We will make every effort to address your concerns
              promptly and provide you with our feedback at the earliest. It's
              worth mentioning that we won't be able to consider complaints
              received beyond twenty-four (24) hours of delivery.
            </p>

            <div className="Page-Sections">
              <p>
                You can reach us at <Link to='mailto:info@swaadagro.com' target="_blank">info@swaadagro.com</Link>  or call us on
               <Link to='tel:18001216400'> 1800-121-6400</Link> between 9 am to 6 pm, seven days a week. If your
                concern is found to be valid, we will supply you with a return
                shipping label and instructions for sending back the package.
                Products sent without the return shipping label and instructions
                from us will not be accepted.
              </p>
            </div>
            <div className="Page-Sections">
              <p>
                After we receive the return package from you, we will confirm
                its receipt. We will then conduct a physical inspection of the
                returned product. If your concern is determined to be valid
                after this inspection, our team will get in touch with you. We
                will provide you with a coupon code equivalent to the value of
                the questioned product. This coupon code can be used to purchase
                items from the Neom India website up to the value of the code.
                Please be aware that cash refunds will not be issued.
              </p>
            </div>
            <div className="Page-Sections">
              <p>
                In the instance where you haven't received your order but have
                received an email and/or SMS indicating that your order has been
                delivered, we ask you to reach out to us within twenty-four (24)
                hours of receiving such notification. Your concern will be
                investigated, and if the authenticity of the concern is
                confirmed, our team will address it accordingly.
              </p>
            </div>
          </div>
        </div>

        <Footer1 />
      </div>
    </>
  );
}

export default SalesAndRefunds;
