export function updateChallenges(previousState, action) {
  const challenges = action.payload;
  return Object.assign({}, previousState, { challenges });
}
