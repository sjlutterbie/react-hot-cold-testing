import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from '../guess-form';

describe('<GuessForm />', () => {
  
  it('Should render without crashing', () => {
    shallow(<GuessForm />);
  });
  
  it('Should render a <form> element', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.is('form')).toEqual(true);
  });
  
  describe('Component methods', () => {
    
    describe('Submitting the form should trigger the callback function', () => {
      
      const callbackFn = jest.fn();
      const guess = String(Math.floor(Math.random() * 100) + 1);
      const wrapper = mount(
        <GuessForm onMakeGuess={callbackFn} />
      );

      wrapper.find('input[type="number"]').instance().value = guess;
      wrapper.update();
      wrapper.simulate('submit');
      expect(callbackFn).toHaveBeenCalledWith(guess);
    });

  });
});