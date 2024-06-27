import React from "react";
import "./TermsOfUse.css";
import NavigationButtons from "../../Layout/NavigationButtons/NavigationButtons";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import Footer1 from "../../Layout/Footer/Footer1";
import { Link } from "react-router-dom";

function TermsOfUse() {
  return (
    <>
      <Navbar />
      <div className="Page-Section">
        <NavigationButtons currentPage="Terms of Use" />
        <div className="Page-SubSection">
          <div className="Page-Heading-Section">
            <div className="Page-Heading">
              <h1>Terms of Use</h1>
            </div>
            <div className="Page-SubHeading">
              <h4>Update 19/02023</h4>
            </div>
          </div>
          <div className="Page-Content">
            <p>
              These terms and conditions govern the utilization of the website
              <Link to="https://Neomindia.co.in" target="_blank" style={{marginLeft:'5px'}}>
                https://Neomindia.co.in
              </Link>{" "}
              ("Swaad Agro" or “Neom” or "website"). By continuing to use the
              website, you affirm that you have comprehended, accepted, and are
              obligated by the stipulated terms and conditions herein. Should
              you disagree with these terms and conditions or any part thereof,
              refrain from further use of this website. Within these terms and
              conditions, the terms "we," "our," "us", “pertain to the website's
              proprietor, and the terms "you," "your," "customer," "viewer"
              refer to the user or consumer of the website.
            </p>

            <div className="Page-Sections">
              <h2>Overview of Services: </h2>
              <p>
                Neom is operated by Swaad Agro Industries Pvt. Ltd and serves as
                an online store offering shopping and delivery services for
                packaged food products, as well as other products added or
                listed on the website by us and/or our business partners.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Eligibility Criteria: </h2>
              <p>
                This website is intended for individuals aged 18 years and
                above, who possess the capacity to enter into contracts as
                defined by the Indian Contract Act, 1872. By continuing to use
                the website, you confirm that you are not a minor (i.e., below
                18 years of age). Minors wishing to transact or use the website
                must do so under the supervision of a parent or legal guardian,
                who must accept and comply with the terms and conditions.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Account Security:</h2>
              <p>
                Registering and logging in may be required for ordering on the
                website. Safeguarding the privacy of your password and account
                is your responsibility, and you are accountable for all
                activities under your account. Promptly inform us of any
                unauthorized account use. We hold no responsibility for losses
                resulting from your failure to comply with this provision.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Pricing and Payment Terms: </h2>
              <p>
                Products listed on our website are sold at the indicated prices
                or the rates set by us. Prices are in Indian Rupees unless
                specified otherwise. Prices mentioned are exclusive of shipping,
                delivery charges, and applicable GST. You agree to pay shipping
                or delivery charges added to the quoted price upon placing the
                order.
              </p>
              <p>
                We retain the right to notify you of errors in product
                descriptions or pricing before dispatch. Should you proceed with
                the order, you acknowledge the provision of products or services
                in accordance with the revised description and/or pricing. While
                prices typically remain stable, changes might occur due to
                factors such as cost fluctuations, tax adjustments, etc. We may
                modify prices, delivery methods, or timelines at our discretion.
                We are not liable for any resulting damages from these
                modifications.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Customer Representation: </h2>
              <p>
                You affirm that all information provided during registration or
                order placement is accurate, current, and sufficient for
                fulfilling the order. Product warranties extend to you as a
                customer, not a reseller. You are responsible for assessing
                products and ingredients for allergies or medical
                considerations. We are not accountable for any reactions or
                health issues arising from product use.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Unauthorized or Fraudulent Use: </h2>
              <p>
                As per Clause 3, use is restricted to individuals above 18 years
                of age. By continuing to use the website, you declare that you
                are above 18. Minors can access the site as specified in Clause
                3. Unauthorized use or non-compliance with promotional offers
                constitutes fraudulent use, leading to damages for which you are
                responsible.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>User Conduct and Rules: </h2>
              <p>
                You agree not to modify, distribute, reproduce, or exploit the
                website or content without authorization. You will not post
                offensive, defamatory, or harmful content. No viruses or harmful
                software may be uploaded, and terms and conditions, policies,
                and guidelines must be adhered to. Inflammatory, derogatory, or
                abusive comments about us or our associates are prohibited.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Third-Party Links: </h2>
              <p>
                Neom may link to other websites (third party sites) not governed
                by these terms and conditions. We are not liable for linked
                content or sites. Links provided are for convenience and do not
                imply endorsement.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Disclaimer: </h2>
              <p>
                While efforts are made to ensure accurate information, Swaad
                Agro Industries Pvt Ltd is not liable for suitability,
                availability, accuracy, or completeness of data, products, or
                services. We do not guarantee uninterrupted, error-free access
                to the website.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Objectionable Material: </h2>
              <p>
                Content may be offensive or objectionable to some. Use content
                at your discretion; Swaad Agro is not liable for your
                interpretation
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Reviews, Feedback, Comments: </h2>
              <p>
                Reviews, comments, or suggestions given on the website become
                Neom Consumer Products Limited's property, allowing us to use,
                modify, or display them. Comments must adhere to policies and
                must not be illegal or offensive.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Termination: </h2>
              <p>
                Swaad Agro Industries Pvt. Ltd reserves the right to suspend or
                terminate use for violations.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Changes to Terms and Conditions: </h2>
              <p>
                Swaad Agro Industries Pvt. Ltd can modify terms without prior
                notice. Continued use implies acceptance.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Indemnification: </h2>
              <p>
                You agree to indemnify Swaad Agro Industries Pvt. Ltd for any
                losses arising from your use or breach of terms.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Severability: </h2>
              <p>
                If any term is deemed unlawful, the others remain unaffected.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Governing Law: </h2>
              <p>
                Indian law applies, with jurisdiction in Lucknow, Uttar Pradesh.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Contact: </h2>
              <p>
                For queries or grievances, contact{" "}
                <Link to="mailto:info@swaadagro.com" target="_blank">
                  info@swaadagro.com
                </Link>
                .
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Changes: </h2>
              <p>
                Swaad Agro Industries Pvt. Ltd can modify terms without notice.
              </p>
            </div>
            <div className="Page-Sections">
              <h2>Infringement Policy: </h2>
              <p>
                Using the website doesn't grant rights to content. Intellectual
                property infringement can be reported as per specified
                guidelines.
              </p>
              <p>
                All content on the Neom India website is owned by Swaad Agro
                Industries Pvt. Ltd. and is protected. Use, reproduction, or
                distribution without permission is prohibited. Access to the
                website doesn't grant a license to intellectual property.
              </p>
            </div>
          </div>
        </div>

        <Footer1 />
      </div>
    </>
  );
}

export default TermsOfUse;
