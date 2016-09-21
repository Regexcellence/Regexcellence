import React from 'react';

import Challenges from './components/challenges';
import Progress from './components/progress';

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
