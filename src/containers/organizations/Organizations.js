import React, { Component } from "react";
import "./Organizations.css";
import { Fade } from "react-reveal";
import OrganizationList from "../../components/organizationList/OrganizationList";
import { competitiveBrands } from "../../portfolio";

class Organizations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div id="organizations">
        <div className="organizations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="organizations-header" style={{ color: theme.text }}>
              Contributed Development
            </h1>
          </Fade>
        </div>
        <OrganizationList logos={competitiveBrands["data"]} />
      </div>
    );
  }
}

export default Organizations;
