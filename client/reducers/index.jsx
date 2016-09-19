// import { createStore } from 'redux';

const initialState = {
	challenges: [
	  { id: 1, case: 'abcd', result: null, task: 'Match', expectation: true },
	  { id: 2, case: 'acd', result: null, task: 'Skip', expectation: false },
	  { id: 3, case: 'abcde', result: null, task: 'Match', expectation: true },
	],
	userInput: '',
};

/* Action = {
	type: 'UPDATE-RESULT',
	testResult: null/true/false,
	challengeId: INTEGER
}
*/

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
	}
	return state; 
};

export default reducer;
// export default createStore(reducer); 
