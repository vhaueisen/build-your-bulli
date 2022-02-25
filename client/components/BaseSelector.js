import React, { Component } from "react";
import { Fade } from "react-reveal";
import { withRouter } from "react-router";

class BaseSelector extends Component {
  render() {
    return (
      <div className="container">
        <div className="row fh">
          <div className="align-self-center">
            <div className="row pt-2">
              <h4>Choose your base model</h4>
            </div>
            <div className="row">
              {this.props.models.map((m, i) => {
                return (
                  <Fade bottom key={i} delay={i * 350}>
                    <div className="col-md-3 p-5 b-select">
                      <div
                        onClick={() => {
                          this.props.onSelect(i);
                          this.props.history.push("/builder/exterior");
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={m.img} alt="..." className="img-fluid mb-3" />
                        <h6>{m.name}</h6>
                      </div>
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BaseSelector);
