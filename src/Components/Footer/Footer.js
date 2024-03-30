import React from "react";
import profileIcon from "../../Images/profile-icon.png";
import prevSlideIcon from "../../Images/prev-slide-icon.png";
import nextSlideIcon from "../../Images/next-slide-icon.png";
import infoIcon from "../../Images/info-icon.png";
import "./Footer.css";

export default function Footer({ slide, prev, next }) {
  return (
    <footer className="footer">
      <div className="flex-controlls">
        <img src={profileIcon} alt="Profile Icon" />
        <div className="slide-controls">
          <img src={prevSlideIcon}  alt="Profile Icon" onClick={prev} />
          <h1 className="slide-number">{slide}</h1>
          <img src={nextSlideIcon}  alt="Profile Icon" onClick={next} />
        </div>
        <img src={infoIcon}  alt="Profile Icon" />
      </div>
    </footer>
  );
}
