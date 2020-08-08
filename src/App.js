import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import signIn from "./components/SignIn";
import Navigation from "./components/Navigation";
import load from "./components/Load";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={signIn} />
            <Route path="/load" component={load} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
