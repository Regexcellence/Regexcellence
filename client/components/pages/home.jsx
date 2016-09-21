import React, { Component } from 'react';
import Navigation from '../../components/navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>This is the home page</h1>
      </div>
    );
  }
}

export default Home;

