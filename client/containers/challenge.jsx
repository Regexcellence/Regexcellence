import React, { Component } from 'react';
import { dispatch } from 'redux';
import { connect } from 'react-redux';

import InputRegexValidation from './inputRegexValidation';
import TestCaseList from '../components/testCaseList';
import { flagActionCreator, inputActionCreator } from '../actions/index';

class Challenge extends Component {
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

const mapStateToProps = (state) => {
  return { challengeInfo: state.challenges };
};

export default connect(mapStateToProps)(Challenge);
