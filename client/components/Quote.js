import React, { Component } from "react";
import { Fade } from "react-reveal";
import Report from "./Report";
import jsPDF from "jspdf";
import { customized } from "./Engine";
import ReactDOMServer from "react-dom/server";

export default class Quote extends Component {
  state = {
    name: "",
    email: "",
    questions: "",
    msg: null,
  };

  componentDidMount() {
    this.pdf();
  }

  pdf = () => {
    let pdf = new jsPDF("p", "pt", "a4");
    let pWidth = pdf.internal.pageSize.width;
    let srcWidth = document.getElementById("printable").clientWidth;
    let margin = 9;
    let scale = (pWidth - margin * 2) / srcWidth;
    pdf.html(
      ReactDOMServer.renderToStaticMarkup(
        <Report machine={this.props.machine} />
      ),
      {
        x: margin,
        y: margin,
        html2canvas: {
          scale: scale,
        },
        callback: () => {
          this.pdf_document = pdf.output("datauristring", {
            filename: `Build you Bus_${new Date().toDateString()}.pdf`,
          });
          this.blob();
        },
      }
    );
  };

  blob = () => {
    fetch(this.pdf_document)
      .then((res) => res.blob())
      .then((blob) => {
        this.pdf_blob_url = URL.createObjectURL(blob);
      });
  };

  save = () => {
    this.setState({
      msg: null,
    });
    window.open(this.pdf_blob_url);
  };

  send = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: this.pdf_document,
        user: {
          name: this.state.name,
          email: this.state.email,
          questions: this.state.questions,
        },
      }),
    };
    fetch("/api", requestOptions);
  };

  submit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState({
        msg: { type: "danger ", msg: "Please, fill in your full name" },
      });
    } else if (!this.state.email) {
      this.setState({
        msg: { type: "danger ", msg: "Please, fill in your e-mail" },
      });
    } else {
      this.setState({
        msg: {
          type: "success ",
          msg: "Your quote has been received succesfully!",
        },
      });
      this.send();
    }
  };

  formChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
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

              <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                  <label htmlFor="InputName" className="font-light mt-5 mb-2">
                    <b>Full Name</b>*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="InputName"
                    aria-describedby="name"
                    placeholder="Enter name..."
                    name="name"
                    value={this.state.name}
                    onChange={this.formChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputEmail" className="font-light mt-3 mb-2">
                    <b>E-mail</b>*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    aria-describedby="email"
                    placeholder="your@email.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.formChange}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="InputComments"
                    className="font-light mt-5 mb-2"
                  >
                    <b>Any questions or special requests?</b> (Optional)
                  </label>
                  <textarea
                    type="textarea"
                    className="quote-request form-control"
                    id="InputComments"
                    placeholder="Enter questions..."
                    name="questions"
                    value={this.state.questions}
                    onChange={this.formChange}
                  />
                </div>
                <button
                  className="btn btn-dark p-3 w-100 mt-5"
                  type="submit"
                  value="Submit"
                >
                  GET YOUR QUOTE
                </button>
              </form>
              <button
                onClick={this.save}
                className="btn btn-light mt-3 p-3 w-100 mb-3 border-dark"
              >
                PRINT AND SAVE
              </button>
              {this.state.msg && this.state.msg.msg && (
                <div
                  className={`alert alert-${this.state.msg.type} fade show mt-2 fadeOut`}
                  role="alert"
                >
                  <strong>{this.state.msg.msg}</strong>
                </div>
              )}
            </div>
          </div>
          <div
            className="print"
            id="printable"
            style={{ visibility: "hidden", minHeight: "1px" }}
          ></div>
        </div>
      </div>
    );
  }
}
