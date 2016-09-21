import React, { Component } from 'react';
import Navigation from '../controls/navbar';
import Controls from '../controls/controls';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>This is the home page</h1>
        <Controls />
      </div>
    );
  }
}

export default Home;

