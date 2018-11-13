import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from '../status-section';

describe('<StatusSection />', () => {
  
  it('Should render without crashing', () => {
    // NOTE: Requires guesses prop to pass shallow rendering
    const guesses = ['a','b','c'];
    shallow(<StatusSection guesses={guesses} />);
  });
  
  it('Should render a <section> element', () => {
    const guesses = ['a','b','c'];
    const wrapper = shallow(<StatusSection guesses={guesses} />);
    expect(wrapper.is('section')).toEqual(true);
  });
  
});