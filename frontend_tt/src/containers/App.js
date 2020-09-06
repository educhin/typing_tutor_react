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