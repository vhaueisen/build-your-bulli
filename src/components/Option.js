import React, { Component } from "react";

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.options[this.props.options.length - 1],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleVisibility(name) {
    if (this.props.target != null) {
      var state = name == null ? this.state.selected : name;
      console.log(state === this.props.options[0]);
      this.props.machine.handler[this.props.action](
        this.props.index,
        state === this.props.options[0],
        state
      );
    }
  }

  handleInputChange(event) {
    this.setState({
      selected: event.target.value,
    });
    this.handleVisibility(event.target.value);
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
                  checked={this.state.selected === this.props.options[i]}
                  value={this.props.options[i]}
                  onChange={this.handleInputChange}
                />
                <label className="form-check-label">
                  {this.props.options[i]}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
