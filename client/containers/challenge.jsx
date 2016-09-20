import React, { Component } from 'react';
import InputRegexValidation from './inputRegexValidation';
import TestCaseList from '../components/testCaseList';
import ChallengeDescription from '../components/challenge-description';

export default class Challenge extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const challengeInfo = this.props.challengeInfo;
    return (
      <div>
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
        />
      </div>
    );
  }
}
