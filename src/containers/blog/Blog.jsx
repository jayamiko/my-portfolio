import React from "react";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
import BlogsImg from "../../pages/contact/BlogsImg";

function Blog(props) {
  const theme = props.theme;
  const data = props.data;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="blog-heading-div">
        <div className="blog-heading-text-div">
          <h1 className="blog-heading-text" style={{ color: theme.text }}>
            {data["title"]}
          </h1>
          <p
            className="blog-header-detail-text subTitle"
            style={{ color: theme.secondaryText }}
          >
            {data["subtitle"]}
          </p>
          <div className="blogsite-btn-div">
            <Button
              text="Visit My Blogsite"
              newTab={true}
              href={data.link}
              theme={theme}
            />
          </div>
        </div>
        <div className="blog-heading-img-div">
          {/* <img
                src={require(`../../assets/images/${blogSection["avatar_image_path"]}`)}
                alt=""
            /> */}
          <BlogsImg theme={theme} />
        </div>
      </div>
    </Fade>
  );
}

export default Blog;
