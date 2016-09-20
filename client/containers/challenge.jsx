import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputRegexValidation from './inputRegexValidation';
import TestCaseList from '../components/testCaseList';
import { getAllChallenges } from '../actions/index';

class Challenge extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllChallenges();
    console.log(this.props.allChallenges);
  }

  renderChallenges() {
    return this.props.allChallenges.map((challenge) => {
      return (
        <li className="list-group-item" key={challenge.id}>
          <span className="pull-xs-right">{challenge.task}</span>
          <strong>{challenge.case}</strong>
        </li>
        );
    });
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.renderChallenges()}
          </ul>
        </div>
        <h3>Challenge</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Text</th>
            </tr>
          </thead>
          <TestCaseList challengeInfo={this.props.challengeInfo} />
        </table>
        <InputRegexValidation testCases={this.props.challengeInfo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // return { challengeInfo: state.challenges, getAllChallenges: state.allChallenges };
  return { challengeInfo: state.challenges, allChallenges: state.allChallenges };
};

export default connect(mapStateToProps, { getAllChallenges })(Challenge);
