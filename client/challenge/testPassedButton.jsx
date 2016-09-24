import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router';

import { inputActionCreator, postChallengeActionCreator } from '../actions/index';


class TestPassedButton extends React.Component {
  constructor(props) {
    super(props);
    this.clearText = this.clearText.bind(this);
    this.submitNewChallenge = this.submitNewChallenge.bind(this);
  }
  clearText() {
    this.props.inputActionCreator('');
  }
  submitNewChallenge() {
    this.clearText();
    this.props.postChallengeActionCreator(this.props.newUserPost);
  }
  render() {
    if (this.props.testPassed) {
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
      return false;
    }
  }
}
const mapStateToProps = (state) => {
	return { text: state.userInput, newUserPost: state.newUserPost }
};

export default connect(mapStateToProps, { inputActionCreator, postChallengeActionCreator })(TestPassedButton);
