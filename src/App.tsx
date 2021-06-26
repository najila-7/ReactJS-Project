//Generating bar chart using reactjs and echarts
import React, { Component } from 'react';
import EchartsReact from 'echarts-for-react';
class App extends Component {
  render() {
    return (
      <EchartsReact
        option={{
          color: ["#e91e63 "],
        title: {
        text: "Bar Chart Between Alcohol and Malic Acid",
        textAlign: "left",
        left: "5%",
        top: "10%"
      },
          xAxis: {
            type: 'category',
            data: ['Beer', 'Rum', 'Vodka', 'Port Wine', 'Cognac', 'Jinro', 'McDowell']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [0.4, 2,1, 0.6, 1.2, 0.08,0.5],
            type: 'bar'
          }]
        }}
      />
    );
  }
}
export default App;
