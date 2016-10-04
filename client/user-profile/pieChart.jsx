import React, { Component } from 'react';

import ReactD3, { PieChart } from 'react-d3-components';
import d3 from 'd3';

export default class ChallengePieChart extends Component {
	constructor() {
		super();
	}
  render() {
  	let sections = this.props.completed_challenges.reduce((acc, item) => {
  		let increment = Math.floor(1/this.props.completed_challenges.length * 100);
      acc[item.props.difficulty] ? acc[item.props.difficulty] += increment : acc[item.props.difficulty] = increment;
      return acc;
  	}, {});
    let pieData = {
      label: "Completed Challenge Stats",
      values: [
        {x: 'Level 1', y: (sections[1] || 0), colorScale: '#E27A78' },
        {x: 'Level 2', y: (sections[2] || 0), colorScale: '#d3ecb0' },
        {x: 'Level 3', y: (sections[3] || 0), colorScale: '#f7f9be' },
        {x: 'Level 4', y: (sections[4] || 0), colorScale: '#ebd494' },
        {x: 'Level 5', y: (sections[5] || 0), colorScale: '#E27A78' },
      ]
    }
    let color = [ '#9ad2cb','#d3ecb0', '#f7f9be', '#ebd494', '#E27A78'];
  	return (
  		<div>
        <PieChart
          data={pieData}
          height={300}
          width={300}
          margin={{top: 5, bottom: 5, left: 100, right: 100}}
         />
			</div>
  	)
  }

}
