import React, { Component } from 'react';

import { PieChart } from 'react-easy-chart';
import ToolTip from './toolTip';

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
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
  }

  mouseOverHandler(d, e) {
    if (!this.state.showToolTip){
      this.setState({
        showToolTip: true,
        top: e.y,
        left: e.x,
        value: d.value,
        key: d.data.key});
    }
  }

  mouseOutHandler() {
    this.setState({showToolTip: false});
  }

  render() {
  	let sections = this.props.completed_challenges.reduce((acc, item) => {
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
        { this.state.showToolTip ? <ToolTip
          keyVal={this.state.key}
          top={this.state.top}
          left={this.state.left}
          value={this.state.value}
        /> : false }
        <PieChart 
          size={150}
          innerHoleSize={70}
          data={dataset}
          mouseOverHandler={this.mouseOverHandler}
          mouseOutHandler={this.mouseOutHandler}

        />
      </div>
  	)
  }

}
