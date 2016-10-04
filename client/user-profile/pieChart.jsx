import React, { Component } from 'react';

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
    let pieData = [
	    { label: 'Level 1', value: (sections[1] || 0) },
	    { label: 'Level 2', value: (sections[2] || 0) },
	    { label: 'Level 3', value: (sections[3] || 0) },
	    { label: 'Level 4', value: (sections[4] || 0) },
	    { label: 'Level 5', value: (sections[5] || 0) }
    ];
    let params = {
    	innerRadius: 75,
    }
    // let color = d3.scale.ordinal()
    //         .range([ '#9ad2cb','#d3ecb0', '#f7f9be', '#ebd494', '#E27A78']);
  	return (
  		<div>
        <svg className="profile-donut" style={params} />
			</div>
  	)
  }

}

			// <PieChart
			//   data={pieData}
			//   width={400}
			//   height={400}
			//   radius={100}
			//   innerRadius={20}
			//   title="Challenges Completed by Level"
			// />