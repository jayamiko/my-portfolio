import React from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";

function OrganizationList(props) {
  return (
    <div className="organizations-main-div">
      <ul className="dev-icons-orgs">
        {props.logos.map((logo) => {
          return (
            <OverlayTrigger
              key={logo["brandName"]}
              placement={"top"}
              style={{ marginBottom: "5px" }}
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>{logo["brandName"]}</strong>
                </Tooltip>
              }
            >
              <a
                href={logo.brandLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="organizations-inline" name={logo["brandName"]}>
                  <Fade bottom duration={2000} distance="40px">
                    <img
                      className="organizations-img"
                      style={logo["style"]}
                      src={`${process.env.PUBLIC_URL}/brands/${logo["imageSrc"]}`}
                      alt={logo["brandName"]}
                    />
                  </Fade>
                </li>
              </a>
            </OverlayTrigger>
          );
        })}
      </ul>
    </div>
  );
}

export default OrganizationList;
