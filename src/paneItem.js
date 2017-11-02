import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Style from './styles/paneItem';

export default function PaneItem({ content, onPress, bordered }) {
  const borderStyle = bordered && Style.bordered;
  return (
    <TouchableOpacity onPress={onPress} style={[Style.paneItem, borderStyle]}>
      <Text style={Style.paneItemText}>{content}</Text>
    </TouchableOpacity>
  );
}

PaneItem.propTypes = {
  content: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
