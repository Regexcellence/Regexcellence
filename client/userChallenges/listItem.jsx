import React, { Component } from 'react';
import { Link } from 'react-router';

import DifficultyBar from './difficultyBar';

class ListItem extends Component {
  render() {
    const linkToChallenge = `user-challenges/${this.props.challengeId}`;
    const colors = {
      1: '#9ad2cb',
      2: '#d3ecb0',
      3: '#f7f9be',
      4: '#ebd494',
      5: '#E27A78',
    };
    const difficultyStyle = {
      backgroundColor: colors[`${this.props.difficulty}`],
      width: (`${this.props.difficulty}` * 20) + '%',
    };
    if (!this.props.testCases) {
      return (
        <Link to={linkToChallenge}>
          <li className="list-group-item container">
            {this.props.name.toUpperCase()}
            <br />
            <DifficultyBar
              difficultyStyle={difficultyStyle}
              difficulty={this.props.difficulty}
            />
          </li>
        </Link>
      );
    } else {
      const { challengeView, userCompleted, userAuthored } = this.props;
      return (
        <Link to={linkToChallenge}>
          <li className="list-group-item">
            <h3>{this.props.name.toUpperCase()} &nbsp;
              { challengeView && userAuthored ? <span title="Authored by YOU!" className="completed-check glyphicon glyphicon-pencil" /> : false }
              { challengeView && userCompleted ? <span title="Completed!" className="completed-check glyphicon glyphicon-check" /> : false }
            </h3>
            <DifficultyBar
              difficultyStyle={difficultyStyle}
              difficulty={this.props.difficulty}
            />
            <span>by {this.props.author}</span>
            <p>Match: {this.props.testCases[0] === undefined ? '' : this.props.testCases[0].case}</p>
          </li>
        </Link>
      );
    }
  }
}

ListItem.propTypes = {
  challengeId: React.PropTypes.string,
  difficulty: React.PropTypes.number,
  challengeView: React.PropTypes.bool,
  userCompleted: React.PropTypes.bool,
  testCases: React.PropTypes.arrayOf(React.PropTypes.object),
  name: React.PropTypes.string,
  author: React.PropTypes.string,
};
export default ListItem;
