import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Card from '../card';

Enzyme.configure({ adapter: new Adapter() });

describe('App', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains 12 set cards', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Card).length).toEqual(12);
  });
});