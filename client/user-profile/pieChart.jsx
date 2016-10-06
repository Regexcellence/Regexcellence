import React, { Component } from 'react';

import { PieChart, ToolTip } from 'react-easy-chart';

export default class ChallengePieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false,
      top: null,
      left: null,
      value: null,
      key: null,
    };
    this.mouseOverHandler = this.mouseOutHandler.bind(this);
    this.mouseMoveHandler = this.mouseOutHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.createTooltip = this.mouseOutHandler.bind(this);
  }

  mouseOverHandler(d, e) {
    this.setState({
      showToolTip: true,
      top: e.y,
      left: e.x,
      value: d.value,
      key: d.data.key});
  }

  mouseMoveHandler(e) {
    if (this.state.showToolTip) {
      this.setState({top: e.y, left: e.x});
    }
  }

  mouseOutHandler() {
    this.setState({showToolTip: false});
  }

  createTooltip() {
    console.log("in createTooltip")
    if (this.state.showToolTip) {
      return (
        <ToolTip
          top={this.state.top}
          left={this.state.left}
        >
        You have completed {this.state.value} {this.state.key} challenges
        </ToolTip>
      );
    }
    return false;
  }

  render() {
  	let sections = this.props.completed_challenges.reduce((acc, item) => {
  		// let increment = Math.floor(1/this.props.completed_challenges.length * 100);
      acc[item.props.difficulty] ? acc[item.props.difficulty] += 1 : acc[item.props.difficulty] = 1;
      return acc;
  	}, {});
    let dataset =[
        {key: 'Level 1', value: (sections[1] || 0), color: '#9ad2cb'},
        {key: 'Level 2', value: (sections[2] || 0), color: '#d3ecb0'},
        {key: 'Level 3', value: (sections[3] || 0), color: '#f7f9be'},
        {key: 'Level 4', value: (sections[4] || 0), color: '#ebd494'},
        {key: 'Level 5', value: (sections[5] || 0), color: '#E27A78'},
      ]
  	return (
      <div>
        <PieChart 
          size={150}
          innerHoleSize={90}
          data={dataset}
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler.bind(this)}
          mouseMoveHandler={this.mouseMoveHandler.bind(this)}
        />
      </div>
  	)
  }

}
