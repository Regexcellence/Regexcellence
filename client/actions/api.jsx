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

export function getAllTutorials(dispatch) {
  return (dispatch) => {
    $.ajax('/regex/tutorial').then((data) => {
      dispatch({
        type: 'GET-TUTORIALS',
        payload: data,
      });
    })
  };
}

export function getAllChallenges() {
  return (dispatch) => {
    $.ajax('/regex/challenges').then((data) => {
      dispatch({
        type: 'GET-CHALLENGES',
        payload: data,
      })
    }).then(() => {
      getAllTutorials(dispatch)
    });
  };
}

function getUserAuthoredChallenges(userId) {
  return $.ajax(`/regex/user-info/authored-challenges?${userId}`);
}

export function getUserCompletedChallenges(userId) {
  return (dispatch) => {
    $.ajax(`/regex/challenges/user-completed?${userId}`).then((data) => {
      dispatch({
        type: 'STORE-USER-COMPLETED-CHALLENGES',
        payload: data,
      });
      return getUserAuthoredChallenges(userId);
    }).then((data) => {
      dispatch({
        type: 'STORE-USER-AUTHORED-CHALLENGES',
        payload: data,
      });
    });
  };
}

export function postNewChallengeAnswer(answer, challengeId, userId, username) {
  return (dispatch) => {
    $.ajax({
      method: 'POST',
      url: `/regex/challenges/new-answer?${challengeId}`,
      contentType: 'application/json',
      data: JSON.stringify({ answer, userId, username }),
    }).then(() => {
      console.log('success in posting answer!!');
    });
  };
}

export function postTutorialProgress(tutorialNumber, userId) {
  return (dispatch) => {
    $.ajax({
      method: 'POST',
      url: `/regex/tutorial-progress?${tutorialNumber}`,
    }).then((data) => {
      console.log("You made tutorial progress! Data: ", data);
    });
  }
}

export function postCompletedChallenge(challengeId, userId) {
  return (dispatch) => {
    $.ajax({
      method: 'POST',
      url: `/regex/challenges/completed-challenge?${userId}`,
      contentType: 'application/json',
      data: JSON.stringify({ challengeId }),
    }).then(() => {
      console.log('Posted to user db!')
    });
  };
}

export function getUserInfo() {
  return (dispatch) => {
    $.ajax('/regex/user-info').then((userInfo) => {
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
      window.location = '/';
      //This redirect when logout solution may be temporary
      dispatch({
        type: 'LOGOUT',
      });
    });
  };
}
