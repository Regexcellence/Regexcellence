export function logUserInfo(previousState, action) {
	const { userInfo } = action;
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