import logo from './logo.svg';
import './App.css';

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
    <div className="story-writing-elements-container">
    <h1 className="title">funfox</h1>
    <h2 className="subtitle">Week 1 Elements of Story Writing</h2>
    <p className="text-content">
      Welcome to term 2 of Writers Club. Are you excited for this amazing
      journey?
    </p>
    <p className="text-content">
      Over the next week, we will be practicing the different elements of
      story writing. Our aim is to make stories more interesting and
      exciting.
    </p>
    <p className="text-content">
      There are five elements which make the foundation for story writing.
      An element is an essential part of something and every fiction story
      has the same key elements :
    </p>
    <ul className="key-elements-list">
      <li>SETTING</li>
      <li>CHARACTERS</li>
      <li>PLOT</li>
      <li>PROBLEM OR CONFLICT</li>
      <li>RESOLUTION</li>
    </ul>
    <p className="text-content">
      You must be familiar with some of these. If not, do not worry! We will
      cover all these elements as we go along.
    </p>
    <p className="text-content">
      For today's lesson, we will try to understand and practice writing the
      setting for our stories.
    </p>
    <p className="text-content last-text-content">
      The setting is an important element of every fiction story.
    </p>
  </div>
  );
}

export default App;
