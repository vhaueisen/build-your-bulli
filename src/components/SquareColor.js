import React, { Component } from "react";

export default class SquareColor extends Component {
  render() {
    return (
      <div className="squareColor" onClick={() => this.props.click()}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter={`url(#square_color_filter${this.props.index})`}>
            <rect
              x="8.97754"
              y="8.95068"
              width="42.3708"
              height="42.3708"
              rx="8"
              fill={this.props.color}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0819 48.9839C14.7217 41.6325 20.2078 33.9893 27.2592 26.9379C34.1829 20.0142 41.6772 14.5997 48.9055 10.9602C47.4939 9.70981 45.6372 8.95068 43.6031 8.95068H16.9775C12.5593 8.95068 8.97754 12.5324 8.97754 16.9507V43.5762C8.97754 45.6613 9.77517 47.56 11.0819 48.9839Z"
              fill="url(#paint0_radial_119_664)"
            />
          </g>
          <defs>
            <filter
              id={`square_color_filter${this.props.index}`}
              x="0.977539"
              y="0.950684"
              width="58.3708"
              height="58.3708"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              {this.props.selected && (
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
              )}
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_119_664"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_119_664"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_119_664"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(51.1526 50.6573) rotate(-135.53) scale(57.1486 57.0066)"
            >
              <stop offset="0.368562" stopColor="#E5E5E5" />
              <stop offset="0.925574" stopColor="#E5E5E5" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }
}
