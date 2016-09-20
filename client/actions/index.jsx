import axios from 'axios';


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
    axios.get('/regex/challenges').then((data) => {
      dispatch({
        type: 'GET-CHALLENGES',
        payload: data,
      })
    });
  };
}
