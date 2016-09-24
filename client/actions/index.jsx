export function testRegexInput(challengeId, input, challengeType) {
  return {
    type: 'TEST-REGEX',
    regexObject: {
      challengeId,
      input,
      challengeType: challengeType || 'tutorial',
    }
  };
}

export function inputActionCreator(newInput) {
  return {
    type: 'INPUT-PATTERN-UPDATE',
    newInput,
  };
}

export function getAllChallenges() {
  return (dispatch) => {
    $.ajax('/regex/challenges').then((data) => {
      console.log('User Challenge DATAAA', data);
      dispatch({
        type: 'GET-CHALLENGES',
        payload: data,
      });
    });
  };
}

export function getAllTutorials() {
  return (dispatch) => {
    $.ajax('/regex/tutorial').then((data) => {
      console.log('TUTORIAL DATA', data);
      dispatch({
        type: 'GET-TUTORIALS',
        payload: data,
      });
    });
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

export function postChallengeActionCreator(postInput) {
  console.log('Post Input: ', postInput);
  return (dispatch) => {
    // To clean postInput of client side properties. 
    if (postInput.innerMatches) delete postInput.innerMatches;
    $.ajax({
      method: 'POST',
      url: '/regex/challenges',
      contentType: 'application/x-www-form-urlencoded',
      data: postInput,
    }).then((data) => {
      dispatch({
        type: 'POST-CHALLENGE',
        data,
      });
    });
  };
}
