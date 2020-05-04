import React from 'react';
import { shallow} from 'enzyme';
import ListComponent from './listComponent';

jest.mock("../../services/user")

describe('List component testing', () => {
  
      it('renders without error', () => {
        const wrapper = shallow(<ListComponent />);
        const text = wrapper.find('#btn1').text();
        expect(text).toEqual('Show Welcome Msg');
      });  //locates a button with text -- Show Welcome msg

      it('has the initial state msg is false', () => {
        const wrapper = shallow(<ListComponent />);
        expect(wrapper.state('msg')).toEqual(false);
      });

      it('the second button is disabled', () => {
        const wrapper = shallow(<ListComponent />);
        const name = wrapper.find('#btn2');
        expect(name.prop('disabled')).toBeTruthy();
      }); //the text with 'Show name' button is disabled 

      it('state change when button is clicked', () => {
        const wrapper = shallow(<ListComponent />);
        const button = wrapper.find('#btn1');
        button.simulate('click') 
        expect(wrapper.state('msg')).toEqual(true);      
      })  //checking the event 

      it('text change when button is clicked',()=> {
        const wrapper = shallow(<ListComponent />);
        const button = wrapper.find('#btn1');
        button.simulate('click') 
        const text = wrapper.find('p.welcome').text();
        expect(text).toEqual("Welcome")
      }) //paragraph text changes when the button is clicked

     
      it('button enabled when button is clicked',()=> {
        const wrapper = shallow(<ListComponent />);
        const button = wrapper.find('#btn1');
        button.simulate('click')        
        const name = wrapper.find('#btn2');
        expect(name.prop('disabled')).toBe(false);
      }) //second button is also enabled when the 1st button is clicked 

      it('paragraphs to have length of 2', ()=>{
        const wrapper = shallow(<ListComponent />);
        const paragraph = wrapper.find('p');
        expect(paragraph).toHaveLength(2);
      })

      it('state change when input name ',()=> {
        const wrapper = shallow(<ListComponent/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {value: 'Niharika'}});
        expect(wrapper.state('uname')).toEqual('Niharika');
        const text = wrapper.find('#inputPara').text();
        expect(text).toEqual('Name is : Niharika');
      }) //handling input change event

      it('paragraph content  change when input name ',()=> {
        const wrapper = shallow(<ListComponent/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {value: 'Niharika'}});
        const text = wrapper.find('#inputPara').text();
        expect(text).toEqual('Name is : Niharika');
    }) //paragraph content change according to the input provided

      it('loading status before api call', () => {
        const wrapper = shallow(<ListComponent />);
        const state = wrapper.instance().state;
        expect(state.status).toEqual("Loading");
      }); // status to be loading before api call

      it('fetch users on  api call #componentDidMount', done => {
        const wrapper = shallow(<ListComponent />);
          setTimeout(() => {
            wrapper.update();  
            const state = wrapper.instance().state;
            expect(state.status).toEqual("done");
            done();
        })
      });//status changes to done after the api call
  
      it('updated state list after api call', done => {
        const wrapper = shallow(<ListComponent />);
          setTimeout(() => {
            wrapper.update();      
            const state = wrapper.instance().state;
            expect(state.users.length).toEqual(2);
            done();
          })
      }); //state list updated

      it('1st list should have the name Tiger', done => {
        const wrapper = shallow(<ListComponent />);
          setTimeout(() => {
            wrapper.update();
            const text = wrapper.find('div.c2').at(0).text();
              expect(text).toEqual("Name: Tiger Nixon");
              done();
                })
        }); // the first list item should have name Tiger Nixon

      it('list view on api call', done => {
          const wrapper = shallow(<ListComponent />);
            setTimeout(() => {
              wrapper.update();
              expect(wrapper.find("div.listView").length).toEqual(2);
              done();
            })
        }); // the number of list rendered should be equal to the mock data
});
     
    