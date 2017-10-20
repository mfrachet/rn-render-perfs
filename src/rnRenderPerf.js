/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { View } from 'react-native';
import Pane from './pane';
import PlayPause from './playPause';
import Perf from 'ReactPerf';

export default class RnRenderPerf extends Component {
  constructor(props) {
    super(props);
    this.state = { isRecording: false, isPaneDisplayed: false };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePaneClose = this.handlePaneClose.bind(this);
  }

  handlePlay() {
    this.setState({ isRecording: true, isPaneDisplayed: false });
    Perf.start();
  }

  handlePause() {
    this.setState({ isRecording: false, isPaneDisplayed: true });
    Perf.stop();
  }

  handlePaneClose() {
    this.setState({ isRecording: false, isPaneDisplayed: false });
  }

  render() {
    const { isPaneDisplayed } = this.state;

    return (
      <View>
        {isPaneDisplayed ? (
          <Pane onClose={this.handlePaneClose} />
        ) : (
          <PlayPause onPlay={this.handlePlay} onPause={this.handlePause} />
        )}
      </View>
    );
  }
}
