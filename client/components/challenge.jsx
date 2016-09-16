import React, { Component } from 'react';
import TestResult from './testResult';

export default class Challenge extends Component {
  constructor(props) {
    super(props);
    const challengeInfo = [
      { id: 1, case: 'abcd', result: null, task: 'Match', expectation: true },
      { id: 2, case: 'acd', result: null, task: 'Skip', expectation: false },
      { id: 3, case: 'abcde', result: null, task: 'Match', expectation: true }
    ];
    this.state = {
      challengeInfo,
      input: '',
    };
    this.checkRegex = this.checkRegex.bind(this);
    this.setFlag = this.setFlag.bind(this);
    this.setFlagsToNull = this.setFlagsToNull.bind(this);
    this.changeInputState = this.changeInputState.bind(this);
  }
  render() {
    const table = this.state.challengeInfo.map(item => (
      <tr>
        <td>{item.task}</td>
        <td key={item.id}>{item.case}</td>
        <td><TestResult flag={item.result} /></td>
      </tr>
    ));
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

          <tbody>
            {table}
          </tbody>
        </table>

        <form className="input-group">
          <input
            className="form-control"
            placeholder="enter your pattern here..."
            value={this.state.input}
            onChange={this.changeInputState}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
            submit
            </button>
          </span>
        </form>
      </div>
    );
  }
  changeInputState(event) {
    event.preventDefault();
    //Keep in mind setState is asynchronous, so callback here neccessary.
    this.setState({ input: event.target.value }, () => {
      this.checkRegex();
    });
  }
  checkRegex(testCases = this.state.challengeInfo) {
   
    //For reseting flags to null when there's no input.
    if (!this.state.input) {
      this.setFlagsToNull(testCases);
      return; 
    }
    const regex = new RegExp(this.state.input);
    let passed = true;
    testCases.forEach(test => {
        if (regex.test(test.case) !== test.expectation) {
          passed = false;
          this.setFlag(test, false);
        } else {
          this.setFlag(test, true);
        }
    });
    console.log('***passed***', passed);
    return passed;
  }
  setFlag(itemToChange, flagValue) {
    this.setState({
        challengeInfo: this.state.challengeInfo.map(test => {
            if (itemToChange.id === test.id) {
                itemToChange.result = flagValue;
            }
            return test;
        }),
    });
  }
  setFlagsToNull(testCases) {
    testCases.forEach(test => this.setFlag(test, null));
  }
}
