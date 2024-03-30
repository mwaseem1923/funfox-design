import React from "react";
import profileIcon from "../../Images/profile-icon.png";
import prevSlideIcon from "../../Images/prev-slide-icon.png";
import nextSlideIcon from "../../Images/next-slide-icon.png";
import infoIcon from "../../Images/info-icon.png";
import "./Footer.css";

export default function Footer({ slide, prev, next }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={profileIcon} alt="Profile Icon" className="footer-icon" />
        <div className="slide-controls">
          <img
            src={prevSlideIcon}
            alt="Previous Slide"
            className="slide-control-icon"
            onClick={prev}
          />
          <h1 className="slide-number">{slide}</h1>
          <img
            src={nextSlideIcon}
            alt="Next Slide"
            className="slide-control-icon"
            onClick={next}
          />
        </div>
        <img src={infoIcon} alt="Info Icon" className="footer-icon" />
      </div>
    </footer>
  );
}
