import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const style = StyleSheet.create({
  button: {
    padding: 20,
    borderTopRightRadius: 5
  },
  pause: {
    backgroundColor: "#E91E63"
  },
  play: {
    backgroundColor: "#3F51B5"
  },
  text: {
    color: "#fff",
    fontSize: 12
  }
});

export default class PlayPause extends Component {
  constructor(props) {
    super(props);
    this.state = { isRecording: false };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { isRecording } = this.state;
    const { onPause, onPlay } = this.props;

    if (isRecording) {
      onPause();
    } else {
      onPlay();
    }

    this.setState({ isRecording: !isRecording });
  }

  render() {
    const { isRecording } = this.state;

    return (
      <View>
        {isRecording ? (
          <TouchableOpacity
            testID="btn-pause"
            onPress={this.handlePress}
            style={[style.button, style.pause]}
          >
            <Text style={style.text}>■</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            testID="btn-play"
            onPress={this.handlePress}
            style={[style.button, style.play]}
          >
            <Text style={style.text}>▶</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

PlayPause.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired
};
