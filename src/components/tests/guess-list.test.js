import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessList from '../guess-list';

describe('<GuessList />', () => {
  
  it('Should render without crashing', () => {
    // NOTE: This element requires prop guesses to pass shallow testing.
    const guesses = ['a','b','c'];
    shallow(<GuessList guesses={guesses}/>);
  });

  it('Should render an ul element', () => {
    const guesses = ['a','b','c'];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    expect(wrapper.is('ul')).toEqual(true);
  });
  
  it('Should contain the correct length list', () => {
    const guesses = ['a','b','c'];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    expect(wrapper.find('ul').children().length).toEqual(guesses.length);
  });
});