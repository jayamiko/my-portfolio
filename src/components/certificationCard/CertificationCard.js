import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="content-overlay"
                style={{
                  background: `${certificate.color_code}40`,
                }}
              ></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  className="logo_img"
                  src={`${process.env.PUBLIC_URL}/certifications/${certificate.logo_path}`}
                  alt={certificate.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top"></div>
            </a>
          </div>
          <div className="cert-body">
            <h2
              className="cert-body-title"
              style={{
                color: certificate.color_code,
                textShadow: "0.5px 0.5px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
