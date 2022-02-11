import React, { Component } from "react";
import hangar from "./../images/hangar.png";
import "./App.css";
import "../fonts/jsPDF-Aller";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = { printing: false };
  }

  summarizeParts() {
    var sections = {
      exterior: [],
      interior: [],
    };
    for (var key in sections) {
      if (!this.props.machine.loaded) this.props.machine.onLoad();
      for (let i = 0; i < this.props.machine.model[key].length; i++) {
        const item = this.props.machine.model[key][i];
        if (item.lock && !item.lock.state && !item.lock.control) continue;
        switch (item.kind) {
          default:
            sections[key].push(
              <div className="quote-header1 mt-3" key={i}>
                {item.name}
              </div>
            );
            break;
          case "check":
            sections[key].push(
              <div
                className="quote-content"
                key={i}
              >{`${item.name}: ${item.selected}`}</div>
            );
            break;
          case "dropdown":
          case "dropdownColor":
            sections[key].push(
              <div className="quote-content" key={i}>{`${
                item.header ? item.header : item.name
              }: ${item.selected}`}</div>
            );
            break;
          case "colorPicker":
            sections[key].push(
              <div
                className="quote-content"
                key={i}
              >{`${item.name[0]}: ${item.selected[0]}`}</div>
            );
            sections[key].push(
              <div
                className="quote-content"
                key={i}
              >{`${item.name[1]}: ${item.selected[1]}`}</div>
            );
            break;
        }
      }
    }
    return sections;
  }

  render() {
    const summary = this.summarizeParts();
    return (
      <div style={{ width: "100%" }}>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-sm-10 d-flex">
              <div className="align-self-center">
                <div className="quote-title">
                  {this.props.machine.model.name}
                </div>
                <div className="quote-desc">
                  {this.props.machine.model.desc}
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <img
                src={hangar}
                alt="..."
                className="img-fluid align-self-center h-logo"
              />
            </div>
          </div>
          <div className="quote-header1">Base model</div>
          <div className="quote-content">{this.props.machine.model.name}</div>
          <div className="row">
            <div className="col-sm-6">
              <div className="quote-header2 mt-5">EXTERIOR</div>
              {summary.exterior}
            </div>
            <div className="col-sm-6">
              <div className="quote-header2 mt-5">INTERIOR</div>
              {summary.interior}
            </div>
          </div>
        </div>
        <div style={{ bottom: "0px", position: "absolute" }}>
          <footer className="border-top border-black">
            <div className="row ms-4 mt-4">
              <div className="col-sm-3 quote-content align-self-center">
                info@hangar426.com
                <br /> sales@hangar426.com
                <br /> accounting@hangar426.com
              </div>
              <div className="col-sm-3 quote-content align-self-center">
                <b>Firmensitz</b>
                <br />
                Englschalkinger Str. 203 - 81927 München
              </div>
              <div className="col-sm-3 quote-content align-self-center">
                <b>
                  <i>Showroom / Verkauf</i>
                </b>
                <br />
                Emmericher Str. 108 - 47138 Duisburg
              </div>
              <div className="col-sm-3 quote-content align-self-center">
                <b>HANGAR426.COM</b>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
