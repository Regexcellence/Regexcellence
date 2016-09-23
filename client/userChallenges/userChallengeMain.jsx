import React from 'react';
import { connect } from 'react-redux';

import Challenge from '../challenge/challenge';

class UserChallengeMain extends React.Component {
	constructor(props) {
		super(props)
		this.findChallengeId = this.findChallengeId.bind(this);
	}
	findChallengeId(id) {
		for (let i = 0; i < this.props.challenges.length; i++) {
			if (id === this.props.challenges[i]._id) {
				return this.props.challenges[i]
			}
		}
	}
	render() {
		const currentChallenge = this.findChallenge(this.props.params.challengeid);
		const nextUrl = { url: '', nextText: 'Back to Challenges' };
		if (challengeId) {
			return <Challenge
				key={currentChallenge._id}
        challengeInfo={currentChallenge}
        nextUrl={nextUrl} 
			/>
		} else {
			return false; 
		}
	}
}

const mapStateToProps(state) => {
	return { challenges: state.challenges }
}

export default connect(mapStateToProps)(UserChallengeMain);