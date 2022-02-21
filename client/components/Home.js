import React, { Component } from "react";
import T1S from "./../images/T1S.png";
import T15 from "./../images/T15.png";
import T1Samba from "./../images/T1Samba.png";
import T1SingleCab from "./../images/T1SingleCab.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default class Home extends Component {
  imgPool = [T1S, T1Samba, T15, T1SingleCab];
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
                <img
                  src={
                    this.imgPool[
                      Math.floor(Math.random() * this.imgPool.length)
                    ]
                  }
                  className="img-fluid p-5"
                  alt="..."
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
