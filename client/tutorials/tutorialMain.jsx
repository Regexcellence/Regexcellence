import React, { Component } from 'react';
import Challenge from '../challenge/challenge';

class TutorialMain extends Component {
  render() {
    console.log('params:',this.props.params.name);
    if(this.props.params.name === 'Learning your ABCs'){
      return <div>hello</div>
    } else {
      return false;
    }
  }
}

export default TutorialMain;
