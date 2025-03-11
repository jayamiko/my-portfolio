import React from "react";
import "./GradientButton.css";
import { gradientColorTheme } from "../../constants/app";

export default function GradientButton({
  children,
  className = "",
  colors = gradientColorTheme, // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
  onClick, // Click handler
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <button
      className={`animated-gradient-button ${className}`}
      onClick={onClick}
    >
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <span className="button-content" style={gradientStyle}>
        {children}
      </span>
    </button>
  );
}
