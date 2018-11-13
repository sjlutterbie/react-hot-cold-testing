import React from 'react';
import {shallow,mount} from 'enzyme';

import InfoSection from '../info-section';

describe('<InfoSection />', () => {
  
  it('Should render without crashing', () => {
    shallow(<InfoSection />);
  });
  
  it('Should render a <section> element', () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper.is('section')).toEqual(true);
  });
  
});