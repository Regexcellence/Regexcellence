export function updateChallenges(previousState, action) {
  const challenges = tagPayload(action.payload, 'challenge');
  return Object.assign({}, previousState, { challenges });
}

export function updateTutorials(previousState, action) {
  const tutorials = tagPayload(action.payload, 'tutorial');
  return Object.assign({}, previousState, { tutorials });
}

// For adding validation type, e.g. 'tutorial' or 'challenge'
function tagPayload(payload, challengeType) {
	return payload.map(object => Object.assign({}, object, { 
		challengeType,
		testPassed: false,
		testCases: tagCaseList(object.testCases),
		revealAnswer: false,
	}));
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
