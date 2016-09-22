import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router';

import { inputActionCreator } from '../actions/index';


class TestPassedButton extends React.Component {
	constructor(props) {
		super(props);
		this.clearText = this.clearText.bind(this);
	}
	clearText() {
		this.props.inputActionCreator('');
	}
	render() {
		if (this.props.testPassed) {
			return (
				<span className="input-group-btn">
				  <Link to={`/${this.props.nextTutorial}`}>
					  <button onClick={this.clearText} id="continue" className="btn btn-secondary">
					    Continue
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
	return { text: state.userInput }
};

export default connect(mapStateToProps, { inputActionCreator })(TestPassedButton);