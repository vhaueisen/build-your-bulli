import React, { Component } from "react";
import kombiPic from "./../images/kombi.png";
import { Fade } from "react-reveal";
import Report from "./Report";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default class Quote extends Component {
  pdf = () => {
    var printDiv = document.getElementById("printable");
    html2canvas(printDiv, {
      onclone: function (clonedDoc) {
        clonedDoc.getElementById("printable").style.display = "block";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`Build you Bus_${new Date().toDateString()}.pdf`);
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 p-0 m-0 pt-5 g-container text-center">
            <Fade cascade left>
              <img
                src={kombiPic}
                alt="..."
                className="img-fluid mt-5 quote-img"
              />
            </Fade>
          </div>
          <div className="col-lg-4 p-5 mx-height">
            <Fade cascade right>
              <h3 className="mt-5">
                {this.props.machine.model.name.toUpperCase()}
              </h3>
            </Fade>
            <Fade cascade right>
              <div className="font-light mb-2">
                {this.props.machine.model.desc.toUpperCase()}
              </div>
              <hr />
            </Fade>
            <Fade cascade right>
              <div className="font-light mt-5 mb-2">
                <b>Any questions or special requests?</b> (Optional)
              </div>
            </Fade>
            <Fade cascade right>
              <input type="textarea" className="quote-request" />
            </Fade>
            <Fade cascade right>
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
            </Fade>
          </div>
        </div>
        <div className="print" id="printable" style={{ display: "none" }}>
          <Report machine={this.props.machine} />
        </div>
      </div>
    );
  }
}
