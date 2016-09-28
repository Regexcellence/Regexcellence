import React, { Component } from 'react';
import { Link } from 'react-router';

import DifficultyBar from './difficultyBar';

class ListItem extends Component {

  render() {
    const linkToChallenge = `user-challenges/${this.props.challengeId}`;
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
    if(!this.props.testCases){
      return (
      <li className="list-group-item">  
          {this.props.name.toUpperCase()}
          <DifficultyBar
            difficultyStyle={difficultyStyle}
            difficulty={this.props.difficulty} />        
      </li> 
      );
    }
    return(
      <li className="list-group-item">  
        <Link to={linkToChallenge}>
          <h3>{this.props.name.toUpperCase()}</h3>
          <DifficultyBar
            difficultyStyle={difficultyStyle}
            difficulty={this.props.difficulty} />
          <span>by {this.props.author}</span>
          <p>Match: {this.props.testCases[0] === undefined ? "" : this.props.testCases[0].case}</p>
        </Link>
      </li>
    );
  }
}

export default ListItem;
