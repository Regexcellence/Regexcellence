import React from 'react';

import Navigation from './components/navbar';
import Progress from './components/progress';
import Challenges from './components/challenges';

export default class Controls extends React.Component {
  render() {
    return (
      <div>
        <Progress />
        <Challenges />
      </div>
    );
  }
}
