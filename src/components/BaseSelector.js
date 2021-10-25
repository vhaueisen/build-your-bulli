import React, { Component } from "react";
import kombiPic from "./../images/kombi.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default class BaseSelector extends Component {
  render() {
    return (
      <div className="container-fluid p-5">
        <div className="row mt-5 p-5">
          <div className="row mt-5">
            <Fade cascade top>
              <h4 className="mt-5">Choose your base model</h4>
            </Fade>
          </div>
          <div className="row">
            <Fade bottom>
              <div className="col-md-3 p-4 b-select">
                <Link to="/builder">
                  <img src={kombiPic} alt="..." className="img-fluid" />
                  <h6>T1 Standard</h6>
                </Link>
              </div>
            </Fade>{" "}
            <Fade bottom>
              <div className="col-md-3 p-4 b-select">
                <Link to="/builder">
                  <img src={kombiPic} alt="..." className="img-fluid" />
                  <h6>T1 “Samba”</h6>
                </Link>
              </div>
            </Fade>{" "}
            <Fade bottom>
              <div className="col-md-3 p-4 b-select">
                <Link to="/builder">
                  <img src={kombiPic} alt="..." className="img-fluid" />
                  <h6>T1 Single Cab</h6>
                </Link>
              </div>
            </Fade>{" "}
            <Fade bottom>
              <div className="col-md-3 p-4 b-select">
                <Link to="/builder">
                  <img src={kombiPic} alt="..." className="img-fluid" />
                  <h6>T1,5</h6>
                </Link>
              </div>
            </Fade>{" "}
          </div>
        </div>
      </div>
    );
  }
}
