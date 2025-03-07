import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";
import { FaTrophy, FaEye, FaFileAlt, FaBookmark } from "react-icons/fa";

export default function PublicationCard({ pub, theme }) {
  function openPubinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className="publication-card-div"
      style={{ backgroundColor: "#9EDBC5" }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div
          className="publication-card"
          key={pub.id}
          onClick={() => openPubinNewTab(pub.url)}
        >
          <div>
            <div className="publication-name-div">
              <p className="publication-name" style={{ color: theme.text }}>
                {pub.name}
              </p>
            </div>
            <p
              className="publication-description"
              style={{ color: theme.text }}
            >
              {pub.description}
            </p>
          </div>
          <div>
            <div className="stats-container">
              {pub.top && (
                <div className="stat-item">
                  <FaTrophy className="icon" />
                  <span>Top {pub.top}</span>
                </div>
              )}
              <div className="stat-item">
                <FaEye className="icon" />
                <span>{pub.views} Views</span>
              </div>
              <div className="stat-item">
                <FaFileAlt className="icon" />
                <span>{pub.pages} Pages</span>
              </div>
              <div className="stat-item">
                <FaBookmark className="icon" />
                <span>{pub.bookmarks} Bookmarks</span>
              </div>
            </div>
            <div className="publication-details">
              <p
                className="publication-creation-date"
                style={{ color: theme.secondaryText }}
              >
                Published on {pub.createdAt.split("T")[0]}
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
