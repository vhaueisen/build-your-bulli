import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import BaseSelector from "./BaseSelector";
import Builder from "./Builder";
import Quote from "./Quote";
import Report from "./Report";
import { T1S } from "./../Model/T1S";
import StateMachine from "./StateMachine";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { machine: new StateMachine(T1S) };
    this.state.machine.updateState = (m) => this.setState({ machine: m });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route sensitive exact path="/">
            <Home />
          </Route>
          <Route path="/select">
            <BaseSelector />
          </Route>
          <Route path="/builder">
            <Builder machine={this.state.machine} />
          </Route>
          <Route path="/quote">
            <Quote machine={this.state.machine} />
          </Route>
          <Route path="/report">
            <Report machine={this.state.machine} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
