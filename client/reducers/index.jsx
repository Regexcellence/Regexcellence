// import { combineReducers } from 'redux';
// import Lessons from './reducer_lessons';

// const allReducers = combineReducers({
//   lessons: Lessons
// });

// export default allReducers;
import { createStore } from 'redux';

const initialState = [
  { id: 1, case: 'abcd', result: null, task: 'Match', expectation: true },
  { id: 2, case: 'acd', result: null, task: 'Skip', expectation: false },
  { id: 3, case: 'abcde', result: null, task: 'Match', expectation: true },
];

/* Action = {
	type: 'UPDATE-RESULT',
	newVal: null/true/false,
	challengeId: INTEGER
}
*/
const reducer = (state = initialState, action) => {
	if (action.type === 'UPDATE-RESULT') {
		return state.map((challenge) => {
			if (action.id === challenge.id) {
				challenge.id = action.newVal;
			} 
			return challenge;
		});
	}
	return state; 
};

export default createStore(reducer); 