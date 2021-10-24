import React, { Component } from "react";
import kombiPic from "./../images/kombi.png";
import { Link } from "react-router-dom";

export default class Quote extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 p-0 m-0 pt-5 g-container text-center">
            <img
              src={kombiPic}
              alt="..."
              className="img-fluid mt-5 quote-img"
            />
          </div>
          <div className="col-lg-3 p-5 mx-height">
            <h3 className="mt-5">T1 BULLI MODEL NAME</h3>
            <div className="font-light mb-2">
              1493 cm³ engine with 32 kW / 44 PS (from 1965)
            </div>
            <hr />
            <div className="quote-price mt-4 mb-4">€50,000</div>
            <div className="font-light">Total price with selected parts.</div>
            <div className="font-light mt-5 mb-2">
              <b>Any questions or special requests?</b> (Optional)
            </div>
            <input type="textarea" className="quote-request" />
            <button className="btn btn-light mt-5 p-3 w-100 mb-3 border-dark">
              PRINT AND SAVE
            </button>
            <button className="btn btn-dark p-3 w-100 mb-4">
              GET YOUR QUOTE
            </button>
            <div className="mt-5 mb-5 p-5" />
          </div>
        </div>
      </div>
    );
  }
}
