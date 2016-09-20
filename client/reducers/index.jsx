const initialState = {
  challenges: [
    { id: 1, case: 'abcd', result: null, task: 'Match', expectation: true },
    { id: 2, case: 'acd', result: null, task: 'Skip', expectation: false },
    { id: 3, case: 'abcde', result: null, task: 'Match', expectation: true },
  ],
  userInput: '',
  allChallenges: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'UPDATE-RESULT') {
    const challenges = state.challenges.map((challenge) => {
      if (action.challengeId === challenge.id) {
        challenge.result = action.testResult;
      }
      return challenge;
    });
    return Object.assign({}, state, { challenges });
  } else if (action.type === 'INPUT-PATTERN-UPDATE') {
    const userInput = action.newInput;
    return Object.assign({}, state, { userInput });
  } else if (action.type === 'GET-CHALLENGES') {
    const allChallenges = action.payload;
    return Object.assign({}, state, { allChallenges });
  }
  return state;
};

export default reducer;
