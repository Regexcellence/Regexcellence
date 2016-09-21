import React, { Component } from 'react';
import InputRegexValidation from './inputRegexValidation';
import TestCaseList from './testCaseList';
import ChallengeDescription from './challenge-description';

export default class Challenge extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const challengeInfo = this.props.challengeInfo;
    return (
      <div className="challenge">
        <ChallengeDescription 
          name={challengeInfo.name} 
          description={challengeInfo.description} 
        />
        <TestCaseList 
          testCases={challengeInfo.testCases} 
        />
        <InputRegexValidation 
          challengeId={challengeInfo._id} 
          testCases={challengeInfo.testCases} 
          testPassed={challengeInfo.testPassed}
        />
      </div>
    );
  }
}