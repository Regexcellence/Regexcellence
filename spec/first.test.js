import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Controls from '../client/controls';

describe('<Controls />', () => {
  it ('should have h3 tag', () => {
		const wrapper = shallow(<Controls />);
    expect(wrapper.find('h3')).to.have.length(1);
	});
});
