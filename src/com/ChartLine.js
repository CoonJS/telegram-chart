import React, { Component } from 'react'

export default class ChartLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { stroke, data, height, width, maxValue } = this.props;
        const deltaX = Math.floor(width / data.length);

        return (
            <g>
                {data.map((value, idx, data) => {
                    const scale = value / maxValue;
                    const isFirst = idx === 0;
                    const isLast = idx === data.length - 1;
                    const y1 = height * (1 -  scale);
                    const y2 =  isLast ? height * (1 - scale ) : height * (1 - data[idx + 1] / maxValue);

                    return (
                        <line
                            key={idx}
                            x1={isFirst ? 0 : idx * deltaX}
                            y1={y1}
                            x2={(idx + 1) * deltaX}
                            y2={y2}
                            stroke={stroke || 'black'} strokeWidth="3"
                        />
                    )
                })}
            </g>
        )
    }
}
