import React, { Component, Fragment } from 'react'

export default class ChartLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { stroke, data, height, width, maxValue, labels } = this.props;
        const deltaX = Math.floor(width / labels.length);

        return (
            <g>
                {data.map((value, idx, data) => {
                    const scale = value / maxValue;
                    const isFirst = idx === 0;
                    const isLast = idx === data.length - 1;
                    const x1 = isFirst ? 0 : idx * deltaX;
                    const x2 = (idx + 1) * deltaX;
                    const y1 = height * (1 -  scale);
                    const y2 =  isLast ? height * (1 - scale ) : height * (1 - data[idx + 1] / maxValue);

                    const date = new Date(labels[idx]);
                    const formattedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

                    return (
                        <g key={idx}>
                            <line
                                x1={x1}
                                y1={y1}
                                x2={(idx + 1) * deltaX}
                                y2={y2}
                                stroke={stroke || 'black'} strokeWidth="3"
                            />
                            <g>
                                <text y={height} x={(idx + 1) * deltaX} fill="#fff" transform={`rotate(20)`}>{0}</text>
                            </g>
                        </g>
                    )
                })}
            </g>
        )
    }
}
