export function updateChallenges(previousState, action) {
  const challenges = tagPayload(action.payload, 'challenge');
  const filtered_challenges = [...challenges];
  return Object.assign({}, previousState, { challenges, filtered_challenges });
}

export function updateTutorials(previousState, action) {
  const tutorials = tagPayload(action.payload, 'tutorial');
  return Object.assign({}, previousState, { tutorials });
}

// For adding validation type, e.g. 'tutorial' or 'challenge'
function tagPayload(payload, challengeType) {
	if (challengeType === 'challenge') {
		return payload.challenges.map(object => Object.assign({}, object, { 
			challengeType,
			testPassed: false,
			testCases: tagCaseList(object.testCases),
			revealAnswer: false,
			userCompleted: verifyUserCompleted(object._id, payload.user_completed)
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
