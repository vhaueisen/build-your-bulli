import React, { Component } from "react";
import Chevron from "./../images/Chevron.svg";
import { getPool } from "./constants";
import SquareColor from "./SquareColor";

export default class Dropdown extends Component {
  pool = this.props.colorDrop === true ? getPool(this.props.pool) : null;

  constructor(props) {
    super(props);
    this.state = { selected: -1 };
  }

  handleChange(i) {
    this.setState({ selected: i });
    this.props.machine.handler[this.props.action](this.props.index, i);
  }

  render() {
    var stl =
      this.pool !== null && this.state.selected.color !== null
        ? { borderBottom: `8px solid ${this.state.selected.color}` }
        : {};
    return (
      <>
        {this.props.header && <div className="cdrop">{this.props.header}</div>}
        <div className="dropdown mt-2">
          <button
            className="btn dropdown-toggle s-drop"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={stl}
          >
            {this.pool === null
              ? this.state.selected < 0
                ? this.props.name
                : this.props.options[this.state.selected].name
              : this.state.selected < 0
              ? this.props.name
              : this.state.selected.name}
            <img src={Chevron} className="s-drop-i" alt="" />
          </button>
          {this.props.colorDrop === true ? (
            <ul className="dropdown-menu w-100">
              <div className="row g-0 ps-2">
                {this.pool.map((c, i) => {
                  return (
                    <SquareColor
                      color={c.color}
                      sm={this.props.pool === "s_colors"}
                      ssm={this.props.pool === "t_colors"}
                      key={i}
                      click={() => this.handleChange(c)}
                    />
                  );
                })}
              </div>
            </ul>
          ) : (
            <ul className="dropdown-menu w-100 s-drop-ul">
              {[{ name: this.props.name }, ...this.props.options].map(
                (x, i) => {
                  return (
                    <li
                      key={i}
                      className="s-drop-li"
                      onClick={() => {
                        if (i > 0) this.handleChange(i - 1);
                      }}
                    >
                      <div className="d-flex flex-row">
                        <div
                          className={`flex-grow-1 dropdown-item s-drop-n ${
                            i === 0 ? "disabled" : ""
                          }`}
                        >
                          <div>{x.name}</div>
                        </div>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          )}
        </div>
      </>
    );
  }
}
