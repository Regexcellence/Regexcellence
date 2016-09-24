// TODO: Need to implement state changer for if tests all pass.

export function regexValidator(previousState, action) {
  const regexObject = action.regexObject;
  const challengeId = regexObject.challengeId;
  console.log(regexObject.challengeType)
  const parsedInput = regexParser(regexObject.input);

  if (regexObject.challengeType === 'challenge') {
    const previousChallenges = previousState.challenges.slice();
    const challenges = previousChallenges.map((challenge) => {
      if (challenge._id === challengeId) {
        return testCasesExtractor(parsedInput, challenge);
      }
      return challenge;
    });
    return Object.assign({}, previousState, { challenges });
  } else if (regexObject.challengeType === 'tutorial') {
    const previousTutorials = previousState.tutorials.slice();
    const tutorials = previousTutorials.map((challenge) => {
      if (challenge._id === challengeId) {
        return testCasesExtractor(parsedInput, challenge);
      }
      return challenge;
    });
    return Object.assign({}, previousState, { tutorials });
  } else if (regexObject.challengeType === 'new-challenge') {
    const newUserPost = testCasesExtractor(parsedInput, previousState.newUserPost);
    return Object.assign({}, previousState, { newUserPost })
  }
}
function funnelReducer() {

}
// Strips input pattern of both forward slashes, and separates flags if any.
export function regexParser(input) {
    const inputArr = input.split('');
    // To take off first forward slash.
    inputArr.shift();
    // To take off second forward slash plus any flags that may exist.
    const pattern = inputArr.join('').replace(/\/.*$/, '');
    const flags = snagRegexFlags(input);
    return { pattern, flags };
}
// To grab the flags at the end of a regex pattern (i.e. after the second forward slash)
function snagRegexFlags(input) {
    const flags = input.match(/\/([gimuy]{1,5})$/);
    return flags ? flags[1] : null;
}
function testCasesExtractor(parsedInput, challenge) {
  const testCases = checkRegex(parsedInput, challenge.testCases);
  let testPassed = true;
  for (let i = 0; i < testCases.length; i++) {
    testCases[i].innerMatches = innerTextMatching(parsedInput, testCases[i]);
    if (!testCases[i].result) {
      testPassed = false;
    }
  }
  console.log('test result: ', testPassed);
  return Object.assign(
    {},
    challenge,
    { testCases, testPassed }
  );
}
function checkRegex(parsedInput, testCases) {
  // To check to see if there are flags in the pattern,
  // as the RegExp instantiator doesn't allow a null/false value for flags.
  const regex = parsedInput.flags
    ? new RegExp(parsedInput.pattern, parsedInput.flags)
    : new RegExp(parsedInput.pattern);
  return testCases.map((test) => {
    if (!parsedInput.pattern.length) {
      test.result = null;
    } else if (regex.test(test.case) === test.expectation) {
      test.result = true;
    } else {
      test.result = false;
    }
    return test;
  });
}
function innerTextMatching(parsedInput, testCase) {
  const regex = parsedInput.flags
    ? new RegExp(parsedInput.pattern, parsedInput.flags)
    : new RegExp(parsedInput.pattern);
  let start = testCase.case;
  let match = '';
  let end = '';
  if (!parsedInput.flags) {
    // Match pattern e.g. 'hello world'.match(/o/) => [ 'o', index: 4, input: 'hello world' ]
    const matchPattern = testCase.case.match(regex);
    if (matchPattern !== null) {
      const caseCopy = testCase.case.split('');
      start = caseCopy.slice(0, matchPattern.index).join('');
      end = caseCopy.slice(matchPattern.index + matchPattern[0].length).join('');
      match = caseCopy.splice(matchPattern.index, matchPattern[0].length).join('');
    }
  }
  return {
    start,
    match,
    end,
  };
}
