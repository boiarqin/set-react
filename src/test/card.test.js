import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../card';

Enzyme.configure({ adapter: new Adapter() });

describe('<Card>', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('simulate click event', () => {
    const clickHandlerMock = jest.fn();
    const wrapper = shallow(<Card clickCard={clickHandlerMock}/>);
    wrapper.find('div').simulate('click');
    expect(clickHandlerMock.mock.calls.length).toEqual(1);
  });
});