import { render, screen, getByText } from '@testing-library/react';
import App from './App';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter : new Adapter()});

describe('Counter Testing Application', () => {
  test('should render the react link', () => {
    const wrapper = render(<App />);
    // console.log(wrapper.debug());
  })

  test('should give me counter application text to be found', () => {
    const wrapper = render(<App />);
    const h2Text = wrapper.getByText("Counter Application");
    expect(h2Text).toBeInTheDocument();
  })

  describe('testing counter application with enzyme', () => {
    let wrapper = null; 

    beforeEach(()=> {

      wrapper = shallow(<App />);
    })

    test('should give me counter application text to be found with shallow', () => {
      const expectedText = "Counter Application";
      const h2Text = wrapper.find("h2").text();
      expect(h2Text).toContain(expectedText);
    })

    test("test the initial value of count is 0", () => {
      expect(wrapper.find("#counter-value").text()).toBe("0");
    })

    test("click on the incremnet button and value of count to be 1", () => {
      wrapper.find('#incr-button').simulate('click');
      expect(wrapper.find("#counter-value").text()).toBe("1");
    })

    test("increment and decremnet the value of count, and check its orignal value 0", ()=> {
      wrapper.find('#incr-button').simulate('click');
      expect(wrapper.find("#counter-value").text()).toBe("1");
      wrapper.find('#decr-button').simulate('click');
      expect(wrapper.find("#counter-value").text()).toBe("0");
    })
  })
  
  
})

