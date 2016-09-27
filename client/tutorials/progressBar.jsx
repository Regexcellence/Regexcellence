import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    return(
      <div className="outerProgress" title="Progress">
      <div className="text"><b>{this.props.progress.width}</b></div>
        <div className="innerProgress" style={this.props.progress}>
        </div>
      </div>
    );
  }
}

export default ProgressBar;