import React, { Component } from "react";
import T1Simg from "./../images/T1S.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex fh pt-2">
          <div className="row align-self-center">
            <Fade left cascade>
              <div className="col-lg-5">
                <h1 className="mt-5">DESIGN YOUR DREAM BUS. </h1>
                <Link to="/select" className="btn btn-dark mt-5">
                  Choose your base model →
                </Link>
                <p className="mt-5">
                  This is a configurator. Option and package combination
                  limitations may apply to yout selection. For more information,
                  consult us.
                </p>
              </div>
            </Fade>
            <Fade right cascade>
              <div className="col-lg-7 p-5">
                <img src={T1Simg} className="img-fluid p-5" alt="..." />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
