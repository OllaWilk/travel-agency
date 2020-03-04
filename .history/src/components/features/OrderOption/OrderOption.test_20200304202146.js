import React from 'react';
import {shallow} from 'enzyme';
import OrderOpiton from './OrderOption';

describe('Component OrderOpiton', () => {

  it('should render without crashing', () => {
    const component = shallow(<OrderOpiton type='number' name='testName' />);
    expect(component).toBeTruthy();
  });

});