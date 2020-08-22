import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts'

 
class LineChart extends Component {
	render() {
		const options = {
      width:539,
      theme: "dark1",
      title:{
        text: "Number of Portable Media Players \n Sold WOrldWide Each Year from 2006 to 2011" ,
        fontSize: 12,
        fontColor: '#fff'
      },
			axisY: {
        title: "Number sld (millions)",
        gridColor: "gray"
			},
			data: [{
        type: "line",
        lineColor:"white",
				xValueFormatString: "YYYY",
				dataPoints: [
          { x: new Date('2015-01'), y: 35, color: "#fff" },
          { x: new Date('2016-01'), y: 60, color: "#fff" },
          { x: new Date('2017-01'), y: 40, color: "#fff" },
          { x: new Date('2018-01'), y: 70, color: "#fff" },
        ]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;                                  