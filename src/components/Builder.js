import React, { Component } from "react";
import Game from "./Game";
import Sidebar from "./Sidebar";

export default class Builder extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Game />
          <Sidebar />
        </div>
      </div>
    );
  }
}
