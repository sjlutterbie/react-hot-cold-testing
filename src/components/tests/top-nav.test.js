import React from 'react';
import {shallow,mount} from 'enzyme';
// import {expect} from 'chai';

import TopNav from '../top-nav';

describe('<TopNav />', () => {
  
  it('Should render without crashing', () => {
    shallow(<TopNav />);
  });
  
  it('Should render a <nav> element', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.is('nav')).toEqual(true);
  });
  
  describe('Clicks should call the relevant callback functions', () => {

    const newGameCallback = jest.fn();
    const getAuralUpdate = jest.fn();
    const wrapper = mount(
      <TopNav onRestartGame={newGameCallback}
              onGenerateAuralUpdate={getAuralUpdate} />
    );

    it('Clicking a.new should call its callback', () => {
      wrapper.find('a.new').simulate('click');
      expect(newGameCallback).toHaveBeenCalled();
    });  
    
    it('Clicking a.status-link should call its callback', () => {
      wrapper.find('a.status-link').simulate('click');
      expect(getAuralUpdate).toHaveBeenCalled();
    });
  
  
    
  });
  
  
  
});