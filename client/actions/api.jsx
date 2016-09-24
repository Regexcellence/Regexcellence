export function postChallengeActionCreator(postInput) {
  console.log('Post Input: ', postInput);
  return (dispatch) => {
    // To clean postInput of client side properties. 
    if (postInput.innerMatches) delete postInput.innerMatches;
    $.ajax({
      method: 'POST',
      url: '/regex/challenges',
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
      console.log('TUTORIAL DATA', data);
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
      console.log('User Challenge DATAAA', data);
      dispatch({
        type: 'GET-CHALLENGES',
        payload: data,
      });
    });
  };
}