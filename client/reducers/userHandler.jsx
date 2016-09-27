export function logUserInfo(previousState, action) {
	const { userInfo } = action;
	return Object.assign({}, previousState, { userInfo });
}