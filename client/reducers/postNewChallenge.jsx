export function postNewChallenge(previousState, action) {
  const newUserPost = action.data;
  return Object.assign({}, previousState, { newUserPost });
}
