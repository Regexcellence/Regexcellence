import { inputValidator, resetWellFormedInput } from './inputValidation';
import { updateChallenges, updateTutorials } from './updateChallenges';
import { regexValidator } from './regexValidation';
import { updatePostInput } from './postChallengeInputUpdate';
import { updatePostTestCases } from './postTestCase';
import { postNewChallenge } from './postNewChallenge';
import { toggleReveal } from './toggleReveal';
import { getUserInfo } from './userInfo';

const initialState = {
  challenges: [],
  tutorials: [],
  userInput: '',
  progress: { width: 0 },
  wellFormedInput: true,
  newUserPost: {
    name: '',
    author: 'User',
    difficulty: '',
    description: '',
    testCases: [],
    testPassed: false,
    challengeType: 'new-challenge',
    authenticatedInput: false,
  },
  userInfo: {},
};

const actionHandler = {
  'INPUT-PATTERN-UPDATE': inputValidator,
  'TEST-REGEX': regexValidator,
  'GET-CHALLENGES': updateChallenges,
  'GET-TUTORIALS': updateTutorials,
  'UPDATE-POST-INPUT': updatePostInput,
  'POST-EDIT-TESTCASE': updatePostTestCases,
  'POST-CHALLENGE': postNewChallenge,
  'TOGGLE-REVEAL-ANSWER': toggleReveal,
  'RESET-WELLFORMED-INPUT': resetWellFormedInput,
  'GET-USER-INFO': getUserInfo,

};

const reducer = (state = initialState, action) => {
  if (actionHandler[action.type]) {
    return actionHandler[action.type](state, action);
  }
  return state;
};

export default reducer;
