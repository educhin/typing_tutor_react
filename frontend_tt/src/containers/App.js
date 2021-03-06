import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Test from "../components/test/Test";
import Scores from "../components/scores/Scores";
import AddQuoteForm from "../components/test/AddQuoteForm";
import Home from "../components/home/Home";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
 
        <Route path="/test">
          <Test />
        </Route>

        <Route path="/quoteForm">
          <AddQuoteForm />
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