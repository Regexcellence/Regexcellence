import React, { Component } from 'react';

export default class ChallengePieChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const data = {};
  	let sections = this.props.completed_challenges.reduce((acc, item) => {
  		// let increment = Math.floor(1/this.props.completed_challenges.length * 100);
      acc[item.props.difficulty] ? acc[item.props.difficulty] += 1 : acc[item.props.difficulty] = 1;
      return acc;
  	}, {});
    data.dataset = {
      label: "Completed Challenge Stats",
      values: [
        {label: 'Level 1', quantity: (sections[1] || 0)},
        {label: 'Level 2', quantity: (sections[2] || 0)},
        {label: 'Level 3', quantity: (sections[3] || 0)},
        {label: 'Level 4', quantity: (sections[4] || 0)},
        {label: 'Level 5', quantity: (sections[5] || 0)},
      ]
    }
    data.color = [ '#9ad2cb','#d3ecb0', '#f7f9be', '#ebd494', '#E27A78'];
    data.arcClass="arc";
  	return (
      <div>
      </div>
  	)
  }

}
