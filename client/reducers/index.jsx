import { inputValidator } from './inputValidation';
import { updateChallenges, updateTutorials } from './updateChallenges';
import { regexValidator } from './regexValidation';
import { updatePostInput } from './postChallengeInputUpdate';
import { updatePostTestCases } from './postTestCase';
import { postNewChallenge } from './postNewChallenge';
import { toggleReveal } from './toggleReveal';

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
  },
  newTestCase: {
    case: '',
    
  }
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
};

const reducer = (state = initialState, action) => {
  if (actionHandler[action.type]) {
    return actionHandler[action.type](state, action);
  }
  return state;
};

export default reducer;
