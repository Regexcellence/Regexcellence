import React from 'react';
import { connect } from 'react-redux';

import { postChallengeInputUpdate } from '../actions/index';

class Difficulty extends React.Component {
	constructor(props) {
		super(props)
		this.updateDifficulty = this.updateDifficulty.bind(this);
	}
	updateDifficulty(event) {
		const inputObject = {
			name: event.target.name,
			value: event.target.value,
		};
		this.props.postChallengeInputUpdate(inputObject);
	}
	render() {
		console.log(this.props.difficulty)
		if (this.props.editable) {
			return (
				<div>Select Difficulty: 
					<select onChange={this.updateDifficulty} name="difficulty">;
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
			)
		} else {
			return <h3>{this.props.difficulty}</h3>
		}
	}
}

export default connect(null, { postChallengeInputUpdate })(Difficulty)