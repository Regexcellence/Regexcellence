import React from 'react';

import TestCaseFlag from './testCaseFlag';
import TestCaseText from './testCaseText';
import TestCaseEdit from './testCaseEdit';
  
export default class TestCaseList extends React.Component {
  constructor(props) {
    super(props);
    this.fitlerTestCases = this.fitlerTestCases.bind(this);
  }
  fitlerTestCases(filterCondition) {
    return this.props.testCases.filter(testCase => testCase.task === filterCondition)
      .map(testCase => {
        if (testCase.editing) {
          return <TestCaseEdit 
          matchType={filterCondition} 
          newTestCase={testCase.case}
          editing={true}
          key={testCase._id}
          _id={testCase._id}
          />
        } else {
          return (
            <tr key={testCase._id}>
              <td>
                <TestCaseText 
                  testCase={testCase.case} 
                  innerMatches={testCase.innerMatches}
                  testCaseInfo={testCase} 
                  editable={this.props.editable} 
                /> 
                <TestCaseFlag flag={testCase.result} /> 
              </td>
            </tr>
          );
        }
    })
  }
  render() {
    const { editable } = this.props; 
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Match { editable ? <span id="post-requirements">*Three match cases required for submission</span> : false }</th>
          </tr>
          {this.fitlerTestCases('Match')}
          {this.props.editable ? <TestCaseEdit matchType="Match" /> : false}
          <tr>
            <th>Skip { editable ? <span id="post-requirements">*Three skip cases required for submission</span> : false } </th>
          </tr>
          {this.fitlerTestCases('Skip')}
          {this.props.editable ? <TestCaseEdit matchType="Skip" /> : false}
        </tbody>
      </table>
    );
  }
}
