import Dropdown from "./Dropdown";
import Option from "./Option";
import React from "react";
import dropdowns from "./../Model/dropdowns";
import checks from "./../Model/checks";
import { Link } from "react-router-dom";

export default function Exterior() {
  onclick = (i) => console.log(i);
  return (
    <>
      <h5 className="mt-5">Paint</h5>
      <Dropdown onClick={onclick} {...dropdowns.exterior.frontalLogo} />
      <h5 className="mt-5">Windows</h5>
      <Dropdown onClick={onclick} {...dropdowns.exterior.windowFront} />
      <Dropdown onClick={onclick} {...dropdowns.exterior.windowBackSide} />
      <Dropdown onClick={onclick} {...dropdowns.exterior.windowSide} />
      <Dropdown onClick={onclick} {...dropdowns.exterior.windowCurtain} />
      <h5 className="mt-5">Luggage Rack</h5>
      <Option {...checks.exterior.luggageRack} />
      <Dropdown onClick={onclick} {...dropdowns.exterior.luggageRack} />
      <Option {...checks.exterior.stair} />
      <h5 className="mt-5">Bumpers</h5>
      <Dropdown onClick={onclick} {...dropdowns.exterior.bumperFront} />
      <Dropdown onClick={onclick} {...dropdowns.exterior.bumperBack} />
      <h5 className="mt-5">Mirrors</h5>
      <Dropdown onClick={onclick} {...dropdowns.exterior.mirrorFront} />
      <Dropdown onClick={onclick} {...dropdowns.exterior.mirrorBack} />
      <h5 className="mt-5">Moldings</h5>
      <Option {...checks.exterior.molding} />
      <Dropdown onClick={onclick} {...dropdowns.exterior.moldings} />
      <h5 className="mt-5">Extra Lights</h5>
      <Option {...checks.exterior.reverseLight} />
      <Option {...checks.exterior.fogLight} />
      <h5 className="mt-5">Wheels</h5>
      <Option {...checks.exterior.wheelRim} />
      <Option {...checks.exterior.wheelLogo} />
      <Dropdown onClick={onclick} {...dropdowns.exterior.hubcap} />
      <Link to="/quote" className="btn btn-dark mt-5 p-3 w-100 mb-4">
        GET YOUR QUOTE
      </Link>
    </>
  );
}
