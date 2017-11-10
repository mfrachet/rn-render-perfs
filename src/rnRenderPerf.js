import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Pane from './pane';
import PlayPause from './playPause';

const style = StyleSheet.create({
  paneButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 48,
    width: 48,
  },
});

export default class RnRenderPerf extends Component {
  constructor(props) {
    super(props);
    this.state = { isRecording: false, isPaneDisplayed: false };
  }

  handlePlay = () => {
    this.setState({ isRecording: true, isPaneDisplayed: false });
    this.props.monitor.start();
  }

  handlePause = () => {
    this.setState({ isRecording: false, isPaneDisplayed: true });
    this.props.monitor.stop();
  }

  handlePaneClose = () => {
    this.setState({ isRecording: false, isPaneDisplayed: false });
  }

  render() {
    const { isPaneDisplayed } = this.state;

    return (
      <View style={style.paneButton}>
        {isPaneDisplayed ? (
          <Pane onClose={this.handlePaneClose} monitor={this.props.monitor} />
        ) : (
          <PlayPause onPlay={this.handlePlay} onPause={this.handlePause} />
        )}
      </View>
    );
  }
}

RnRenderPerf.propTypes = {
  monitor: PropTypes.shape({
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
  }).isRequired,
};
