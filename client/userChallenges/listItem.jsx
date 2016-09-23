import React, { Component } from 'react';
import { Link } from 'react-router';

class ListItem extends Component {
  render() {
    const linkToChallenge = `user-challenges/${this.props.challengeId}`;
    return(
      <li className="list-group-item">  
        <Link to={linkToChallenge}>
        {this.props.name + '\n'}
        <span className="pull-right">
          {this.props.author}
        </span>
        </Link>
      </li>
    );
  }
}

export default ListItem;
