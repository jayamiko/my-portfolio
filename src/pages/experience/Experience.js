import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";

import { Panel } from "baseui/accordion";

import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import GradientText from "../../components/text/gradientText/GradientText.jsx";
class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assets/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <GradientText
                  animationSpeed={8}
                  className="experience-heading-sub-text"
                >
                  {experience["subtitle"]}
                </GradientText>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        {/* <ExperienceAccordion sections={experience["sections"]} theme={theme} /> */}
        <div className="experience-list-card">
          {experience["sections"].map((section) => {
            return (
              <>
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </>
            );
          })}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
