import React, { Component } from 'react';
import TestResult from './testResult';

export default class Challenge extends Component {
  constructor(props) {
    super(props);
    const challengeInfo = [
      { id: 1, case: 'abcd', result: null, task: 'Match', expectation: true },
      { id: 2, case: 'acd', result: null, task: 'Skip', expectation: false },
      { id: 3, case: 'abcde', result: null, task: 'Match', expectation: true },
    ];
    this.state = {
      challengeInfo,
      input: '',
      backslashEntered: false,
    };
    this.checkRegex = this.checkRegex.bind(this);
    this.setFlag = this.setFlag.bind(this);
    this.setAllFlags = this.setAllFlags.bind(this);
    this.changeInputState = this.changeInputState.bind(this);
    this.regexParser = this.regexParser.bind(this);
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
  // REGEX RELATED FUNCTIONS
  // Validates whether the input was a properly formed regex.
  regexValidator(input) {
    return /^\/.+\/[gimuy]{0,5}$/.test(input);
  }
  // Strips input pattern of both forward slashes, and separates flags if any.
  regexParser(input) {
    const inputArr = input.split('');
    // To take off first forward slash.
    inputArr.shift();
    // To take off second forward slash plus any flags that may exist.
    const pattern = inputArr.join('').replace(/\/.*$/, '');
    const flags = this.snagRegexFlags(input);
    return {
      pattern,
      flags,
    };
  }
  // To grab the flags at the end of a regex pattern (i.e. after the second forward slash)
  snagRegexFlags(input) {
    const flags = input.match(/\/([gimuy]{1,5})$/);
    return flags ? flags[1] : null;
  }
  checkRegex(parsedInput, testCases = this.state.challengeInfo) {
    // To check to see if there are flags in the pattern,
    // as the RegExp instantiator doesn't allow a null/false value for flags.
    const regex = parsedInput.flags ? new RegExp(parsedInput.pattern, parsedInput.flags) : new RegExp(parsedInput.pattern);
    let passed = true;
    testCases.forEach((test) => {
        if (regex.test(test.case) !== test.expectation) {
          passed = false;
          this.setFlag(test, false);
        } else {
          this.setFlag(test, true);
        }
    });
    Console.log('***passed***', passed);
    return passed;
  }
  // END OF REGEX RELATED FUNCTIONS
  // To set individual flags to null, true or false.
  setFlag(itemToChange, flagValue) {
    this.setState({
        challengeInfo: this.state.challengeInfo.map((test) => {
            if (itemToChange.id === test.id) {
                itemToChange.result = flagValue;
            }
            return test;
        }),
    });
  }
  // To set all flags to null, true, or false based on current situation.
  setAllFlags(testCases, flagValue) {
    testCases.forEach(test => this.setFlag(test, flagValue));
  }
  changeInputState(event) {
    event.preventDefault();
    const input = event.target.value;
    this.setState({ input }, () => {
      if (this.regexValidator(input)) {
        this.checkRegex(this.regexParser(input));
      } else if (!this.state.input) {
        // For reseting flags to null when there's no input.
        this.setAllFlags(this.state.challengeInfo, null);
      } else {
        this.setAllFlags(this.state.challengeInfo, false);
      }
    });
  }
}
