import logo from "./logo.png";
import pencilImage from "./pencil.png";
import bagImage from "./bag.png";
import bookOpenImage from "./book-open.png";
import scaleImage from "./scale.png";
import bookImage from "./book.png";
import hatImage from "./hat.png";
import profileIcon from "./profile-icon.png";
import prevSlideIcon from "./prev-slide-icon.png";
import nextSlideIcon from "./next-slide-icon.png";
import infoIcon from "./info-icon.png";
import tutorImage from "./tutor.png";

import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" width={"100px"} height={"auto"} />
        {/* <img src='favicon.ico' className='' /> */}
      </header>
      <div className="main">
        <div className="left-bg-img">
          <img src={pencilImage} />
          <img src={bagImage} />
          <img src={bookOpenImage} />{" "}
        </div>
        
        <div className="main-content">
          <h2 className="subtitle">Week 1 Elements of Story Writing</h2>
          <p className="">
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey?
          </p>
          <p className="">
            Over the next week, we will be practicing the different elements of
            story writing. Our aim is to make stories more interesting and
            exciting.
          </p>
          <div className="text-content">

          <p >
            There are five elements which make the foundation for story writing.
            An element is an essential part of something and every fiction story
            has the same key elements :
          </p>
          <img src={tutorImage} height={"100px"}/>
          </div >
          <ul className="key-elements-list">
            <li className="setting">SETTING</li>
            <li className="setting">CHARACTERS</li>
            <li className="setting">PLOT</li>
            <li className="setting">PROBLEM OR CONFLICT</li>
            <li className="setting">RESOLUTION</li>
          </ul>
          <p className="">
            You must be familiar with some of these. If not, do not worry! We
            will cover all these elements as we go along.
          </p>
          <p className="last">
            For today's lesson, we will try to understand and practice writing
            the setting for our stories.
            <br />
            The setting is an important element of every fiction story.
          </p>
      
        </div>
      
       
        <div className="right-bg-img">
          <img src={scaleImage} />
          <img src={bookImage} />
          <img src={hatImage} />
        </div>
      </div>
      <footer className="footer">
            <div className="flex-controlls">
              <img src={profileIcon} />
              <div>
                <img src={prevSlideIcon} />
                dropdown
                <img src={nextSlideIcon} />
              </div>
              <img src={infoIcon} />
            </div>
          </footer>
    </div>
  );
}

export default App;
