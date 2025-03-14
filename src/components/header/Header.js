import React, { useState, useEffect } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { menuItems } from "../../constants/app.js";

const onMouseOut = (event) => {
  event.target.style.backgroundColor = "transparent";
};

const Header = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update ukuran layar saat resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widthLess1024 = windowWidth < 1024;

  useEffect(() => {
    if (widthLess1024 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [windowWidth]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <NavLink to="/home" className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          {widthLess1024 && (
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
          )}

          {(isMenuOpen || !widthLess1024) && (
            <ul
              className={`menu ${isMenuOpen ? "menu-open" : ""}`}
              style={{ backgroundColor: theme.body }}
            >
              {menuItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text, cursor: "pointer" }}
                    onMouseOut={onMouseOut}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </header>
      </div>
    </Fade>
  );
};

export default Header;
