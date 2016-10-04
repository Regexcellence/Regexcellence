export function updateChallenges(previousState, action) {
  const challenges = tagPayload(action.payload, 'challenge');
  const filtered_challenges = [...challenges];
  return Object.assign({}, previousState, { challenges, filtered_challenges });
}

export function updateTutorials(previousState, action) {
  const tutorials = tagPayload(action.payload, 'tutorial');
  return Object.assign({}, previousState, { tutorials });
}

export function postCompletedChallenge(previousState, action) {
	const { challengeId } = action;
	let { challenges, filtered_challenges }  = previousState;
	challenges = challenges.map((challenge) => {
		if (challenge._id === challengeId) {
			challenge.userCompleted = true; 
		}
		return challenge;
	});
	filtered_challenges = filtered_challenges.map((challenge) => {
		if (challenge._id === challengeId) {
			challenge.userCompleted = true; 
		}
		return challenge;
	});
	return Object.assign({}, previousState, { challenges, filtered_challenges });
}

// For adding validation type, e.g. 'tutorial' or 'challenge'
function tagPayload(payload, challengeType) {
	if (challengeType === 'challenge') {
		return payload.challenges.map(object => Object.assign({}, object, { 
			challengeType,
			testPassed: false,
			testCases: tagCaseList(object.testCases),
			revealAnswer: false,
			userCompleted: verifyUserCompleted(object._id, payload.user_completed),
			userAuthored: verifyUserAuthored(object._id, payload.authored_challenges)
		}));
	} else {
		return payload.map(object => Object.assign({}, object, { 
			challengeType,
			testPassed: false,
			testCases: tagCaseList(object.testCases),
			revealAnswer: false,
		}));
	}
}

function verifyUserCompleted(challengeId, completed_challenges) {
	if (!completed_challenges || !completed_challenges.length) {
		return false; 
	}
	if (completed_challenges.indexOf(challengeId) > -1) {
		return true; 
	}
	return false; 
}

function verifyUserAuthored(challengeId, authored_challenges) {
	if (!authored_challenges || !authored_challenges.length) {
		return false; 
	}
	if (authored_challenges.indexOf(challengeId) > -1) {
		return true; 
	}
	return false; 
}

// For keeping databse unpolluted by ephemeral data. 
function tagCaseList(caseList) {
	return caseList.map((caseObject) => {
		caseObject.result = null;
		caseObject.task = caseObject.expectation ? 'Match' : 'Skip';
		caseObject.innerMatches = {
			start: caseObject.case,
			match: '',
			end: '',
			globalMatch: []
		};
		return caseObject; 
	});
}
