import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import  { BrowserRouter, HashRouter, Switch, Route, Router } from "react-router-dom";

import Homepage from "./welcome/Homepage";
import Nav from "./welcome/Nav";
import Scroll from "./welcome/Scroll";

function App() {

  return (

    <div className="App" >
      <Router>
        <Scroll ></Scroll>
        <div className="main">
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>

        </div>
      </Router>
      <div>

      </div>

    </div>

  );
};

export default App;
