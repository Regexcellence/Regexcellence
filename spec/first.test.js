import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Controls from '../client/controls';
import Challenge from '../client/containers/challenge';
import Challenges from '../client/components/challenges';
import InputRegexValidation from '../client/containers/inputRegexValidation';
import reducer from '../client/reducers/index';

const finalStore = applyMiddleware(thunk)(createStore);
const testStore = finalStore(reducer);

describe('<Controls />', () => {
  it('should have div tag', () => {
    const wrapper = shallow(<Controls store={testStore} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});

describe('<Challenges />', () => {
  it('should have a state', () => {
    const wrapper = shallow(<Challenges store={testStore} />);
    expect(wrapper.state()).to.be.defined;
    expect(wrapper.state('solution') === 'abc').to.equal(true);
  });
});

describe('<Challenge />', () => {
  it('should have props challengeInfo', () => {
    const wrapper = shallow(<Challenge store={testStore} />);
    expect(wrapper.props().challengeInfo).to.be.defined;
  });
});

describe('<InputRegexValidation />', () => {
  it('checkRegex should be defined', () => {
    const wrapper = shallow(<InputRegexValidation store={testStore} />);
    expect(wrapper.checkRegex).to.be.defined;
  });

  it('checkRegex should be a function', () => {
    const wrapper = shallow(<InputRegexValidation store={testStore} />);
    expect(wrapper.instance().checkRegex).to.be.a('function');
  });
});


// Invariant Violation: Could not find "store" in either the context or props of.
// Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to
