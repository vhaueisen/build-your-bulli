import React, { Component } from "react";
import SquareColor from "./SquareColor";
import { getPool } from "./constants";

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [0, 0],
    };
  }

  handleChange(index, j, c) {
    if (!c) c = { color: "#000" };
    var s = this.state.selected;
    s[index] = j;
    this.setState({ selected: s });
    if (index === 0) {
      global.pColor = c;
      this.props.machine.refreshMainColors();
    } else {
      global.sColor = c;
      this.props.machine.refreshMainColors();
    }
    this.props.machine.handler[this.props.action](this.props.index, index, c);
  }

  mapPropsToPicker() {
    var r = [];

    for (let index = 0; index < this.props.name.length; index++) {
      var pool = getPool(this.props.options[index]);
      r.push(
        <div
          key={index}
          className={`col-sm-6 border-bottom pb-3 ${
            index !== this.props.name.length - 1 ? "border-end" : ""
          }`}
        >
          <div className="font-light mb-3">{this.props.name[index]}</div>
          <div className="row g-0">
            {pool.map((color, j) => (
              <SquareColor
                color={color.color}
                click={() => this.handleChange(index, j, color)}
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
