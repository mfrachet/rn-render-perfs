import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function RoundButton({ onTap }) {
  return <TouchableOpacity onPress={onTap} />;
}

RoundButton.propTypes = {
  onTap: PropTypes.func.isRequired,
};
