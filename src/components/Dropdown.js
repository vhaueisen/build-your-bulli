import React, { useState } from "react";
import Chevron from "./../images/Chevron.svg";

export default function Dropdown({ options, name, onClick }) {
  const [selected, select] = useState(-1);
  return (
    <div className="dropdown mt-3">
      <button
        className="btn dropdown-toggle s-drop"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selected < 0 ? name : options[selected].name}
        <img src={Chevron} className="s-drop-i" alt="..." />
      </button>
      <ul className="dropdown-menu w-100 s-drop-ul">
        {options.map((x, i) => {
          return (
            <li key={i} className="s-drop-li">
              <div className="d-flex flex-row">
                {x.color != null && (
                  <div
                    className="s-drop-c"
                    style={{ background: x.color }}
                  ></div>
                )}
                <div
                  className="flex-grow-1 dropdown-item s-drop-n"
                  onClick={(e) => {
                    select(i);
                    onClick(e, i);
                  }}
                >
                  <div>{x.name}</div>
                  {x.desc != null && (
                    <div className="s-drop-p s-drop-desc">{x.desc}</div>
                  )}
                </div>
                {x.price != null && (
                  <div className="s-drop-p">{`€${x.price.toFixed(2)}`}</div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
