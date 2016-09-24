export function postNewChallenge(previousState, action) {
	// Currently doing nothing with action.data
  const newUserPost = {
    name: '',
    author: '',
    difficulty: '',
    description: '',
    testCases: [],
    testPassed: false,
    challengeType: 'new-challenge',
  }
  return Object.assign({}, previousState, { newUserPost });
}
