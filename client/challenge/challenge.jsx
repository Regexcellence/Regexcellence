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
          name={this.props.challengeInfo.name}
          description={this.props.challengeInfo.description}
          editable={this.props.editable}
        />
        <TestCaseList
          testCases={this.props.challengeInfo.testCases}
        />
        <InputRegexValidation
          challengeId={this.props.challengeInfo._id}
          testCases={this.props.challengeInfo.testCases}
          testPassed={this.props.challengeInfo.testPassed}
          challengeType={this.props.challengeInfo.challengeType}
          nextUrl={nextUrl}
        />
      </div>
    );
  }
}

Challenge.propTypes = {
  nextUrl: React.PropTypes.object,
  editable: React.PropTypes.bool,
  challengeInfo: React.PropTypes.shape({
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    _id: React.PropTypes.string,
    testCases: React.PropTypes.array.isRequired,
    testPassed: React.PropTypes.any,
    challengeType: React.PropTypes.string,
  }),
};
