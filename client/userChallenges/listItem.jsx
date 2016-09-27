import React, { Component } from 'react';
import { Link } from 'react-router';

class ListItem extends Component {

  render() {
    const linkToChallenge = `user-challenges/${this.props.challengeId}`;

    const testCase = `match case : ${this.props.testCases[0]===undefined? " " : this.props.testCases[0].case}`;

    return(
      <li className="list-group-item">  
        <Link to={linkToChallenge}>
        <h3>{this.props.name.toUpperCase()}</h3>
        <span className="pull-right">author: </span>
        <span>difficulty</span>
        <p>{testCase}</p>
        </Link>
      </li>
    );
  }
}

export default ListItem;
