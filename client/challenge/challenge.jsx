import React, { Component } from 'react';
import InputRegexValidation from './regexInput/inputRegexValidation';
import TestCaseList from './testCases/testCaseList';
import ChallengeDescription from './challenge-description';
import Cheatsheet from '../pages/cheatsheet';
import RevealAnswer from './revealAnswer';

export default class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheatSheet: false,
    };
    this.showCheatSheet = this.showCheatSheet.bind(this);
  }
  showCheatSheet() {
    this.setState({ showCheatSheet: !this.state.showCheatSheet }); 
  }

  render() {
    const challengeInfo = this.props.challengeInfo;
    const nextUrl = this.props.nextUrl;
    return (
      <div className="challenge">
        <div>
          <span onClick={() => this.showCheatSheet()} className="cheat-glyph glyphicon glyphicon-th-list" title="Cheat Sheet!" />
        </div><br />
        <div>
          { this.state.showCheatSheet ? <Cheatsheet /> : null }
        </div>
        <ChallengeDescription
          name={this.props.challengeInfo.name}
          description={this.props.challengeInfo.description}
          difficulty={this.props.challengeInfo.difficulty}
          editable={this.props.editable}
        />
        <TestCaseList
          testCases={this.props.challengeInfo.testCases}
          editable={this.props.editable}
        />
        <InputRegexValidation
          challengeId={this.props.challengeInfo._id}
          testCases={this.props.challengeInfo.testCases}
          testPassed={this.props.challengeInfo.testPassed}
          challengeType={this.props.challengeInfo.challengeType}
          editable={this.props.editable}
          nextUrl={nextUrl}
        />
        {this.props.editable ? false :
        <RevealAnswer 
          challengeId={this.props.challengeInfo._id}
          challengeType={this.props.challengeInfo.challengeType}
          answers={this.props.challengeInfo.answers}
          revealAnswer={this.props.challengeInfo.revealAnswer}
        />}
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
