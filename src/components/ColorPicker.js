import React, { Component } from "react";
import { EngineEvent } from "./Engine";
import SquareColor from "./SquareColor";

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [0, 0],
    };
    EngineEvent.addEventListener("Loaded", this.onLoad);
  }

  onLoad = () => {
    for (let index = 0; index < this.props.name.length; index++) {
      this.handleColor(index, 0);
    }
  };

  handleColor(index, j) {
    var s = this.state.selected;
    s[index] = j;
    this.setState({ selected: s });
    this.props.machine.handler[this.props.action](
      this.props.index,
      this.props.options[index][j],
      this.props.options[index][j]
    );
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
