import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class PlayPause extends Component {
  constructor(props) {
    super(props);
    this.state = { isRecording: false };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { isRecording } = this.state;

    if (isRecording) {
      this.props.onPause();
    } else {
      this.props.onPlay();
    }

    this.setState({ isRecording: !this.state.isRecording });
  }

  render() {
    const { isRecording } = this.state;

    return (
      <View>
        {isRecording ? (
          <TouchableOpacity testID="btn-pause" onPress={this.handlePress} />
        ) : (
          <TouchableOpacity testID="btn-play" onPress={this.handlePress} />
        )}
      </View>
    );
  }
}

PlayPause.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
};
