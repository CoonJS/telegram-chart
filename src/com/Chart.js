import React, { Component } from 'react'

import Grid from './Grid';

export default class Chart extends Component {

    width = 600;
    height = 400;

    calcGridScale = () => {
        const { children } = this.props;

        let maxValue = 0;
        let minValue = +Infinity;

        let dataLength = 0;

        React.Children.forEach(children, child => {
            const dataMax = Math.max( ...child.props.data );
            const dataMin = Math.min( ...child.props.data );
            maxValue = dataMax > maxValue ? dataMax : maxValue;
            minValue = dataMin < minValue ? dataMin : minValue;

            dataLength = child.props.data.length;

            return React.cloneElement(child, {test : 3});
        });

        return {
            maxValue,
            minValue,
            dataLength
        };

    }

    render() {

        const { width, height } = this;
        const { maxValue, minValue, dataLength } = this.calcGridScale();

        return (
            <div style={{ width: '100%', padding: '32px', display: 'flex', justifyContent: 'center'}}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={this.width} height={this.height} viewBox={`0 0 ${this.width} ${this.height}`}>
                    <Grid
                        width={width}
                        height={height}
                        maxValue={maxValue}
                        minValue={minValue}
                        count={dataLength}
                    />
                    {React.Children.map(this.props.children, child => (
                        React.cloneElement(child, { width, height, maxValue, minValue })
                    ))}
                </svg>
            </div>
        )
    }
}
