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
