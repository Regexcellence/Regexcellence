import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router';

import { inputActionCreator } from '../../actions/index';
import { postTutorialProgress, postChallengeActionCreator, postNewChallengeAnswer, postCompletedChallenge } from '../../actions/api';

class TestPassedButton extends React.Component {
  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
    this.submitNewChallenge = this.submitNewChallenge.bind(this);
    this.postNewChallengeAnswer = this.postNewChallengeAnswer.bind(this);
    this.postTutorialProgress = this.postTutorialProgress.bind(this);
  }
  clearText() {
    this.props.inputActionCreator('');
  }
  submitNewChallenge() {
    this.clearText();
    this.props.postChallengeActionCreator(this.props.newUserPost);
  }
  postNewChallengeAnswer() {
    const { text, challengeId, userInfo } = this.props;
    this.props.postNewChallengeAnswer(text, challengeId, userInfo._id, userInfo.gitHandle);
    this.props.postCompletedChallenge(challengeId, userInfo._id);
  }
  postTutorialProgress() {
    const { tutorialOrder, userInfo } = this.props;
    this.clearText();
    console.log(tutorialOrder);
    if(tutorialOrder !== 11) {
      this.props.postTutorialProgress(tutorialOrder);
    } else if (tutorialOrder === 11) {
      this.props.postTutorialProgress(11);
      console.log('DONE!');
    }
  }
  render() {
    if (this.props.testPassed) {
      if (this.props.challengeType !== 'challenge') {
        return (
          <span className="input-group-btn">
            <Link to={`/${this.props.nextUrl.url}`}>
              <button
              onClick={this.props.editable ? this.submitNewChallenge : this.postTutorialProgress}
              id="continue" className="btn btn-secondary">
              {this.props.nextUrl.nextText}
              </button>
            </Link>
          </span>
        );
      } else {
        return (
          <span className="input-group-btn">
            <Link to={`/${this.props.nextUrl.url}`}>
              <button
              onClick={this.postNewChallengeAnswer}
              id="continue" className="btn btn-secondary">
              {this.props.nextUrl.nextText}
              </button>
            </Link>
          </span>
        );
      }
    } else {
      return false;
    }
  }
}
const mapStateToProps = (state) => {
	return {
    text: state.userInput,
    newUserPost: state.newUserPost,
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps, { postTutorialProgress, inputActionCreator, postChallengeActionCreator, postNewChallengeAnswer, postCompletedChallenge })(TestPassedButton);
