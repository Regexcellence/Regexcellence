// import axios from 'axios';
export function flagActionCreator(challenge, flagValue) {
  return {
    type: 'UPDATE-RESULT',
    testResult: flagValue,
    challengeId: challenge.id,
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
