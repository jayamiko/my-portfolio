import React from "react"
import { Fade } from "react-reveal";
import "./sectionTitle.css";
const SectionTitle = ({ title, description, data, theme }) => {
  if (!data?.length) return null;

  return (
    <div className="basic-projects">
      <Fade bottom duration={2000} distance="40px">
        <div className="publications-heading-div">
          <div className="publications-heading-text-div">
            <h1 className="publications-heading-text" style={{ color: theme.text }}>
              {title}
            </h1>
            <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
              {description}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SectionTitle;