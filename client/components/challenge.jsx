import React, { Component } from 'react';
import TestResult from './testResult';

class Challenge extends Component {
  constructor(props) {
    super(props);

    const challengeInfo = [
      { id: 1, case: 'abcd', result: null, task: 'Match', expectation: true },
      { id: 2, case: 'acd', result: null, task: 'Skip', expectation: false },
      { id: 3, case: 'abcde', result: null, task: 'Match', expectation: true }];

    // const tests = [
    //   {
    //     case: 'abcd',
    //     expectation: true,
    //   },
    //   {
    //     case: 'acd',
    //     expectation: false,
    //   },
    //   {
    //     case: 'abcde',
    //     expectation: true,
    //   },
    // ];
    this.state = {
      challengeInfo,
      solution: 'abc',
      input: '',
    };

    this.checkRegex = this.checkRegex.bind(this);
  }

  checkRegex(event, testCases = this.state.challengeInfo) {
    event.preventDefault();
    this.setState({ input: event.target.value });
    const regex = new RegExp(this.state.input);
    let passed = true;

    testCases.forEach((test) => {
        if (regex.test(test.case) !== test.expectation) {
            passed = false;
            this.setState({
                challengeInfo: this.state.challengeInfo.map((item) => {
                    if (test.id === item.id) {
                        item.result = false;
                    }
                    return item;
                }),
            });
        } else {
          this.setState({
              challengeInfo: this.state.challengeInfo.map((item) => {
                  if (test.id === item.id) {
                      item.result = true;
                  }
                  return item;
              }),
          });
        }
    });
    console.log('***passed***', passed);
    return passed;
}

  // onInputChange(event){
  //   this.setState({ input: event.target.value});
  // }
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
            onChange={this.checkRegex}
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
}

export default Challenge;
