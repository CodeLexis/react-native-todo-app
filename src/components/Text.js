import React from 'react';
import {StyleSheet, Text as RnText} from 'react-native';
import PropTypes from 'prop-types';

import {
  COLOUR_BLACK,
  FONT_SIZE_LARGE,
  FONT_SIZE_MID,
  LINE_HEIGHT_LARGE,
  LINE_HEIGHT_MID,
  STANDARD_SPACING,
} from '../constants';

export default function Text({children, ...props}) {
  return (
    <RnText
      {...props}
      style={[styles.text, ...(props.style ? [props.style] : [])]}>
      {children}
    </RnText>
  );
}

export function H1(props) {
  return (
    <Text
      {...props}
      style={[styles.h1, ...(props.style ? [props.style] : [])]}
    />
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: '700',
  },
  h1: {
    fontWeight: '700',
    fontSize: FONT_SIZE_LARGE,
    lineHeight: LINE_HEIGHT_LARGE,
    marginVertical: STANDARD_SPACING,
  },
  text: {
    color: COLOUR_BLACK,
    fontSize: FONT_SIZE_MID,
    lineHeight: LINE_HEIGHT_MID,
  },
});

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
};
