import React, { Component, Fragment } from 'react'

export default class Grid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: 40,
      topOffset: 32,
      bottomOffset: 32,
      linesCount: 5,
    }
  }

  render() {
    const { maxValue, minValue, width, height } = this.props
    const { linesCount } = this.state
    const delta = maxValue / 5

    let lines = []

    for (let i = 0; i < linesCount + 1; i++) {
      lines.push(i)
    }

    return (
      <g>
        {lines.map((line, idx, lines) => {
          const scale = (delta * idx) / maxValue
          const isFirst = idx === 0
          const isLast = lines.length - 1 === idx

          let y = height * (1 - scale)

          if (isFirst) {
            y = height
          }

          if (isLast) {
            y = minValue
          }

          return (
            <g key={idx}>
              <text
                stroke="#dfe1e5"
                x={0}
                y={y - 4}
                style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: '100' }}
              >
                {Math.floor(delta * idx)}
              </text>
              <line x1={0} y1={y} x2={width} y2={y} stroke="#dfe1e5" />
            </g>
          )
        })}
      </g>
    )
  }
}
