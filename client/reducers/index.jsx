import { inputValidator, resetWellFormedInput } from './inputValidation';
import { updateChallenges, updateTutorials } from './updateChallenges';
import { regexValidator } from './regexValidation';
import { updatePostInput, updatePostAuthor } from './postChallengeInputUpdate';
import { updatePostTestCases } from './postTestCase';
import { postNewChallenge } from './postNewChallenge';
import { toggleReveal } from './toggleReveal';
import { logUserInfo, userLogout, storeCompletedChallenges, storeAuthoredChallenges } from './userHandler';
import { filterChallenges } from './filterChallenges';

const initialState = {
  challenges: [],
  filtered_challenges: [],
  tutorials: [],
  userInput: '',
  progress: { width: 0 },
  wellFormedInput: true,
  showCongradulations: true,
  newUserPost: {
    name: '',
    author: 'User',
    authorId: '',
    difficulty: '1',
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
  'LOG-USER-INFO': logUserInfo,
  'LOGOUT': userLogout,
  'STORE-USER-COMPLETED-CHALLENGES': storeCompletedChallenges,
  'STORE-USER-AUTHORED-CHALLENGES': storeAuthoredChallenges,
  'USERINFO-TO-POST': updatePostAuthor,
  'FILTER-CHALLENGES': filterChallenges
};

const reducer = (state = initialState, action) => {
  if (actionHandler[action.type]) {
    return actionHandler[action.type](state, action);
  }
  return state;
};

export default reducer;
