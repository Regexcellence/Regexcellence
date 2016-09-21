import React from 'react';
import { Router, Link } from 'react-router';

export default class TestPassedButton extends React.Component {
	render() {
		//console.log(this.props.location.pathname)
		if (this.props.testPassed) {
			return (
				<span className="input-group-btn">
				  <Link to={'tutorial/'}>
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