import React from 'react';
import logo from '../logo.svg';
import '../styling/App.css';
import TypingButton from './Home/TypingButton.js';
import ScoresButton from './Home/ScoresButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Typing_Tutor_React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The hack has started....
          Edit <code>src/App.js</code> and save to mount your resistance.
        </p>
        <div>
          <TypingButton/>
          <ScoresButton/>
        </div>
      </header>
    </div>
  );
}

export default App;

