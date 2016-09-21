import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Controls from '../client/controls/controls';
import Challenge from '../client/challenge/challenge';
import Challenges from '../client/challenges';
import InputRegexValidation from '../client/challenge/inputRegexValidation';
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
    // console.log(inputValidator,'***');
    expect(typeof inputValidator).to.equal('function');
  });

  it('should return an object with a property of wellFormedInput.', () => {
    const action = { newInput: '/abc/'};
    const result = inputValidator({}, action);
    expect(result.hasOwnProperty('wellFormedInput')).to.equal(true);
  });

  it('should check if user input is in proper regex format.', () => {
    const action = { newInput: '/abc/'};
    const action2 = { newInput: 'abc'};
    const result = inputValidator({}, action);
    const result2 = inputValidator({}, action2);
    expect(result.wellFormedInput).to.equal(true);
    expect(result2.wellFormedInput).to.equal(false);
  });
});


// describe('<InputRegexValidation />', () => {
//   const wrapper = shallow(<InputRegexValidation store={testStore} />);
//   it('checkRegex should be defined', () => {
//     expect(wrapper.checkRegex).to.be.defined;
//   });

//   it('checkRegex should be a function', () => {
//     expect(wrapper.instance().checkRegex).to.be.a('function');
//   });
// });


// Invariant Violation: Could not find "store" in either the context or props of.
// Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to
