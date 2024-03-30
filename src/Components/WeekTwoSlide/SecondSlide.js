import React from "react";
import BeachImage from "../../Images/Beach.png";
import rainyNight from "../../Images/night.png";
import homeIcon from "../../Images/HomeIcon.png";
import watchIcon from "../../Images/WatchIcon.png";

import "../WeekOneSlide/FirstSlide.css";

export default function SecondSlide() {
  return (
    <div className="slide-content">
      <h2>
        Can you figure out the definition of setting from the following
        examples?
      </h2>
      <p>(take a minute to think about this)</p>
      <div className="dark-light-images">
        <div>
          <div className="borderd-img-holder">
            <img src={BeachImage} alt="Beach Sunny Day" />
          </div>
          <p>Sunny day at a beach</p>
        </div>
        <div>
          <div className="borderd-img-holder">
            <img src={rainyNight} alt="Rainy Night" />
          </div>
          <p>A cold rainy night in a haunted house in October</p>
        </div>
      </div>
      <div>
        <p>So, what do you think the definition of setting is?</p>
        <div></div>
        <div className="flex">
          <span>Any guesses?</span>
          <div className="input-fild">
            <input type="text" />
          </div>
          <div className="flex">
            <span>Hint:</span>
            <img src={watchIcon} alt="Watch Icon" />
            <img src={homeIcon} alt="Home Icon" />
          </div>
        </div>
        <div></div>
      </div>

      <p className="setting-time-and-place">
        <span>Setting is the time</span>
        <img src={watchIcon} width={"25px"} alt="Watch Icon" /> 
        <span>and place</span>
        <img src={homeIcon} alt="Home Icon" width={"25px"} /> 
        <span>of a story. It often answers the questions: when? and where?</span>
      </p>

      <p>
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </p>
    </div>
  );
}
