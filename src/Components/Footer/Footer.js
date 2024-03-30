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
        <img src={profileIcon} />
        <div className="slide-controls">
          <img src={prevSlideIcon} onClick={prev} />
          <h1 className="slide-number">{slide}</h1>
          <img src={nextSlideIcon} onClick={next} />
        </div>
        <img src={infoIcon} />
      </div>
    </footer>
  );
}
