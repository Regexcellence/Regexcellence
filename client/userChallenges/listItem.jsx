import React, { Component } from 'react';
import { Link } from 'react-router';

import DifficultyBar from './difficultyBar';

class ListItem extends Component {

  render() {
    const linkToChallenge = `user-challenges/${this.props.challengeId}`;
    const testCase = `match case : ${this.props.testCases[0]===undefined? " " : this.props.testCases[0].case}`;
    const difficulty = { width: (`${this.props.difficulty}` * 20)+"%" };
    const colors = {
      "1": "#9ad2cb",
      "2": "#d3ecb0",
      "3": "#f7f9be",
      "4": "#ebd494",
      "5": "#E27A78",
    }
    const difficultyStyle = { 
      'backgroundColor': colors[`${this.props.difficulty}`],
      'width': (`${this.props.difficulty}` * 20)+"%",
    };

    return(
      <li className="list-group-item">  
        <Link to={linkToChallenge}>
        <h3>{this.props.name.toUpperCase()}</h3>
        <DifficultyBar
          difficultyStyle={difficultyStyle}
          difficulty={this.props.difficulty} />
        <span>author: </span>
        <p>{testCase}</p>
        </Link>
      </li>
    );
  }
}

export default ListItem;
