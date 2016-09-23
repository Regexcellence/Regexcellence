import React from 'react';

import TestCase from './testCase';
import TestCaseText from './testCaseText';

export default class TestCaseList extends React.Component {
  constructor(props) {
    super(props);
    this.fitlerTestCases = this.fitlerTestCases.bind(this);
  }
  fitlerTestCases(filterCondition) {
    return this.props.testCases.filter(testCase => testCase.task === filterCondition)
      .map(testCase => {
        return (
          <tr key={testCase._id}>
            <td>
              <TestCaseText testCase={testCase.innerMatches || testCase.case} /> 
              <TestCase flag={testCase.result} /> 
            </td>
          </tr>
        );
    })
  }
  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Match</th>
          </tr>
          {this.props.testCases.length ? this.fitlerTestCases('Match') : false}
          <tr>
            <th>Skip</th>
          </tr>
          {this.props.testCases.length ? this.fitlerTestCases('Skip') : false}
        </tbody>
      </table>
    );
  }
}
