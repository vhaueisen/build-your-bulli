import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import BaseSelector from "./BaseSelector";
import Builder from "./Builder";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route sensitive exact path="/" component={Home} />
          <Route path="/select" component={BaseSelector} />
          <Route path="/builder" component={Builder} />
        </Switch>
      </Router>
    );
  }
}
