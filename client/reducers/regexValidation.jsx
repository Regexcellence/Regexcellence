// TODO: Need to implement state changer for if tests all pass.

export function regexValidator(previousState, action) {
  const challengeId = action.challengeId;
  const parsedInput = regexParser(action.input);
  const previousChallenges = previousState.challenges.slice();
  const challenges = previousChallenges.map((challenge) => {
    if (challenge._id === challengeId) {
      return testCasesExtractor(parsedInput, challenge);
    }
    return challenge;
  });
  return Object.assign({}, previousState, { challenges });
}
// Strips input pattern of both forward slashes, and separates flags if any.
function regexParser(input) {
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
  const testPassed = testCases.reduce((prev, curr) => prev === curr.result, true);
  console.log('test result : ', testPassed);
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
