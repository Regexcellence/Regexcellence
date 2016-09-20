import React, { Component } from 'react';
import InputRegexValidation from './inputRegexValidation';
import TestCaseList from '../components/testCaseList';

export default class Challenge extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
