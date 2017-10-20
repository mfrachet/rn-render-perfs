import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import PlayPause from './../playPause';

/** @test {PlayPause#render} */
describe('PlayPause#render', () => {
  let wrapper;
  let spyOnPlay;
  let spyOnPause;

  beforeEach(() => {
    spyOnPlay = jest.fn();
    spyOnPause = jest.fn();
    wrapper = shallow(<PlayPause onPlay={spyOnPlay} onPause={spyOnPause} />);
  });

  it('should have a testID btn-play by default', () => {
    expect(wrapper.find(TouchableOpacity).prop('testID')).toEqual('btn-play');
  });

  it('should have a testID btn-pause when the button play has been clicked', () => {
    const playButton = wrapper.find(TouchableOpacity);
    playButton.simulate('press');
    expect(wrapper.find(TouchableOpacity).prop('testID')).toEqual('btn-pause');
  });

  it('should have called the play spy while clicking the play button', () => {
    const playButton = wrapper.find(TouchableOpacity);
    playButton.simulate('press');
    expect(spyOnPlay).toHaveBeenCalled();
  });

  it('should have a testID btn-play when the button pause has been clicked', () => {
    const playButton = wrapper.find(TouchableOpacity);
    playButton.simulate('press');

    const pauseButton = wrapper.find(TouchableOpacity);
    pauseButton.simulate('press');

    expect(wrapper.find(TouchableOpacity).prop('testID')).toEqual('btn-play');
  });

  it('should have called the pause spy while clicking the pause button', () => {
    const playButton = wrapper.find(TouchableOpacity);
    playButton.simulate('press');

    const pauseButton = wrapper.find(TouchableOpacity);
    pauseButton.simulate('press');

    expect(spyOnPause).toHaveBeenCalled();
  });
});
