import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from '../aural-status';

describe('<AuralStatus />', () => {

  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });
  
  it('Renders a paragraph with class `visuallyhidden`', () => {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper.is('p.visuallyhidden')).toEqual(true);
  });
  
  it('Should render prop auralStatus as its content', () => {
    const value = "foo";
    const wrapper = mount(
      <AuralStatus auralStatus={value} />);
    wrapper.update();
    const contents = wrapper.text();
    expect(contents).toEqual(value);
  });
});
