import React from 'react';
import { Router, Link } from 'react-router';

export default class TestPassedButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.testPassed) {
			return (
				<span className="input-group-btn">
				  <Link to={`/${this.props.nextTutorial}`}>
					  <button className="btn btn-secondary">
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