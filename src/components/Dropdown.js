import React, { Component } from "react";
import Chevron from "./../images/Chevron.svg";
import { EngineEvent } from "./Engine";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: -1 };
    EngineEvent.addEventListener("Loaded", this.onLoad);
  }

  onLoad = () => {
    this.handleVisibility();
  };

  handleVisibility(index) {
    this.props.options.forEach((op, i) => {
      if (op.target != null) {
        var state = index == null ? i === this.state.selected : i === index;
        this.props.machine.handler[this.props.action](this.props.index, state);
      }
    });
  }

  render() {
    return (
      <div className="dropdown mt-3">
        <button
          className="btn dropdown-toggle s-drop"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {this.state.selected < 0
            ? this.props.name
            : this.props.options[this.state.selected].name}
          <img src={Chevron} className="s-drop-i" alt="..." />
        </button>
        <ul className="dropdown-menu w-100 s-drop-ul">
          {this.props.options.map((x, i) => {
            return (
              <li key={i} className="s-drop-li">
                <div className="d-flex flex-row">
                  {x.color != null && (
                    <div
                      className="s-drop-c"
                      style={{ background: x.color }}
                    ></div>
                  )}
                  <div
                    className="flex-grow-1 dropdown-item s-drop-n"
                    onClick={(e) => {
                      this.setState({ selected: i });
                      this.handleVisibility(i);
                    }}
                  >
                    <div>{x.name}</div>
                    {x.desc != null && (
                      <div className="s-drop-p s-drop-desc">{x.desc}</div>
                    )}
                  </div>
                  {x.price != null && (
                    <div className="s-drop-p">{`€${x.price.toFixed(2)}`}</div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
