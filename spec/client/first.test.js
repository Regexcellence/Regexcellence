import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Controls from '../client/controls/controls';
// import Challenge from '../client/challenge/challenge';
// import Challenges from '../client/challenges';
// import InputRegexValidation from '../client/challenge/inputRegexValidation';
import reducer from '../client/reducers/index';

import { inputValidator } from '../client/reducers/inputValidation';
import { regexValidator } from '../client/reducers/regexValidation';


const finalStore = applyMiddleware(thunk)(createStore);
const testStore = finalStore(reducer);

describe('<Controls />', () => {
  it('should have div tag', () => {
    const wrapper = shallow(<Controls store={testStore} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});

describe('[Reducer]: InputValidator', () => {
  it('should be a function.', () => {
    expect(typeof inputValidator).to.equal('function');
  });

  const action = { newInput: '/abc/' };
  const result = inputValidator({}, action);
  it('should return an object with a property of wellFormedInput.', () => {
    const checkProperty = result.hasOwnProperty('wellFormedInput');
    expect(checkProperty).to.equal(true);
  });

  const action2 = { newInput: 'abc' };
  const result2 = inputValidator({}, action2);
  it('should check if user input is in proper regex format.', () => {
    expect(result.wellFormedInput).to.equal(true);
    expect(result2.wellFormedInput).to.equal(false);
  });
});

describe('[Reducer]: RegexValidator', () => {
  it('should be a function.', () => {
    // console.log(inputValidator,'***');
    expect(typeof regexValidator).to.equal('function');
  });
  const tempState = { challenges: [{
  _id: 12345,
  order: 0,
  name: 'Learning your ABCs',
  description: 'Write a pattern that matches "abc" within any string',
  author: 'Troy',
  difficulty: 'easy',
  testCases: [
    { case: 'abcd', result: null, task: 'Match', expectation: true },
    { case: 'acd', result: null, task: 'Skip', expectation: false },
    { case: 'abcde', result: null, task: 'Match', expectation: true },
  ],
  testPassed: false }],
  };

  const action = { challengeId: 12345, input: '/abcd/' };
  const action2 = { challengeId: 12345, input: '/acd/' };

  const result = regexValidator(tempState, action);
  const result2 = regexValidator(tempState, action2);

  it('should return an object.', () => {
    expect(typeof result).to.equal('object');
  });

  it('should set property of testPassed to true once passed, vice versa.', () => {
    expect(result.challenges[0].testPassed).to.equal(true);
    expect(result2.challenges[0].testPassed).to.equal(false);
  });
});


// Invariant Violation: Could not find "store" in either the context or props of.
// Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to
