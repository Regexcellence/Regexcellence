export function logUserInfo(previousState, action) {
	const { userInfo } = action;
	return Object.assign({}, previousState, { userInfo });
}

export function userLogout(previousState) {
  return Object.assign({}, previousState, {});
}