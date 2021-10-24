import React from "react";
import Dropdown from "./Dropdown";

export default function Interior() {
  return (
    <div>
      <h5>Seats</h5>
      <Dropdown
        name="Models and materials"
        id="immd"
        options={[
          {
            name: "Model 1",
            desc: "1 seat driver, 2 seats beside, 3 bank in the middle and 3 bank in the back",
          },
          { name: "Model 2" },
        ]}
        onClick={(e, i) => console.log(i)}
      />
      <h5>Cup holders</h5>
      <h5>Floor</h5>
      <h5>Indicators</h5>
      <h5>Mirrors</h5>
      <h5>Moldings</h5>
      <h5>Extra Lights</h5>
      <h5>Wheels</h5>
      <button className="btn btn-dark">GET YOUR QUOTE</button>
    </div>
  );
}
