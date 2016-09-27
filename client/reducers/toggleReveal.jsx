export function toggleReveal(previousState, action) {
	const challengeTypes = {
	  'challenge': toggleChallengeAnswer,
	  'tutorial': toggleTutorialAnswer,
	};
	const id = action.challengeId;
	return challengeTypes[action.challengeType](previousState, id);
}

function toggleChallengeAnswer(previousState, id) {
	const challenges = previousState.challenges.slice();
	return Object.assign({}, previousState, {
		challenges: challenges.map((challenge) => {
			if (id === challenge._id) {
				challenge = Object.assign({}, challenge, { revealAnswer: !challenge.revealAnswer })
			} 
			return challenge; 
		}) 
	})
}

function toggleTutorialAnswer(previousState, id) {
	const tutorials = previousState.tutorials.slice();
	return Object.assign({}, previousState, {
		tutorials: tutorials.map((tutorial) => {
			if (id === tutorial._id) {
				tutorial = Object.assign({}, tutorial, { revealAnswer: !tutorial.revealAnswer })
			} 
			return tutorial; 
		}) 
	})
}