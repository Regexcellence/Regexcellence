import { inputValidator } from './inputValidation';
import { updateChallenges, updateTutorials } from './updateChallenges';
import { regexValidator } from './regexValidation';
import { updatePostInput, updatePostTestCases } from './postChallengeInputUpdate';

const initialState = {
  challenges: [],
  tutorials: [],
  userInput: '',
  wellFormedInput: true,
  newUserPost: {
    name: '',
    author: '',
    difficulty: '',
    description: '',
    testCases: [],
    testPassed: false,
    challengeType: 'new-challenge',
  },
};

const actionHandler = {
  'INPUT-PATTERN-UPDATE': inputValidator,
  'TEST-REGEX': regexValidator,
  'GET-CHALLENGES': updateChallenges,
  'GET-TUTORIALS': updateTutorials,
  'UPDATE-POST-INPUT': updatePostInput,
  'POST-EDIT-TESTCASE': updatePostTestCases,
};

const reducer = (state = initialState, action) => {
  if (actionHandler[action.type]) {
    return actionHandler[action.type](state, action);
  }
  return state;
};

export default reducer;
