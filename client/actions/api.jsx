import { cleanChallenge } from './helpers';

export function postChallengeActionCreator(postInput) {
  console.log('Post Input: ', postInput);
  return (dispatch) => {
    // To clean postInput of client side properties.
    //if (postInput.innerMatches) delete postInput.innerMatches;
    postInput = cleanChallenge(postInput);
    $.ajax({
      method: 'POST',
      url: '/regex/challenges/new-challenge',
      contentType: 'application/json',
      data: JSON.stringify(postInput),
    }).then((data) => {
      dispatch({
        type: 'POST-CHALLENGE',
        data,
      });
    });
  };
}

export function getAllTutorials() {
  return (dispatch) => {
    $.ajax('/regex/tutorial').then((data) => {
      dispatch({
        type: 'GET-TUTORIALS',
        payload: data,
      });
    });
  };
}

export function getAllChallenges() {
  return (dispatch) => {
    $.ajax('/regex/challenges').then((data) => {
      dispatch({
        type: 'GET-CHALLENGES',
        payload: data,
      });
    });
  };
}

export function postNewChallengeAnswer(answer, challengeId) {
  return (dispatch) => {
    $.ajax({
      method: 'POST',
      url: `/regex/challenges/new-answer?${challengeId}`,
      contentType: 'application/json',
      data: JSON.stringify({ answer }),
    }).then(() => {
      console.log('success in posting answer!!');
    });
  };
}

export function getUserInfo() {
  return (dispatch) => {
    $.ajax('/regex/user-info').then((userInfo) => {
      console.log(userInfo);
      dispatch({
        type: 'LOG-USER-INFO',
        userInfo,
      });
    });
  };
}

export function logOut() {
  return (dispatch) => {
    $.ajax('/regex/logout').then(() => {
      dispatch({
        type: 'LOGOUT',
      });
    });
  };
}
