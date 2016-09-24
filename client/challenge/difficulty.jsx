import React from 'react';
import { connect } from 'react-redux';

class Difficulty extends React.Component {
	constructor(props) {
		super(props)
	}
	updateDifficulty() {
		
	}
	render() {
		console.log(this.props.difficulty)
		if (this.props.editable) {
			return false;
		} else {
			return <h3>{this.props.difficulty}</h3>
		}
	}
}

export default connect(null, {})(Difficulty)