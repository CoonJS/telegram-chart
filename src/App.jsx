import React, { Component } from 'react';

import './global.css';

import data from './assets/data/chart_data'

import Chart from './com/Chart';
import ChartLine from './com/ChartLine';
import SwitchModeButton from './com/SwitchModeButton/SwitchModeButton.js'

const DAY_BACKGROUND = '#fff';
const NIGHT_BACKGROUND = '#262F3D';

export default class App extends Component {
  state = {
    isNightMode: true,
    chartData: data[0]
  }

  renderCharts = () => {
    const chartData = this.state.chartData;
    return Object.keys(chartData.names).map(chartName => {
      const chartColor = chartData.colors[chartName];

      const dataArray = chartData.columns.filter(column => column[0] === chartName);
      const [key, ...data] = dataArray[0];

      return (
        <ChartLine
          key={chartName}
          data={data}
          stroke={chartColor}
        />
      );

    })
  }

  handleSwitchMode = () => {
    const { isNightMode } = this.state;
    this.setState({ isNightMode: !isNightMode })
  }


  render() {
    const { isNightMode } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: isNightMode ? NIGHT_BACKGROUND : DAY_BACKGROUND }}>

        <Chart>
          {this.renderCharts()}
        </Chart>
        <SwitchModeButton isNightMode={isNightMode} handleSwitchMode={this.handleSwitchMode} />

      </div>
    );
  }
}
