import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    console.log("in progbar", this.props.progress)
    return(
      <div className="outerProgress" title="Progress">
        <div className="innerProgress" style={this.props.progress}>
        </div>
      </div>
    );
  }
}

export default ProgressBar;