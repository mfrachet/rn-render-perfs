import React, { PureComponent } from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';
import Style from './styles/pane';
import PaneItem from './paneItem';

export default class Pane extends PureComponent {
  constructor(props) {
    super(props);

    this.printWasted = this.printWasted.bind(this);
    this.printInclusive = this.printInclusive.bind(this);
    this.printExclusive = this.printExclusive.bind(this);
    this.printOps = this.printOps.bind(this);
  }

  printWasted() {
    this.props.monitor.printWasted();
  }

  printInclusive() {
    this.props.monitor.printInclusive();
  }

  printExclusive() {
    this.props.monitor.printExclusive();
  }

  printOps() {
    this.props.monitor.printOperations();
  }

  render() {
    const { onClose } = this.props;
    return (
      <Modal transparent onRequestClose={onClose} animationType="slide">
        <View style={Style.container}>
          <View>
            <View style={Style.pane}>
              <PaneItem
                testID="btn-wasted"
                onPress={this.printWasted}
                content="Print wasted"
                bordered
              />
              <PaneItem
                testID="btn-inclusive"
                onPress={this.printInclusive}
                content="Print inclusive"
                bordered
              />
              <PaneItem
                testID="btn-exclusive"
                onPress={this.printExclusive}
                content="Print exclusive"
                bordered
              />
              <PaneItem
                testID="btn-operations"
                onPress={this.printOps}
                content="Print Operations"
              />
            </View>
            <View style={Style.pane}>
              <PaneItem testID="pane-close" onPress={onClose} content="Close" />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

Pane.propTypes = {
  onClose: PropTypes.func.isRequired,
  monitor: PropTypes.shape({
    printWasted: PropTypes.func.isRequired,
    printInclusive: PropTypes.func.isRequired,
    printExclusive: PropTypes.func.isRequired,
    printOperations: PropTypes.func.isRequired,
  }).isRequired,
};
