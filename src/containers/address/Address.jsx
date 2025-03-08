import React from "react";
import { Fade } from "react-reveal";
import AddressImg from "../../pages/contact/AddressImg";
import Button from "../../components/button/Button";

function Address(props) {
  const theme = props.theme;
  const data = props.data;
  const phone = props.phone;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="address-heading-div">
        <div className="address-heading-text-div">
          <h1 className="address-heading-text" style={{ color: theme.text }}>
            {data["title"]}
          </h1>
          <p
            className="contact-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {data["subtitle"]}
          </p>
          <h1 className="address-heading-text" style={{ color: theme.text }}>
            {phone["title"]}
          </h1>
          <p
            className="contact-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {phone["subtitle"]}
          </p>
          {/* <div className="address-btn-div">
            <Button
              text="Visit on Google Maps"
              newTab={true}
              href={data.location_map_link}
              theme={theme}
            />
          </div> */}
        </div>
        <div className="contact-heading-img-div">
          {/* <img
                src={require(`../../assets/images/${data["avatar_image_path"]}`)}
                alt=""
            /> */}
          <AddressImg theme={theme} />
        </div>
      </div>
    </Fade>
  );
}

export default Address;
