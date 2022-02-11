import React, { Component } from "react";
import kombiPic from "./../images/kombi.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default class BaseSelector extends Component {
  render() {
    return (
      <div className="container">
        <div className="row fh">
          <div className="align-self-center">
            <div className="row pt-2">
              <h4>Choose your base model</h4>
            </div>
            <div className="row">
              <Fade bottom>
                <div className="col-md-3 p-5 b-select">
                  <Link to="/builder">
                    <img src={kombiPic} alt="..." className="img-fluid mb-3" />
                    <h6>T1 Standard</h6>
                  </Link>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-3 p-5 b-select">
                  <Link to="/builder">
                    <img src={kombiPic} alt="..." className="img-fluid mb-3" />
                    <h6>T1 “Samba”</h6>
                  </Link>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-3 p-5 b-select">
                  <Link to="/builder">
                    <img src={kombiPic} alt="..." className="img-fluid mb-3" />
                    <h6>T1 Single Cab</h6>
                  </Link>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-3 p-5 b-select">
                  <Link to="/builder">
                    <img src={kombiPic} alt="..." className="img-fluid mb-3" />
                    <h6>T1,5</h6>
                  </Link>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
