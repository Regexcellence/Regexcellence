import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Controls from '../client/controls';
import Challenge from '../client/components/challenge';

describe('<Controls />', () => {
  it('should have h3 tag', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('h3')).to.have.length(1);
  });
});

describe('<Challenge />', () => {
  const wrapper = shallow(<Challenge />);
  it('should have a state', () => {
    expect(wrapper.state()).to.be.defined;
    expect(wrapper.state('solution') === 'abc').to.equal(true);
  });

  it('should have a checkRegex function', () => {
    expect(wrapper.instance().checkRegex).to.be.a('function');
  });
});
