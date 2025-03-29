import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, SocialMediaLink } from "../../portfolio";
import { Fade } from "react-reveal";
import { PiReadCvLogoFill } from "react-icons/pi";
import GradientText from "../../components/text/gradientText/GradientText";
import GradientButton from "../../components/gradientButton/GradientButton";
import { RiMailSendLine } from "react-icons/ri";
import bgImage from "../../assets/personal/cover_jayamiko.jpg";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="greet-main"
        id="greeting"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="greeting-div">
              <GradientText animationSpeed={5} className="greeting-text">
                Jaya Miko Yoga Pratama
              </GradientText>
              {/* {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )} */}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <br />
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
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
                  className="see-my-cv-btn"
                  theme={theme}
                />
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div> */}
        </div>
      </div>
    </Fade>
  );
}
