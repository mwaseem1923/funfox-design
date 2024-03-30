import React from "react";
import BeachImage from "../../Images/Beach.png";
import rainyNight from "../../Images/night.png";
import homeIcon from "../../Images/HomeIcon.png";
import watchIcon from "../../Images/WatchIcon.png";

import "../WeekOneSlide/FirstSlide.css";

export default function SecondSlide() {
  return (
    <div className="main-content">
      <h1>
        Can you figure out the definition of setting from the following
        examples?
      </h1>
      <p>(take a minute to think about this)</p>
      <div className="dark-light-images">
        <div>
          <div className="borderd-img-holder">
            <img src={BeachImage} />
          </div>
          <p>Sunny day at a beach</p>
        </div>
        <div>
          <div className="borderd-img-holder">
            <img src={rainyNight} />
          </div>
          <p>A cold rainy night in a haunted house in October</p>
        </div>
      </div>
      <div>
        <p>So, what do you think the definition of setting is?</p>
        <div>
            
        </div>
        <div className="flex">

        <span>Any guesses?</span>
        <div className="input-fild">
        <input type="text" />
        </div>
        <div className="flex">
            <span>Hint:</span>
            <img src={watchIcon} />
            <img src={homeIcon} />
        </div>
        </div>
        <div></div>
      </div>
      
        <p className="bg-info">
          Setting is the time <img src={watchIcon} width={"25px"}/> and place <img src={homeIcon} width={"25px"}/> of a
          story. It often answers the questions: when? and where?
        </p>
      
      <p>
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </p>
    </div>
  );
}
