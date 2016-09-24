import { regexParser, testCasesExtractor } from './regexHelpers';

export function regexValidator(previousState, action) {
  const challengeTypes = {
    'challenge': testChallengeInput,
    'tutorial': testTutorialInput,
    'new-challenge': testNewChallengeInput,
  };
  const regexObject = action.regexObject;
  const challengeId = regexObject.challengeId;
  const parsedInput = regexParser(regexObject.input);
  // Validate input based on challengeType. 
  return challengeTypes[regexObject.challengeType](previousState, challengeId, parsedInput);
}

function testChallengeInput(previousState, challengeId, parsedInput) {
  const previousChallenges = previousState.challenges.slice();
  const challenges = previousChallenges.map((challenge) => {
    if (challenge._id === challengeId) {
      return testCasesExtractor(parsedInput, challenge);
    }
    return challenge;
  });
  return Object.assign({}, previousState, { challenges });
}
function testTutorialInput(previousState, challengeId, parsedInput) {
  const previousTutorials = previousState.tutorials.slice();
  const tutorials = previousTutorials.map((challenge) => {
    if (challenge._id === challengeId) {
      return testCasesExtractor(parsedInput, challenge);
    }
    return challenge;
  });
  return Object.assign({}, previousState, { tutorials });
}
function testNewChallengeInput(previousState, challengeId, parsedInput) {
  const newUserPost = testCasesExtractor(parsedInput, previousState.newUserPost);
  return Object.assign({}, previousState, { newUserPost })
}