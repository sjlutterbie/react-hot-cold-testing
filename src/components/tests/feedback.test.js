import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Feedback from '../feedback';

describe('<Feedback/ >', () => {
  
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });
  
  it('Should render an h2 element', () => {
    const wrapper = shallow(<Feedback />);
    expect(wrapper.is('h2')).to.equal(true);
  });
  
  // It should render an h2 element, with the expected contents
  describe('When guessCount === 0', () => {
    it('Should render with expected content', () => {
      // When guessCount === 0, just 'feedback'
      const feedback = "foo";
      const key = 0;
      const wrapper = mount(
        <Feedback feedback={feedback} guessCount={key} />);
      wrapper.update();
      expect(wrapper.text()).to.equal('foo ');
    });
  });

  // When key !== 0, it should include a span element.
  describe('When guessCount !== 0', () => {
    it('Should render with expected content', () => {
      const feedback = 'foo';
      const key = 1;
      const wrapper = mount(
        <Feedback feedback={feedback} guessCount={key} />);
      expect(wrapper.text()).to.equal('foo Guess again!');
      expect(wrapper.find('span').text()).to.equal('Guess again!');
    });
  });
  
});