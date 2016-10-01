import React from 'react';
import { connect } from 'react-redux';

import { postChallengeInputUpdate } from '../actions/index';
import DifficultyBar from '../userChallenges/difficultyBar';

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
		  const colors = {
      1: '#9ad2cb',
      2: '#d3ecb0',
      3: '#f7f9be',
      4: '#ebd494',
      5: '#E27A78',
    };
    const difficultyStyle = {
      backgroundColor: colors[`${this.props.difficulty}`],
      width: (`${this.props.difficulty}` * 20) + '%',
    };
		if (this.props.editable) {
			return (
				<div>
					<h4>Select Difficulty: <span id="post-requirements">*Required</span></h4>
					<select 
						className="form-control"
						onChange={this.updateDifficulty} 
						name="difficulty"
					>;
						<option value="1">1 : very easy</option>
						<option value="2">2 : easy</option>
						<option value="3">3 : medium</option>
						<option value="4">4 : hard</option>
						<option value="5">5 : very hard</option>
					</select>
				</div>
			);
		} else {
			return this.props.challengeType === "challenge" ? (
				<div className="challenge-view-difficulty-bar" id="difficulty-bar-outer" title="Level">
          <div id="bar-text"><b>LEVEL {this.props.difficulty}</b></div>
          <div id="difficulty-bar-inner" style={difficultyStyle} />
        </div>
        ) : null;
		}
	}
}

export default connect(null, { postChallengeInputUpdate })(Difficulty);
