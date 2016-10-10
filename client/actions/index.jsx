export function testRegexInput(challengeId, input, challengeType) {
  return {
    type: 'TEST-REGEX',
    regexObject: {
      challengeId,
      input,
      challengeType,
    },
  };
}

export function inputActionCreator(newInput) {
  return {
    type: 'INPUT-PATTERN-UPDATE',
    newInput,
  };
}

export function postChallengeInputUpdate(inputObject) {
  return {
    type: 'UPDATE-POST-INPUT',
    inputObject,
  };
}

export function postEditTestCase(action, data) {
  return {
    type: 'POST-EDIT-TESTCASE',
    testCaseObject: {
      action,
      data,
    },
  };
}

export function toggleAnswer(challengeId, challengeType) {
  return {
    type: 'TOGGLE-REVEAL-ANSWER',
    challengeId,
    challengeType,
  };
}

export function resetWellFormedInput() {
  return {
    type: 'RESET-WELLFORMED-INPUT'
  };
}

export function addUserInfoToPost(gitHandle, _id) {
  return {
    type: 'USERINFO-TO-POST',
    gitHandle,
    _id,
  };
}

export function filterChallenges(filterParams) {
  return {
    type: 'FILTER-CHALLENGES',
    filterParams
  };
}
