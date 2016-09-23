import { inputValidator } from './inputValidation';
import { updateChallenges } from './updateChallenges';
import { regexValidator } from './regexValidation';

const initialState = {
  challenges: [],
  userInput: '',
  wellFormedInput: true,
  newUserPost: {
    name: '',
    author: '',
    difficulty: '',
    description: '',
  },
};

const actionHandler = {
  'INPUT-PATTERN-UPDATE': inputValidator,
  'UPDATE-RESULT': regexValidator,
  'GET-CHALLENGES': updateChallenges,
};

const reducer = (state = initialState, action) => {
  if (actionHandler[action.type]) {
    return actionHandler[action.type](state, action);
  }
  return state;
};

export default reducer;
