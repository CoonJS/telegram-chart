import React, { Component, Fragment } from "react";

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 40,
      topOffset: 32,
      bottomOffset: 32,
      linesCount: 5
    };
  }

  render() {
    const { maxValue, width, height } = this.props;
    const { linesCount } = this.state;
    const step = Math.floor(maxValue / 5);

    let lines = [];

    for (let i = 0; i < linesCount + 1; i++) {
      lines.push(i);
    }

    return (
      <g>
        {lines.map((line, idx) => {
          const y = height * (1 - idx / 5);
          return (
            <g key={idx}>
              <text
                stroke="#dfe1e5"
                x={0}
                y={y - 4}
                style={{
                  fontFamily: "monospace",
                  fontSize: "12px",
                  fontWeight: "100"
                }}
              >
                {idx * step}
              </text>
              <line x1={0} y1={y} x2={width} y2={y} stroke="#dfe1e5" />
            </g>
          );
        })}
      </g>
    );
  }
}
