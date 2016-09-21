import React, { Component } from 'react';
import Navigation from '../controls/navbar';
import Controls from '../controls/controls';

class Tutorial extends Component {
  render() {
  	console.log(this.props.location.pathname)
    return (
      <div>
        <Navigation />
        <h1>This is the Tutorial page</h1>
        <Controls />
      </div>
    );
  }
}

export default Tutorial;

