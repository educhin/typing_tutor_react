// import React from 'react';
// import logo from '../logo.svg';
// import '../styling/App.css';
// import ButtonContainer from './ButtonContainer.js';
// // import TypingButton from './Home/TypingButton.js';
// // import ScoresButton from './Home/ScoresButton';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1> Welcome to Typing_Tutor_React!</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           The hack has started....
//           Edit <code>src/App.js</code> and save to mount your resistance.
//         </p>
//         <div>
//           <ButtonContainer />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Test from "../components/Test"
import Scores from "../components/Scores"
import Home from "./Home"

function App() {
  return (
    <div>
      <Switch>
 
        <Route path="/test">
          <Test />
        </Route>


        <Route path="/scores">
          <Scores />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  );
}

export default App;