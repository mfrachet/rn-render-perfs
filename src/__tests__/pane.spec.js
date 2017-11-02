/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import { shallow } from "enzyme";
import { Modal } from "react-native";
import PaneItem from "./../paneItem";
import Pane from "./../pane";

/** @test {Pane} */
describe("Pane", () => {
  let wrapper;
  let spyOnClose;
  let closeButton;
  let wastedButton;
  let inclusiveButton;
  let exclusiveButton;
  let operationsButton;
  let monitorSpy;
  let instance;

  beforeEach(() => {
    monitorSpy = {
      printWasted: jest.fn(),
      printInclusive: jest.fn(),
      printExclusive: jest.fn(),
      printOperations: jest.fn()
    };

    spyOnClose = jest.fn();
    wrapper = shallow(<Pane onClose={spyOnClose} monitor={monitorSpy} />);
    instance = wrapper.instance();

    wastedButton = wrapper.find(PaneItem).first();
    inclusiveButton = wrapper.find(PaneItem).at(1);
    exclusiveButton = wrapper.find(PaneItem).at(2);
    operationsButton = wrapper.find(PaneItem).at(3);
    closeButton = wrapper.find(PaneItem).at(4);
  });

  /** @test {Pane#render} */
  describe("Pane#render", () => {
    it("should have a PaneItem with props testID equals to  pane-close", () => {
      expect(closeButton.prop("testID")).toEqual("pane-close");
    });

    it("should have a wasted button display", () => {
      expect(wastedButton.prop("testID")).toEqual("btn-wasted");
    });

    it("should have a inclusive button display", () => {
      expect(inclusiveButton.prop("testID")).toEqual("btn-inclusive");
    });

    it("should have a exclusive button display", () => {
      expect(exclusiveButton.prop("testID")).toEqual("btn-exclusive");
    });

    it("should have a opeartions button display", () => {
      expect(operationsButton.prop("testID")).toEqual("btn-operations");
    });
  });

  /** @test {Pane#actions} */
  describe("Pane#actions", () => {
    it("should have a PaneItem with props onpress equals to spyOnClose", () => {
      expect(closeButton.prop("onPress")).toEqual(spyOnClose);
    });

    it("should have a Modal with props onRequestClose equals to spyOnClose", () => {
      expect(wrapper.find(Modal).prop("onRequestClose")).toEqual(spyOnClose);
    });

    it("should have a PaneItem with props onpress equals to printWasted", () => {
      expect(wastedButton.prop("onPress")).toEqual(instance.printWasted);
    });

    it("should have a PaneItem with props onpress equals to printInclusive", () => {
      expect(inclusiveButton.prop("onPress")).toEqual(instance.printInclusive);
    });

    it("should have a PaneItem with props onpress equals to printExclusive", () => {
      expect(exclusiveButton.prop("onPress")).toEqual(instance.printExclusive);
    });

    it("should have a PaneItem with props onpress equals to printOps", () => {
      expect(operationsButton.prop("onPress")).toEqual(instance.printOps);
    });
  });

  /** @test {Pane#printXXX} */
  describe("Pane#printXXX", () => {
    it("should have called the printWasted function", () => {
      instance.printWasted();
      expect(monitorSpy.printWasted).toHaveBeenCalled();
    });

    it("should have called the printInclusive function", () => {
      instance.printInclusive();
      expect(monitorSpy.printInclusive).toHaveBeenCalled();
    });

    it("should have called the printExclusive function", () => {
      instance.printExclusive();
      expect(monitorSpy.printExclusive).toHaveBeenCalled();
    });

    it("should have called the printOperations function", () => {
      instance.printOps();
      expect(monitorSpy.printOperations).toHaveBeenCalled();
    });
  });
});
