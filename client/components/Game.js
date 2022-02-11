import "./App.css";
import React, { Component } from "react";
import { Render } from "./Engine";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.mount.appendChild(Render(this));
  }

  render() {
    return (
      <>
        <div className="col-lg-9 p-0 m-0 g-container">
          {this.state.loading && (
            <>
              <div className="progress-indicator">
                {isNaN(this.state.progress)
                  ? 0
                  : Math.trunc(this.state.progress)}
                %
              </div>
              <div className="spinner-border loader" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </>
          )}
          <div
            ref={(ref) => (this.mount = ref)}
            style={{ height: this.state.loading ? "0px" : "" }}
          />
        </div>
      </>
    );
  }
}

export default Game;
