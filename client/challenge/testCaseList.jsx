import React from 'react';

import TestCase from './testCase';
import TestCaseText from './testCaseText';

export default class TestCaseList extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {this.props.testCases.map(testCase => (
            <tr key={testCase._id}>
              <td>{testCase.task}</td>
              <td>
                <TestCaseText testCase={testCase.innerMatches || testCase.case} /> 
                <TestCase flag={testCase.result} /> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
