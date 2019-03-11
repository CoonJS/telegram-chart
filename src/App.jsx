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
    selectedChartIdx: 0,
    chartData: data
  }

  renderCharts = () => {
    const chartData = this.state.chartData[this.state.selectedChartIdx];
    return Object.keys(chartData.names).map(chartName => {

      const chartColor = chartData.colors[chartName];
      const dataArray = chartData.columns.find(column => column[0] === chartName);
      const labelsArray = chartData.columns.find(column => column[0] === 'x');
      const [key, ...data] = dataArray;
      const [labelKey, ...labels] = labelsArray;

      return (
        <ChartLine
          key={chartName}
          data={data}
          labels={labels}
          stroke={chartColor}
        />
      );

    })
  }

  handleSwitchMode = () => {
    const { isNightMode } = this.state;
    this.setState({ isNightMode: !isNightMode })
  }

  handleChange = e => {
    this.setState({selectedChartIdx: e.target.value});
  };


  render() {
    const { isNightMode, selectedChartIdx } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: isNightMode ? NIGHT_BACKGROUND : DAY_BACKGROUND }}>

        <Chart>
          {this.renderCharts()}
        </Chart>
        <SwitchModeButton isNightMode={isNightMode} handleSwitchMode={this.handleSwitchMode} />
          <select value={selectedChartIdx} onChange={this.handleChange}>
              {data.map((item, idx) => (
                  <option key={idx} label={idx}>{idx}</option>
              ))}
          </select>
      </div>
    );
  }
}
