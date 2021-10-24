import Dropdown from "./Dropdown";
import Option from "./Option";
import React from "react";
import dropdowns from "./../Model/dropdowns";
import checks from "./../Model/checks";
import { Link } from "react-router-dom";

export default function Interior() {
  onclick = (i) => console.log(i);

  return (
    <div>
      <h5 className="mt-5">Seats</h5>
      <Dropdown onClick={onclick} {...dropdowns.interior.seatNumber} />
      <Dropdown onClick={onclick} {...dropdowns.interior.seatColor} />
      <Dropdown onClick={onclick} {...dropdowns.interior.seatMaterial} />
      <h5 className="mt-5">Cup holders</h5>
      <Option {...checks.interior.cupHolder} />
      <h5 className="mt-5">Floor</h5>
      <Dropdown onClick={onclick} {...dropdowns.interior.materials} />
      <Link to="/quote" className="btn btn-dark mt-5 p-3 w-100 mb-4">
        GET YOUR QUOTE
      </Link>
    </div>
  );
}
