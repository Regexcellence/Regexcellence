import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from '../userChallenges/listView';
import ChallengeFilter from '../userChallenges/challengeFilter';
import { getAllChallenges } from '../actions/api';
import arrows from '../styles/images/arrows.png';

class UserChallenges extends Component {
  componentWillMount() {
    this.props.getAllChallenges();
  }
  render() {
    if (this.props.challenges.length) {
      return (
        <div>
          <div className="jumbotron challenge-header">
            <img className="banner-img" src={arrows} />
            <h2>Take your Regex skills to battle</h2>
            <p className="lead">Practice your Regex skills at our challenges page</p>
          </div>            
          { this.props.children || 
            <div>
            <ChallengeFilter /> 
            <ListView userChallenges={this.props.filtered_challenges} />
            </div>
          }
        </div>
      );
    }
    else {
      return false;
    }
  }
}

const mapStateToProps = (state) => {
  return { 
    filtered_challenges: state.filtered_challenges,
    challenges: state.challenges
  };
};

export default connect(mapStateToProps, { getAllChallenges })(UserChallenges);
