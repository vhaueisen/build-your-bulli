import React, { Component } from "react";
import { Fade } from "react-reveal";
import Report from "./Report";
import jsPDF from "jspdf";
import { customized } from "./Engine";

export default class Quote extends Component {
  pdf = () => {
    document.getElementById("printable").style.display = "block";
    let pdf = new jsPDF("p", "pt", "a4");
    let pWidth = pdf.internal.pageSize.width;
    let srcWidth = document.getElementById("printable").clientWidth;
    let margin = 18;
    let scale = (pWidth - margin * 2) / srcWidth;
    pdf.html(document.getElementById("printable"), {
      x: margin,
      y: margin,
      html2canvas: {
        scale: scale,
      },
      callback: function () {
        window.open(
          pdf.output("bloburl", {
            filename: `Build you Bus_${new Date().toDateString()}.pdf`,
          })
        );
        document.getElementById("printable").style.display = "none";
      },
    });
  };

  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row fh">
            <div className="col-lg-8 p-0 m-0 text-center align-self-center">
              <Fade cascade left>
                <img
                  src={customized}
                  alt="..."
                  className="img-fluid quote-img"
                />
              </Fade>
            </div>
            <div className="col-lg-4 p-5 mx-height align-self-center">
              <h4>{this.props.machine.model.name.toUpperCase()}</h4>
              <div className="font-light mb-2">
                {this.props.machine.model.desc.toUpperCase()}
              </div>
              <hr />

              <div className="font-light mt-5 mb-2">
                <b>Any questions or special requests?</b> (Optional)
              </div>

              <input type="textarea" className="quote-request" />

              <button
                onClick={this.pdf}
                to="/report"
                className="btn btn-light mt-5 p-3 w-100 mb-3 border-dark"
              >
                PRINT AND SAVE
              </button>
              <button className="btn btn-dark p-3 w-100 mb-4">
                GET YOUR QUOTE
              </button>
            </div>
          </div>
          <div className="print" id="printable" style={{ display: "none" }}>
            <Report machine={this.props.machine} />
          </div>
        </div>
      </div>
    );
  }
}
