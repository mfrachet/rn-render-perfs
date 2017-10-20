/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Perf from 'ReactPerf';

export default class Pane extends PureComponent {
  static printWasted() {
    Perf.printWasted();
  }

  static printInclusive() {
    Perf.printInclusive();
  }

  static printExclusive() {
    Perf.printExclusive();
  }

  static printOperations() {
    Perf.printOperations();
  }

  render() {
    const { onClose } = this.props;

    return (
      <View>
        <TouchableOpacity testID="pane-close" onPress={onClose} />
        <TouchableOpacity testID="btn-wasted" onPress={Pane.printWasted} />
        <TouchableOpacity testID="btn-inclusive" onPress={Pane.printInclusive} />
        <TouchableOpacity testID="btn-exclusive" onPress={Pane.printExclusive} />
        <TouchableOpacity testID="btn-operations" onPress={Pane.printOperations} />
      </View>
    );
  }
}

Pane.propTypes = {
  onClose: PropTypes.func.isRequired,
};
