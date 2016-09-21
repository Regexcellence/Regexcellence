import React from 'react';

export default class InputValidationFlag extends React.Component {
	render() {
		if (this.props.wellFormedInput) {
			return false;
		} else {
			return (
				<div className="alert alert-danger">
					Error: Malformed regex
				</div>
			)
		}
	}
}