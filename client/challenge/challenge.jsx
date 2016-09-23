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
    const nextUrl = this.props.nextUrl;
    return (
      <div className="challenge">
        <ChallengeDescription 
          name={challengeInfo.name} 
          description={challengeInfo.description} 
          editable={challengeInfo.editable}
        />
        <TestCaseList 
          testCases={challengeInfo.testCases} 
        />
        <InputRegexValidation 
          challengeId={challengeInfo._id} 
          testCases={challengeInfo.testCases} 
          testPassed={challengeInfo.testPassed}
          nextUrl={nextUrl}
        />
      </div>
    );
  }
}