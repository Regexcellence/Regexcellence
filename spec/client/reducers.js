const should = require('should');
const _ = require('lodash');

const initialState = require('./initialState');
const inputValidation = require('../../client/reducers/inputValidation');
const regexValidation = require('../../client/reducers/regexValidation');
const regexHelpers = require('../../client/reducers/regexHelpers');

describe('Reducers-', () => {
	const { inputValidator } = inputValidation;
	const { regexValidator } = regexValidation;
	const { regexParser, snagRegexFlags, testCasesExtractor, checkRegex, innerTextMatching } = regexHelpers;
	describe('INPUT-PATTERN-UPDATE-', () => {
		it('inputValidator: Should return true for well-formed input', () => {
			inputValidator(initialState, { newInput: '/abc/' }).wellFormedInput.should.equal(true);
			inputValidator(initialState, { newInput: '/(abc){1,2}/g' }).wellFormedInput.should.equal(true);
			inputValidator(initialState, { newInput: '/\/\/{5}\/\//gimuy' }).wellFormedInput.should.equal(true);
			inputValidator(initialState, { newInput: '/\\\\/gimuy' }).wellFormedInput.should.equal(true);
		});
		it('inputValidator: Should return false for mal-formed input', () => {
			inputValidator(initialState, { newInput: '/(/' }).wellFormedInput.should.equal(false);
			inputValidator(initialState, { newInput: '/+/' }).wellFormedInput.should.equal(false);
			inputValidator(initialState, { newInput: '/(?<=\\s)(?<!\\:\\s)#.*?\\{.*?\\}/gm' }).wellFormedInput.should.equal(false);
			inputValidator(initialState, { newInput: '/*/gm' }).wellFormedInput.should.equal(false);
		});
	});
	describe('TEST-REGEX-', () => {
		describe('regexHelpers-', () => {
			it('snagRegexFlags: Should return flags on a regex pattern', () => {
				snagRegexFlags('/abc/gimuy').should.equal('gimuy');
				snagRegexFlags('/abc/g').should.equal('g');
				snagRegexFlags('/abc/y').should.equal('y');
			});
			it('snagRegexFlags: Should return null for no flags, invalid flags, or too many flags', () => {
				// Shouldjs does not have a null assertion apparently.
				(snagRegexFlags('/abc/') === null).should.be.true;
				(snagRegexFlags('/abc/k') === null).should.be.true;
				(snagRegexFlags('/abc/gimuyg') === null).should.be.true;
				(snagRegexFlags('/abc/lalalalala') === null).should.be.true;
			});
			it('regexParser: Should return an object with parsed input and flags', () => {
				const { pattern, flags } = regexParser('/abc/g');
				pattern.should.equal('abc');
				flags.should.equal('g');
			});
			it('regexParser: Should return an object with parsed input and null flags', () => {
				const { pattern, flags } = regexParser('/a{0,1}/');
				pattern.should.equal('a{0,1}');
				(flags === null).should.be.true;
			});
			it('regexParser: Should return an object with parsed input and flags', () => {
				const { pattern, flags } = regexParser('/\\\\/g');
				pattern.should.equal('\\\\');
				flags.should.equal('g');
			});
			it('testCasesExtractor: Should return the test result and testCase results', () => {
				const isItALetter = _.find(initialState.challenges, (challenge) => '57f3191f2bf2082f7a74ccd5' === challenge._id);
				testCasesExtractor({ pattern: '\\D', flags: null }, isItALetter).testPassed.should.be.true;
				testCasesExtractor({ pattern: '\\w', flags: null }, isItALetter).testPassed.should.be.false;
				testCasesExtractor({ pattern: '\\w', flags: 'g' }, isItALetter).testPassed.should.be.false;
				const isItANumber = _.find(initialState.challenges, (challenge) => '57f3191f2bf2082f7a74ccf3' === challenge._id);
				testCasesExtractor({ pattern: '\\d', flags: null }, isItANumber).testPassed.should.be.true;
				testCasesExtractor({ pattern: '\\D', flags: null }, isItANumber).testPassed.should.be.false;
				testCasesExtractor({ pattern: '[0-9]', flags: 'g' }, isItANumber).testPassed.should.be.true;
			})
			it('checkRegex: Should return an array of test cases that are all passed', () => {
				const isItALetter = _.find(initialState.challenges, (challenge) => '57f3191f2bf2082f7a74ccd5' === challenge._id);
				const testCaseResults = checkRegex({ pattern: '\\D', flags: null }, isItALetter.testCases);
				testCaseResults.should.be.instanceOf(Array);
				testCaseResults.forEach((testCase) => {
					testCase.result.should.be.true;
				});
			});
			it('checkRegex: Should return an array of test cases, some of which are passed for a partially invalid pattern', () => {
				const isItANumber = _.find(initialState.challenges, (challenge) => '57f3191f2bf2082f7a74ccf3' === challenge._id);
				const testCaseResults = checkRegex({ pattern: '\\W', flags: null }, isItANumber.testCases);
				testCaseResults.should.be.instanceOf(Array);
				_.some(testCaseResults, (testCase) => testCase.result).should.be.true;
			});
			it('innerTextMatching: Should return an object with parsed input', () => {
				innerTextMatching()
			})
		})
	})
});


/*


const initialState = {
  challenges: [],
  filtered_challenges: [],
  tutorials: [],
  userInput: '',
  progress: { width: 0 },
  wellFormedInput: true,
  showCongradulations: true,
  newUserPost: {
    name: '',
    author: 'User',
    authorId: '',
    difficulty: '1',
    description: '',
    testCases: [],
    testPassed: false,
    challengeType: 'new-challenge',
    authenticatedInput: false,
  },
  userInfo: {},
};


  'TEST-REGEX': regexValidator,
  'GET-CHALLENGES': updateChallenges,
  'GET-TUTORIALS': updateTutorials,
  'UPDATE-POST-INPUT': updatePostInput,
  'POST-EDIT-TESTCASE': updatePostTestCases,
  'POST-CHALLENGE': postNewChallenge,
  'TOGGLE-REVEAL-ANSWER': toggleReveal,
  'RESET-WELLFORMED-INPUT': resetWellFormedInput,
  'LOG-USER-INFO': logUserInfo,
  'LOGOUT': userLogout,
  'STORE-USER-COMPLETED-CHALLENGES': storeCompletedChallenges,
  'STORE-USER-AUTHORED-CHALLENGES': storeAuthoredChallenges,
  'USERINFO-TO-POST': updatePostAuthor,
  'FILTER-CHALLENGES': filterChallenges,
  'POST-COMPLETED-CHALLENGE': postCompletedChallenge,
  'ADD-NEW-COMPLETED-CHALLENGE': addCompletedChallenge
};


*/