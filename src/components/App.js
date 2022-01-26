import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import BaseSelector from "./BaseSelector";
import Builder from "./Builder";
import Quote from "./Quote";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route sensitive exact path="/">
            <Home />
          </Route>
          <Route path="/select" component={BaseSelector}>
            <BaseSelector />
          </Route>
          <Route path="/builder" component={Builder}>
            <Builder />
          </Route>
          <Route path="/quote" component={Quote}>
            <Quote />
          </Route>
        </Switch>
      </Router>
    );
  }
}
