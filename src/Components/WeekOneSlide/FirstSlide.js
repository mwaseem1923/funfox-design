import React from "react";
import tutorImage from "../../Images/tutor.png";

export default function FirstSlide() {
  return (
    <div className="main-content">
      <h2 className="subtitle">Week 1 Elements of Story Writing</h2>
      <p className="">
        Welcome to term 2 of Writers Club. Are you excited for this amazing
        journey?
        <br />
        Over the next week, we will be practicing the different elements of
        story writing. Our aim is to make stories more interesting and exciting.
      </p>
      <div className="text-content">
        <p>
          There are five elements which make the foundation for story writing.
          An element is an essential part of something and every fiction story
          has the same key elements :
        </p>
        <img src={tutorImage}  alt="Profile Icon" height={"100px"} />
      </div>
      <ul className="key-elements-list">
        <li className="setting">SETTING</li>
        <li className="characters">CHARACTERS</li>
        <li className="plot">PLOT</li>
        <li className="problem">PROBLEM OR CONFLICT</li>
        <li className="resolution">RESOLUTION</li>
      </ul>
      <p className="">
        You must be familiar with some of these. If not, do not worry! We will
        cover all these elements as we go along.
      </p>
      <p className="last">
        For today's lesson, we will try to understand and practice writing the
        setting for our stories.
        <br />
        The setting is an important element of every fiction story.
      </p>
    </div>
  );
}
