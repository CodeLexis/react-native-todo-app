import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import {SCREEN_BACKGROUND_COLOUR, STANDARD_SPACING} from '../constants';

export default function ScreenContainer({children, style}) {
  return <View style={[styles.screenContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: SCREEN_BACKGROUND_COLOUR,
    padding: STANDARD_SPACING * 1.5,
  },
});

ScreenContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
};
