/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import RnRenderPerf from './../rnRenderPerf';
import Pane from './../pane';
import PlayPause from './../playPause';

/** @test {RnRenderPerf} */
describe('RnRenderPerf#render', () => {
  let wrapper;
  let instance;
  let playButton;
  let pane;
  let monitorSpy;

  beforeEach(() => {
    monitorSpy = {
      start: jest.fn(),
      stop: jest.fn(),
      printWasted: jest.fn(),
      printInclusive: jest.fn(),
      printExclusive: jest.fn(),
      printOperations: jest.fn(),
    };
    wrapper = shallow(<RnRenderPerf monitor={monitorSpy} />);
    instance = wrapper.instance();

    playButton = wrapper.find(PlayPause);
    pane = wrapper.find(Pane);
  });

  describe('RnRenderPerf instance methods', () => {
    it('should have change the state isRecording and isPaneDisplayed when calling handlePause', () => {
      instance.handlePause();
      expect(instance.state).toEqual({ isRecording: false, isPaneDisplayed: true });
    });

    it('should have change the state isRecording to true when calling handlePlay', () => {
      instance.handlePause();
      instance.handlePlay();
      expect(instance.state).toEqual({ isRecording: true, isPaneDisplayed: false });
    });

    it('should have change the state isRecording and isPaneDisplayed when calling handlePaneClose', () => {
      instance.handlePause();
      instance.handlePaneClose();
      expect(instance.state).toEqual({ isRecording: false, isPaneDisplayed: false });
    });

    it('should have called monitorSpy.start when clicking handlePlay', () => {
      instance.handlePlay();
      expect(monitorSpy.start).toHaveBeenCalled();
    });

    it('should have called monitorSpy.stop when clicking handlePause', () => {
      instance.handlePause();
      expect(monitorSpy.stop).toHaveBeenCalled();
    });
  });

  describe('RnRenderPerf component stuff', () => {
    it('should have a PlayPause on the screen', () => {
      expect(playButton.length).toEqual(1);
    });

    it('should have the onPlay props of the PlayPause to the instance.handlePlay', () => {
      expect(playButton.prop('onPlay')).toEqual(instance.handlePlay);
    });

    it('should have the onPause props of the PlayPause to the instance.handlePause', () => {
      expect(playButton.prop('onPause')).toEqual(instance.handlePause);
    });

    it('shouldnt have a Pane on the screen', () => {
      expect(pane.length).toEqual(0);
    });
  });

  describe('RnRenderPerf with pane', () => {
    beforeEach(() => {
      wrapper.setState({ isPaneDisplayed: true });
      playButton = wrapper.find(PlayPause);
      pane = wrapper.find(Pane);
    });

    it('should have a pane with props onClose equals to the instance handlePaneClose method', () => {
      expect(pane.prop('onClose')).toEqual(instance.handlePaneClose);
    });

    it('should have a pane display on the screen', () => {
      expect(pane.length).toEqual(1);
    });

    it('shouldnt have the playButton on the view', () => {
      expect(playButton.length).toEqual(0);
    });
  });
});
