import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import RoundButton from './../roundButton';

/** @test {RoundButton#render} */
describe('RoundButton#render', () => {
  let wrapper;
  let spyOnPress;
  let button;

  beforeEach(() => {
    spyOnPress = jest.fn();
    wrapper = shallow(<RoundButton onTap={spyOnPress} />);
    button = wrapper.find(TouchableOpacity);
  });

  it('should have a TouchableOpacity', () => {
    expect(button.length).toEqual(1);
  });

  it('should have called the TouchableOpacity onPress when clicking the button', () => {
    button.simulate('press');
    expect(spyOnPress).toHaveBeenCalled();
  });
});
