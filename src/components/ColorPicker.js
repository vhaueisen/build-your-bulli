import React, { Component } from "react";
import SquareColor from "./SquareColor";

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [0, 0],
    };
  }
  handleColor(index, j) {
    var s = this.state.selected;
    s[index] = j;
    this.setState({ selected: s });
  }

  mapPropsToPicker() {
    var r = [];
    for (let index = 0; index < this.props.name.length; index++) {
      r.push(
        <div
          key={index}
          className={`col-sm-6 border-bottom pb-3 ${
            index !== this.props.name.length - 1 ? "border-end" : ""
          }`}
        >
          <div className="font-light mb-3">{this.props.name[index]}</div>
          <div className="row g-0">
            {this.props.options[index].map((c, j) => (
              <SquareColor
                color={c}
                click={() => this.handleColor(index, j)}
                selected={this.state.selected[index] === j}
                index={this.props.options[0].length * index + j}
                key={j}
              />
            ))}
          </div>
        </div>
      );
    }
    return r;
  }
  render() {
    return <div className="row">{this.mapPropsToPicker()}</div>;
  }
}
