import React, { Component } from 'react';

export default class ToolTip extends Component {
  render() {
  	let position = {
  		top: this.props.top + "px",
  		left: this.props.left + "px",
  	}
  	console.log(position)
  	return (
      <div className="tool-tip" style={position}>
        {this.props.value} completed {this.props.keyVal} 
        {this.props.value === 1 ? " challenge" : " challenges"}
      </div>
  	)
  }
}