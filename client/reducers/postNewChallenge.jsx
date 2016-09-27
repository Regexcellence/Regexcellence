export function postNewChallenge(previousState, action) {
	// Currently doing nothing with action.data
  const newUserPost = {
    name: '',
    author: 'User',
    difficulty: '',
    description: '',
    testCases: [],
    testPassed: false,
    challengeType: 'new-challenge',
    authenticatedInput: false,
  };
  return Object.assign({}, previousState, { newUserPost });
}
