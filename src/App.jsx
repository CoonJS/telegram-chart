import React, { Component } from 'react';

// import './global.css';

import data from './assets/data/chart_data'

import Chart from './com/Chart';
import ChartLine from './com/ChartLine';
import SwitchModeButton from './com/SwitchModeButton/SwitchModeButton.js'

const DAY_BACKGROUND = '#fff'
const NIGHT_BACKGROUND = '#262F3D'
export default class App extends Component {
  state = {
    isNightMode: false
  }

  renderCharts = () => {
    const chartData = data[0];
    return Object.keys(chartData.names).map((chartName, idx) => {
      const chartColor = chartData.colors[chartName];

      let dataArray = chartData.columns.filter(column => column[0] === chartName);
      dataArray[0].shift();
      const data = dataArray[0];

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
    this.setState({ isNightMode: !this.state.isNightMode })

  }


  render() {
    const { isNightMode } = this.state
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: isNightMode ? NIGHT_BACKGROUND : DAY_BACKGROUND }}>

        <Chart>
          <ChartLine stroke="#67c23a" data={[10, 14, 20, 15, 13, 111, 24, 12, 8]} />
          <ChartLine stroke="red" data={[40, 12, 22, 3, 112, 14, 12, 23, 13]} />
          {/*{this.renderCharts()}*/}
        </Chart>
        <SwitchModeButton isNightMode={isNightMode} handleSwitchMode={this.handleSwitchMode} />

      </div>
    );
  }
}
