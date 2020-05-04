import React from 'react';
import { mount } from 'enzyme';
import App from './App';


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });

  it('App component contains instance of another component', () => {
    const wrapper = mount(<App/>);
    // const text = wrapper.find('#button').text();
    // expect(text).toEqual('Show Welcome Msg');
  });
});


