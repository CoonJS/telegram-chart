import React, { Component, Fragment } from 'react'

export default class Grid extends Component {


    constructor(props) {
        super(props);

        this.state = {
            scale: 40,
            topOffset: 32,
            bottomOffset: 32
        };
    }

    render() {
        const {maxValue, count, width, height} = this.props;
        const delta = Math.floor(height / count);
        const step = Math.round(maxValue/ count);

        let lines = [];

        for (let i = 0; i < count; i ++) {
            lines.push(i)
        }

        return (
            <g>
                {lines.map((line, idx, lines) => (
                    <g key={idx}>
                        <text
                            stroke="#dfe1e5"
                            x={0}
                            y={idx === 0 ? height - 10 : (lines.length - idx) * delta - 10}
                            style={{fontFamily: 'Arial', fontSize: '12px', fontWeight: '100'}}
                        >
                            {step * idx}
                        </text>
                        <line
                            x1={0}
                            y1={idx === 0 ? height : (lines.length - idx) * delta}
                            x2={width}
                            y2={idx === 0 ? height : (lines.length - idx) * delta}
                            stroke="#dfe1e5"
                        />
                    </g>
                ))}
            </g>
        )
    }
}
