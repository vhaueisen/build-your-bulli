import Dropdown from "./Dropdown";
import Option from "./Option";
import React from "react";
import dropdowns from "./../Model/dropdowns";
import checks from "./../Model/checks";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function Exterior() {
  onclick = (i) => console.log(i);

  return (
    <>
      <Fade cascade right>
        <h5 className="mt-5">Paint</h5>
        <Dropdown onClick={onclick} {...dropdowns.exterior.frontalLogo} />
      </Fade>
      <Fade cascade right>
        <h5 className="mt-5">Windows</h5>
        <Dropdown onClick={onclick} {...dropdowns.exterior.windowFront} />
        <Dropdown onClick={onclick} {...dropdowns.exterior.windowBackSide} />
        <Dropdown onClick={onclick} {...dropdowns.exterior.windowSide} />
        <Dropdown onClick={onclick} {...dropdowns.exterior.windowCurtain} />
      </Fade>
      <Fade cascade right>
        <h5 className="mt-5">Luggage Rack</h5>
        <Option {...checks.exterior.luggageRack} />
        <Dropdown onClick={onclick} {...dropdowns.exterior.luggageRack} />
        <Option {...checks.exterior.stair} />
      </Fade>
      <Fade cascade right>
        <h5 className="mt-5">Bumpers</h5>
        <Dropdown onClick={onclick} {...dropdowns.exterior.bumperFront} />
        <Dropdown onClick={onclick} {...dropdowns.exterior.bumperBack} />
      </Fade>
      <Fade cascade right>
        <h5 className="mt-5">Mirrors</h5>
        <Dropdown onClick={onclick} {...dropdowns.exterior.mirrorFront} />
        <Dropdown onClick={onclick} {...dropdowns.exterior.mirrorBack} />
      </Fade>
      <Fade cascade right>
        <h5 className="mt-5">Moldings</h5>
        <Option {...checks.exterior.molding} />
        <Dropdown onClick={onclick} {...dropdowns.exterior.moldings} />
      </Fade>
      <Fade cascade right>
        <h5 className="mt-5">Extra Lights</h5>
        <Option {...checks.exterior.reverseLight} />
        <Option {...checks.exterior.fogLight} />
      </Fade>
      <Fade cascade right>
        <h5 className="mt-5">Wheels</h5>
        <Option {...checks.exterior.wheelRim} />
        <Option {...checks.exterior.wheelLogo} />
        <Dropdown onClick={onclick} {...dropdowns.exterior.hubcap} />
      </Fade>
      <Fade cascade right>
        <Link to="/quote" className="btn btn-dark mt-5 p-3 w-100 mb-4">
          GET YOUR QUOTE
        </Link>
      </Fade>
    </>
  );
}
