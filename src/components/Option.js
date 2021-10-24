import React, { Component } from "react";

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.options[this.props.options.length - 1],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selected: event.target.value,
    });
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
                  id={`${this.props.id}${i}`}
                  checked={this.state.selected === this.props.options[i]}
                  value={this.props.options[i]}
                  onChange={this.handleInputChange}
                />
                <label
                  className="form-check-label"
                  htmlFor={`${this.props.id}${i}`}
                >
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
