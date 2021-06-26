//Generating scatter plot using reactjs and echarts
import React, { Component } from 'react';
import EchartsReact from 'echarts-for-react';
class Demo extends Component {
  render() {
    return (
      <EchartsReact
        option={{
          color: ["#354EF6"],
        title: {
        text: "Scatter Plot Between Color Intensity and Hue",
        textAlign: "left",
        left: "5%",
        top: "10%"
      },
          xAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [7,5,3,6,8,4,9],
            type: 'scatter'
          }]
        }}
      />
    );
  }
}
export default Demo;
