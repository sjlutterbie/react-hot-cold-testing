import React from 'react';
import { shallow, mount } from 'enzyme';

import Game from '../game';

describe('<Game />', () => {
  
  it('Should render without crashing', () => {
    shallow(<Game />);
  });
  
  it('Should render a <div> element', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.is('div')).toEqual(true);
  });
  
  it('Should have the correct initial state', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('auralStatus')).toEqual('');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });
  
  describe('Component methods', () => {
    
    const wrapper = mount(<Game />);
    
    describe('restartGame()', ()=> {
      expect(wrapper.state('guesses')).toEqual([]);
      expect(wrapper.state('feedback')).toEqual('Make your guess!');
      expect(wrapper.state('auralStatus')).toEqual('');
      expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1);
      expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });
    
    describe('makeGuess(guess', () => {
      
      it('Should handle an NaN as expected', () => {
        const guess = NaN;
        wrapper.instance().makeGuess(guess);
        wrapper.update();
        expect(wrapper.state('feedback'))
          .toEqual('Please enter a valid number');
      });
      
      it('Should handle a valid guess as expected', () => {
        // NOTE: This feels like a weak test, because a different number could
        //  theoretically break it. Would it be better to run a set of N tests
        //  to have confidence that it passes under a wide range of conditions?
        const guess = Math.floor(Math.random() * 100) + 1;
        wrapper.instance().makeGuess(guess);
        wrapper.update();
        // Test feedback handling
        const difference = Math.abs(guess - wrapper.state('correctAnswer'));
        const feedback = wrapper.state('feedback');
        if (difference >= 50) {
          expect(feedback).toEqual('You\'re Ice Cold...');
        } else if (difference >= 30) {
          expect(feedback).toEqual('You\'re Cold...');
        } else if (difference >= 10) {
          expect(feedback).toEqual('You\'re Warm.');
        } else if (difference >= 1) {
          expect(feedback).toEqual('You\'re Hot!');
        } else {
          expect(feedback).toEqual('You got it!');
        }
        // Test guesses array construction
        expect(wrapper.state('guesses')).toEqual([guess]);
      });
    });
    
    describe('getAuralUpdate()', () => {
      
      it('Should handle 0 guesses as expected', () => {
        const guesses = [];
        wrapper.instance().setState({guesses: guesses, feedback: 'foo'});
        wrapper.instance().generateAuralUpdate();
        wrapper.update();
        const expectedFeedback =
          `Here's the status of the game right now: foo You've made 0 guesses.`;
        expect(wrapper.state('auralStatus')).toEqual(expectedFeedback);
      });
      
      it('Should handle 1 guess as expected', () => {
        const guesses = [1];
        wrapper.instance().setState({guesses: guesses, feedback: 'foo'});
        wrapper.instance().generateAuralUpdate();
        wrapper.update();
        const expectedFeedback =
          `Here's the status of the game right now: foo You've made 1 guess.` +
          ` It was: 1`;
        expect(wrapper.state('auralStatus')).toEqual(expectedFeedback);
      });
      
      it('Should handle multiple guesses as expected', () => {
        const guesses = [1,2,3];
        wrapper.instance().setState({guesses: guesses, feedback: 'foo'});
        wrapper.instance().generateAuralUpdate();
        wrapper.update();
        const expectedFeedback =
          `Here's the status of the game right now: foo You've made 3 guesses.` +
          ` In order of most- to least-recent, they are: 3, 2, 1`;
        expect(wrapper.state('auralStatus')).toEqual(expectedFeedback);
      });
    });
  });
});