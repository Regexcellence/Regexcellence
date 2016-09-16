import React, { Component } from 'react';

class Challenge extends Component {
  constructor(props) {
    super(props);

    const challengeInfo = {
      text: [{ id: 1, case: 'abcd', result: null, task: 'Match' },
             { id: 2, case: 'acd', result: null, task: 'Skip' },
             { id: 3, case: 'abcde', result: null, task: 'Match' }],
    };

    const tests = [
      {
        case: 'abcd',
        expectation: true,
      },
      {
        case: 'acd',
        expectation: false,
      },
      {
        case: 'abcde',
        expectation: true,
      },
    ];
    this.state = {
      challengeInfo,
      solution: 'abc',
      input: '',
      tests,
    };

    this.checkRegex = this.checkRegex.bind(this);
  }

  checkRegex(event, testCases = this.state.tests) {
    event.preventDefault();
    this.setState({ input: event.target.value });
    const regex = new RegExp(this.state.input);
    let passed = true;

    testCases.forEach((test) => {
      if (regex.test(test.case) !== test.expectation) {
        passed = false;
      } else {
        console.log('Case ', test.case, ' passed!');
      }
    });
    console.log('***passed***', passed);
    return passed;
  }

  // onInputChange(event){
  //   this.setState({ input: event.target.value});
  // }
  render() {
    const table = this.state.challengeInfo.text.map(item => (
      <tr>
        <td>{item.task}</td>
        <td key={item.id}>{item.case}</td>
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
