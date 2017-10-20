/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import Perf from 'ReactPerf';
import Pane from './../pane';

jest.mock('ReactPerf', () => ({
  printWasted: jest.fn(),
  printInclusive: jest.fn(),
  printExclusive: jest.fn(),
  printOperations: jest.fn(),
}));

/** @test {Pane} */
describe('Pane', () => {
  let wrapper;
  let spyOnClose;
  let closeButton;
  let wastedButton;
  let inclusiveButton;
  let exclusiveButton;
  let operationsButton;

  beforeEach(() => {
    spyOnClose = jest.fn();
    wrapper = shallow(<Pane onClose={spyOnClose} />);
    closeButton = wrapper.find(TouchableOpacity).first();
    wastedButton = wrapper.find(TouchableOpacity).at(1);
    inclusiveButton = wrapper.find(TouchableOpacity).at(2);
    exclusiveButton = wrapper.find(TouchableOpacity).at(3);
    operationsButton = wrapper.find(TouchableOpacity).at(4);
  });

  /** @test {Pane#render} */
  describe('Pane#render', () => {
    it('should have a TouchableOpacity with props testID equals to  pane-close', () => {
      expect(closeButton.prop('testID')).toEqual('pane-close');
    });

    it('should have a wasted button display', () => {
      expect(wastedButton.prop('testID')).toEqual('btn-wasted');
    });

    it('should have a inclusive button display', () => {
      expect(inclusiveButton.prop('testID')).toEqual('btn-inclusive');
    });

    it('should have a exclusive button display', () => {
      expect(exclusiveButton.prop('testID')).toEqual('btn-exclusive');
    });

    it('should have a opeartions button display', () => {
      expect(operationsButton.prop('testID')).toEqual('btn-operations');
    });
  });

  /** @test {Pane#actions} */
  describe('Pane#actions', () => {
    it('should have called the spyOnClose when clicking the TouchableOpacity pane-close', () => {
      closeButton.simulate('press');
      expect(spyOnClose).toHaveBeenCalled();
    });

    it('should have called the Perf mock module on method printWasted', () => {
      wastedButton.simulate('press');
      expect(Perf.printWasted).toHaveBeenCalled();
    });

    it('should have called the Perf mock module on method printInclusive', () => {
      inclusiveButton.simulate('press');
      expect(Perf.printInclusive).toHaveBeenCalled();
    });

    it('should have called the Perf mock module on method printExclusive', () => {
      exclusiveButton.simulate('press');
      expect(Perf.printExclusive).toHaveBeenCalled();
    });

    it('should have called the Perf mock module on method printOperations', () => {
      operationsButton.simulate('press');
      expect(Perf.printOperations).toHaveBeenCalled();
    });
  });
});
