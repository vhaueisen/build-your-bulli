import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import BaseSelector from "./BaseSelector";
import Builder from "./Builder";
import Quote from "./Quote";
import Report from "./Report";
import { T1S } from "./../Model/T1S";
import StateMachine from "./StateMachine";
import { hot } from "react-hot-loader/root";
import { T1Samba } from "../Model/T1Samba";
import { T15 } from "../Model/T15";
import { T1SingleCab } from "../Model/T1SingleCab";

class App extends Component {
  state = { machine: null };
  models = [T1S, T1Samba, T15, T1SingleCab];

  createMachine(i) {
    let m = new StateMachine(this.models[i]);
    this.setState({ machine: m });
    m.updateState = (m) => this.setState({ machine: m });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route sensitive exact path="/">
            <Home />
          </Route>
          <Route path="/select">
            {this.state.machine != null ? (
              <Redirect to="/builder" />
            ) : (
              <BaseSelector
                models={this.models}
                onSelect={(i) => this.createMachine(i)}
              />
            )}
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
export default hot(App);
