import React from 'react';

export default class TestPassedButton extends React.Component {
	render() {
		if (this.props.testPassed) {
			return (
				<span className="input-group-btn">
				  <button className="btn btn-secondary">
				    Continue
				  </button>
				</span>
			);
		} else {
			return false;
		}
	}
}