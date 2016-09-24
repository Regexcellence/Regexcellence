export function testRegexInput(challengeId, input, challengeType) {
  return {
    type: 'TEST-REGEX',
    regexObject: {
      challengeId,
      input,
      challengeType: challengeType,
    }
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
    inputObject
  }
}

export function postEditTestCase(action, data) {
  return {
    type: 'POST-EDIT-TESTCASE',
    testCaseObject: {
      action,
      data,
    },
  }
}


