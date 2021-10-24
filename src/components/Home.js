import React, { Component } from "react";
import kombiPic from "./../images/kombi.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-lg-5 mt-5 ps-5">
            <h1 className="mt-5">DESIGN YOUR DREAM BUS. </h1>
            <Link to="/select" className="btn btn-dark mt-5">
              Choose your base model →
            </Link>
            <p className="mt-5">
              This is a configurator. Option and package combination limitations
              may apply to yout selection. For more information, consult us.
            </p>
          </div>
          <div className="col-lg-7 p-5">
            <img src={kombiPic} className="img-fluid p-5" alt="..." />
          </div>
        </div>
      </div>
    );
  }
}
