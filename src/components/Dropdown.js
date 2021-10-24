import React from "react";
import Chevron from "./../images/Chevron.svg";

export default function Dropdown({ id, name, options, onClick }) {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle s-drop"
        type="button"
        id={id}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
        <img src={Chevron} className="s-drop-i" alt="..." />
      </button>
      <ul className="dropdown-menu w-100 s-drop-ul" aria-labelledby={id}>
        {options.map((x, i) => {
          return (
            <li key={i} className="s-drop-li">
              <div className="d-flex flex-row">
                {x.color && (
                  <div
                    className="s-drop-c"
                    style={{ background: x.color }}
                  ></div>
                )}
                <div
                  className="flex-grow-1 dropdown-item s-drop-n"
                  onClick={(e) => onClick(e, i)}
                >
                  <div>{x.name}</div>
                  {x.desc && (
                    <div>
                      <p>{x.desc}</p>
                    </div>
                  )}
                </div>
                {x.price && <div className="s-drop-p">{"€" + x.price}</div>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
