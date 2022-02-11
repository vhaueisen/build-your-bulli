import React, { Component } from "react";

export default class SquareColor extends Component {
  render() {
    return (
      <div
        className={`squareColor${this.props.selected ? " selected" : ""}${
          this.props.sm ? " sm" : ""
        }${this.props.ssm ? " ssm" : ""}`}
        onClick={() => this.props.click()}
        style={{ background: this.props.color }}
      ></div>
    );
  }
}
