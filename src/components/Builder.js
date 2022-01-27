import React, { Component } from "react";
import Game from "./Game";
import Sidebar from "./Sidebar";
import { T1S } from "./../Model/T1S";
import StateMachine from "./StateMachine";

export default class Builder extends Component {
  constructor(props) {
    super(props);
    this.stateMachine = new StateMachine(T1S);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Game />
          <Sidebar machine={this.stateMachine} />
        </div>
      </div>
    );
  }
}
