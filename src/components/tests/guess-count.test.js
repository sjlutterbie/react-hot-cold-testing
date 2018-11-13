import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from '../guess-count';

describe('<GuessCount>', () => {
  
  it('Should render without crashing', () => {
    shallow(<GuessCount />);
  });
  
  it('Should render an h2 element', () => {
    const wrapper = shallow(<GuessCount />);
    expect(wrapper.is('h2')).toEqual(true);
  });
  
  describe('When guessCount === 1', () => {
    it('Should render the correct content', () => {
      const guessCount = 1;
      const wrapper = mount(
        <GuessCount guessCount={guessCount} />
      );
      expect(wrapper.text()).toEqual(`You've made 1 guess!`);
    });
  });
  
  describe('When guessCount !== 1', () => {
    it('Should render the correct content', () => {
      const guessCount = 2;
      const wrapper = mount(
        <GuessCount guessCount={guessCount} />
      );
      expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
    });
  });
});