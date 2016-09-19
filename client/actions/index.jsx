export function flagActionCreator(challenge, flagValue) {
  return {
    type: 'UPDATE-RESULT',
    testResult: flagValue,
    challengeId: challenge.id,
  }
}

export function inputActionCreator(newInput) {
  return {
    type: 'INPUT-PATTERN-UPDATE',
    newInput,
  }
}
