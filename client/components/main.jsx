import React, { Component } from 'react';
import Challenge from './challenge';
import Progress from './progress';
import Lesson from './lesson';

class Main extends Component {
  render(){
    return (
      <div>
        <Progress />
        <Lesson />
        <Challenge />
      </div>
    );
  }
}

export default Main;
