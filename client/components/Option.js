import React, { Component } from "react";

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.options.length - 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var i = parseInt(event.target.value);
    this.setState({
      selected: i,
    });
    if (this.props.target) {
      this.props.machine.handler[this.props.action](this.props.index, i);
    }
  }

  render() {
    return (
      <div className="s-check pb-3 mt-3">
        <div className="d-flex flex-row p-2">
          <div className="flex-grow-1 p-2">{this.props.name}</div>
          {this.props.options.map((x, i) => {
            return (
              <div className="form-check ps-5 mt-2" key={i}>
                <input
                  className="form-check-input s-check-i"
                  type="checkbox"
                  checked={this.state.selected === i}
                  value={i}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">{x}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
