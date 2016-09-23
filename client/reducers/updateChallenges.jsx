export function updateChallenges(previousState, action) {
  const challenges = tagPayload(action.payload, 'challenge');
  return Object.assign({}, previousState, { challenges });
}

export function updateTutorials(previousState, action) {
  const tutorials = tagPayload(action.payload, 'tutorial');
  return Object.assign({}, previousState, { tutorials });
}

// For adding validation type, e.g. 'tutorial' or 'challenge'
function tagPayload(payload, tag) {
	return payload.map(object => Object.assign({}, object, { challengeType: tag }));
}