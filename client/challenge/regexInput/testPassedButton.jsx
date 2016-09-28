import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router';

import { inputActionCreator } from '../../actions/index';
import { postChallengeActionCreator, postNewChallengeAnswer, postCompletedChallenge } from '../../actions/api';

class TestPassedButton extends React.Component {
  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
    this.submitNewChallenge = this.submitNewChallenge.bind(this);
    this.postNewChallengeAnswer = this.postNewChallengeAnswer.bind(this);
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
    this.props.postCompletedChallenge(challengeId, userInfo._id)
  }
  render() {
    if (this.props.testPassed) {
      if (this.props.challengeType !== 'challenge') {
        return (
          <span className="input-group-btn">
            <Link to={`/${this.props.nextUrl.url}`}>
              <button 
              onClick={this.props.editable ? this.submitNewChallenge : this.clearText} 
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
  }
};

export default connect(mapStateToProps, { inputActionCreator, postChallengeActionCreator, postNewChallengeAnswer, postCompletedChallenge })(TestPassedButton);
