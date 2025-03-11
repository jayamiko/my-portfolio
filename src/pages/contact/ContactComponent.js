import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData, SocialMediaLink } from "../../portfolio.js";
import { PiReadCvLogoFill } from "react-icons/pi";
import GradientButton from "../../components/gradientButton/GradientButton.jsx";
import GradientText from "../../components/text/gradientText/GradientText.jsx";
import { RiMailSendLine } from "react-icons/ri";
// import Address from "../../containers/address/Address.jsx";
// import Blog from "../../containers/blog/Blog.jsx";

const ContactData = contactPageData.contactSection;
// const blogSection = contactPageData.blogSection;
// const addressSection = contactPageData.addressSection;
// const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div
          className="basic-contact"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <GradientButton
                    onClick={() => {
                      window.location.href = `mailto:${SocialMediaLink.Email}`;
                    }}
                  >
                    <GradientText animationSpeed={5}>
                      <RiMailSendLine size={16} color="#05505E" />
                      <span> Sent Mail to Me</span>
                    </GradientText>
                  </GradientButton>
                  <Button
                    icon={<PiReadCvLogoFill size={14} />}
                    text=" See My CV"
                    newTab={true}
                    href={greeting.resumeLink}
                    // className="see-my-cv-btn"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          {/* Blog Section */}
          {/* <Blog data={blogSection} theme={theme} /> */}

          {/* Address Section */}
          {/* <Address data={addressSection} phone={phoneSection} theme={theme} /> */}
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Contact;
