export function cleanChallenge(challengeObject) {
  return {
    name: challengeObject.name,
    description: challengeObject.description,
    author: challengeObject.author,
    difficulty: challengeObject.difficulty,
    testCases: cleanTestCases(challengeObject.testCases),
  }
}

function cleanTestCases(testCases) {
  return testCases.map((testCase) => {
    return {
      case: testCase.case,
      expectation: testCase.expectation,
    };
  });
}

/*
{
	"name": "Spaces at the beginning and end of strings",
	"description": "Write a regex that matches whitespace at the beginning and end of strings",
	"author": "Troy",
	"difficulty": "2",
	"testCases": [
	  { "case": " I have whitespace! ", "expectation": true },
	  { "case": "I have more whitespace!   ", "expectation": true },
	  { "case": "   I have some whitespace too!", "expectation": true },
	  { "case": "Did you say whitespace?", "expectation": false }
	  { "case": "Naw", "expectation": false }
	  { "case": "Remember me?", "expectation": false }
	],
},

*/
