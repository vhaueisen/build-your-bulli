import Dropdown from "./Dropdown";
import Option from "./Option";
import React from "react";
import { Link } from "react-router-dom";
import ColorPicker from "./ColorPicker";

const onclick = (i) => console.log(i);

export default class CustomizationPanel extends React.Component {
  render() {
    return (
      <div>
        {this.props.model.map((item, i) => {
          switch (item.kind) {
            default:
              return (
                <h5 className="mt-5" key={i}>
                  {item.name}
                </h5>
              );
            case "check":
              return <Option {...item} onClick={onclick} key={i}></Option>;
            case "dropdown":
              return <Dropdown {...item} onClick={onclick} key={i}></Dropdown>;
            case "colorPicker":
              return (
                <ColorPicker {...item} onClick={onclick} key={i}></ColorPicker>
              );
          }
        })}
        <Link to="/quote" className="btn btn-dark mt-5 p-3 w-100 mb-4">
          GET YOUR QUOTE
        </Link>
      </div>
    );
  }
}
