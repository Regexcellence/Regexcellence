import { createStore } from 'redux';

const initialState = [
  { id: 1, case: 'abcd', result: null, task: 'Match', expectation: true },
  { id: 2, case: 'acd', result: null, task: 'Skip', expectation: false },
  { id: 3, case: 'abcde', result: null, task: 'Match', expectation: true },
];

/* Action = {
	type: 'UPDATE-RESULT',
	testResult: null/true/false,
	challengeId: INTEGER
}
*/

const reducer = (state = initialState, action) => {
	if (action.type === 'UPDATE-RESULT') {
		return state.map((challenge) => {
			if (action.challengeId === challenge.id) {
				challenge.result = action.testResult;
			} 
			return challenge;
		});
	}
	return state; 
};

export default createStore(reducer); 