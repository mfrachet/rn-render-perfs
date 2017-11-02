import React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import PaneItem from './../paneItem';

describe('PaneItem#render', () => {
  it('should have a bordered style if bordered is passed as props', () => {
    const wrapper = shallow(<PaneItem bordered content="t" onPress={jest.fn()} />);
    expect(wrapper.find(TouchableOpacity).prop('style')[1]).toEqual({
      borderBottomColor: '#F4F4F4',
      borderBottomWidth: 1,
    });
  });

  it('shouldnt have a bordered style if bordered isnt passed as props', () => {
    const wrapper = shallow(<PaneItem content="t" onPress={jest.fn()} />);
    expect(wrapper.find(TouchableOpacity).prop('style')[1]).toEqual(undefined);
  });
});
