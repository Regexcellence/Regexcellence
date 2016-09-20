import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllChallenges } from '../actions/index';
import Challenge from '../containers/challenge';

class Challenges extends Component {
  componentWillMount(){
    this.props.getAllChallenges();
  }

  render() {
    if (this.props.allChallenges.length > 0) {
      const challenges = this.props.allChallenges.map((challenge) => {
        return (
            <Challenge challengeInfo={challenge.testCases} />
          );
        });
      return (
        <div> {challenges} </div>
      );
    }
    return <div> LOADING!!! </div>;
  }
}
const mapStateToProps = (state) => {
  // return { challengeInfo: state.challenges, getAllChallenges: state.allChallenges };
  return { allChallenges: state.allChallenges };
};

export default connect(mapStateToProps, { getAllChallenges })(Challenges);
