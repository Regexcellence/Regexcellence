// Strips input pattern of both forward slashes, and separates flags if any.
export function regexParser(input) {
    const inputArr = input.split('');
    // To take off first forward slash.
    inputArr.shift();
    // To take off second forward slash plus any flags that may exist.
    let pattern = inputArr.join('').replace(/[a-z]*$/, '').split('');
    pattern.pop();
    pattern = pattern.join('');
    const flags = snagRegexFlags(input);
    return { pattern, flags };
}
export function testCasesExtractor(parsedInput, challenge) {
  const testCases = checkRegex(parsedInput, challenge.testCases);
  let testPassed = true;
  for (let i = 0; i < testCases.length; i++) {
    testCases[i].innerMatches = innerTextMatching(parsedInput, testCases[i]);
    if (!testCases[i].result) {
      testPassed = false;
    }
  }
  //console.log('test result: ', testPassed);
  return Object.assign(
    {},
    challenge,
    { testCases, testPassed }
  );
}
// To grab the flags at the end of a regex pattern (i.e. after the second forward slash)
function snagRegexFlags(input) {
    const flags = input.match(/\/([gimuy]{1,5})$/);
    return flags ? flags[1] : null;
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
  let globalMatch = [];
  // Match pattern e.g. 'hello world'.match(/o/) => [ 'o', index: 4, input: 'hello world' ]
  const matchPattern = testCase.case.match(regex);
  if (matchPattern !== null) {
    if (!/g/.test(parsedInput.flags)) {
      const caseCopy = testCase.case.split('');
      start = caseCopy.slice(0, matchPattern.index).join('');
      end = caseCopy.slice(matchPattern.index + matchPattern[0].length).join('');
      match = caseCopy.splice(matchPattern.index, matchPattern[0].length).join('');
    } else {
    //   let caseCopy = testCase.case.split('');
    //   for (let i = 0; i < matchPattern.length; i++) {
    //     let matchRegex = new RegExp(matchPattern[i]);
    //     let globalIteration = caseCopy.join('').match(matchRegex);
    //     start = caseCopy.splice(0, globalIteration.index).join('');
    //     match = caseCopy.splice(0, globalIteration[0].length).join('');
    //     if (i === globalIteration.length - 1) {
    //       end = caseCopy.slice().join('');
    //       globalMatch.push({ start, match, end });
    //     } else {
    //       globalMatch.push({ start, match });
    //       caseCopy = caseCopy.slice().join('');
    //     }
    //   }
    }
  }
  return {
    start,
    match,
    end,
    globalMatch,
  };
}
