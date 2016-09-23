export function flagActionCreator(challengeId, input) {
  return {
    type: 'UPDATE-RESULT',
    challengeId,
    input,
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

export function getAllTutorial() {
  return (dispatch) => {
    $.ajax('/regex/tutorial').then((data) => {
      console.log('TUTORIAL DATA', data);
      dispatch({
        type: 'GET-CHALLENGES',
        payload: data,
      });
    });
  };
}

export function postChallengeActionCreator(postInput) {
  console.log('Post Input: ', postInput);
  return (dispatch) => {
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
