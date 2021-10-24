import React, { Component } from "react";
import kombiPic from "./../images/kombi.png";
import { Link } from "react-router-dom";

export default class BaseSelector extends Component {
  render() {
    return (
      <div className="container-fluid p-5">
        <div className="row mt-5 p-5">
          <div className="row mt-5">
            <h4 className="mt-5">Choose your base model</h4>
          </div>
          <div className="row">
            <div className="col-md-3 p-4 b-select">
              <Link to="/builder">
                <img src={kombiPic} alt="..." className="img-fluid" />
                <h6>T1 Standard</h6>
              </Link>
            </div>
            <div className="col-md-3 p-4 b-select">
              <Link to="/builder">
                <img src={kombiPic} alt="..." className="img-fluid" />
                <h6>T1 “Samba”</h6>
              </Link>
            </div>
            <div className="col-md-3 p-4 b-select">
              <Link to="/builder">
                <img src={kombiPic} alt="..." className="img-fluid" />
                <h6>T1 Single Cab</h6>
              </Link>
            </div>
            <div className="col-md-3 p-4 b-select">
              <Link to="/builder">
                <img src={kombiPic} alt="..." className="img-fluid" />
                <h6>T1,5</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
