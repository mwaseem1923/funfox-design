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
          <img src='favicon.ico' className='logo' />
          <img src='favicon.ico' className='' />

    <div className="inner-container">

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
    <p className="text-content">
      There are five elements which make the foundation for story writing.
      An element is an essential part of something and every fiction story
      has the same key elements :
    </p>
    <ul className="key-elements-list">
      <li className='setting'>SETTING</li>
      <li className='setting'>CHARACTERS</li>
      <li className='setting'>PLOT</li>
      <li className='setting'>PROBLEM OR CONFLICT</li>
      <li className='setting'>RESOLUTION</li>
    </ul>
    <p className="">
      You must be familiar with some of these. If not, do not worry! We will
      cover all these elements as we go along.
    </p>
    <p className="last">
      For today's lesson, we will try to understand and practice writing the
      setting for our stories.<br />
      The setting is an important element of every fiction story.
    </p>
    </div>
    <div className='flex-controlls'>
      <img src='favicon.ico' />
      <div>
      <img src='favicon.ico' />
      dropdown
      <img src='favicon.ico' />

      </div>
      <img src='favicon.ico' />

    </div>
  </div>
  );
}

export default App;
