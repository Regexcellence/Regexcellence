import _ from 'lodash';

export function logUserInfo(previousState, action) {
  let { userInfo } = action;
  const { _id, gitHandle, avatar_url } = userInfo;
  userInfo = Object.assign({}, userInfo, { _id, gitHandle, avatar_url });
  return Object.assign({}, previousState, { userInfo });
}

export function userLogout(previousState) {
  return Object.assign({}, previousState, {});
}

export function storeCompletedChallenges(previousState, action) {
  const { payload } = action;
  const userInfo = Object.assign({}, previousState.userInfo, { completed_challenges: payload });
  return Object.assign({}, previousState, { userInfo });
}

export function storeAuthoredChallenges(previousState, action) {
  const { payload } = action;
  const userInfo = Object.assign({}, previousState.userInfo, { authored_challenges: payload });
  return Object.assign({}, previousState, { userInfo });
}

export function addCompletedChallenge(previousState, action) {
  const { challengeId } = action; 
  let { challenges, userInfo } = previousState;
  const completedChallenge = _.find(challenges, (o) => o._id === challengeId);
  userInfo = Object.assign({}, userInfo, { 
    completed_challenges: [...userInfo.completed_challenges, completedChallenge]
  })
  return Object.assign({}, previousState, { userInfo })
}
