import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Header from '../header';

describe('<Header />', () => {
  
  it('Should render without crashing', () => {
    shallow(<Header />);
  });
  
  it('Should render a <header> element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.is('header')).to.equal(true);
  });
  
});