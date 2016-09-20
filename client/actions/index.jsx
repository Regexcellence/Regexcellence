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
      console.log('DATAAA', data);
      dispatch({
        type: 'GET-CHALLENGES',
        payload: data,
      });
    });
  };
}
