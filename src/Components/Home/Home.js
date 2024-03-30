import React, { useState } from "react";
import pencilImage from "../../Images/pencil.png";
import bagImage from "../../Images/bag.png";
import bookOpenImage from "../../Images/book-open.png";
import scaleImage from "../../Images/scale.png";
import bookImage from "../../Images/book.png";
import hatImage from "../../Images/hat.png";
import QuestionIcon from "../../Images/QuestionIcon.png";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SidebarLeft from "../Sidebars/SidebarLeft";
import SidebarRight from "../Sidebars/SidebarRight";
import FirstSlide from "../WeekOneSlide/FirstSlide";
import SecondSlide from "../WeekTwoSlide/SecondSlide";
import "./Home.css";

export default function Home() {
  const [slideCounter, setSlideCounter] = useState(1);
  const prevSlide = () => {
    if (slideCounter !== 1) {
      setSlideCounter(slideCounter-1);
    }
  };
  const nextSlide = () => {
    if (slideCounter !== 2) {
      setSlideCounter(slideCounter+1);
    }
  };
  return (
    <div className="App">
      <Header />

      <div className="main">
        <SidebarLeft img1={pencilImage} img2={bagImage} img3={bookOpenImage} />

        {slideCounter === 1 ? <FirstSlide /> : <SecondSlide />}
        {slideCounter === 1 ? (
          <SidebarRight img1={scaleImage} img2={bookImage} img3={hatImage} />
        ) : (
          <SidebarRight img1={scaleImage} img2={QuestionIcon} img3={hatImage} />
        )}
      </div>

      <Footer slide={slideCounter} prev={prevSlide} next={nextSlide} />
    </div>
  );
}
