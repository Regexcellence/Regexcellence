import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllChallenges } from '../actions/index';
import Challenge from '../containers/challenge';

class Challenges extends Component {
  componentWillMount() {
    this.props.getAllChallenges();
  }
  render() {
    if (this.props.challenges.length) {
      const challengeInfo = this.props.challenges[0];
      return (
          <Challenge key={challengeInfo._id} challengeInfo={challengeInfo} />
      );
    }
    return <div> LOADING!!! </div>;
  }
}

const mapStateToProps = (state) => {
  return { challenges: state.challenges };
};

export default connect(mapStateToProps, { getAllChallenges })(Challenges);
