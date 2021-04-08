import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

import PropTypes from 'prop-types';

import {
  COLOUR_BUTTON_BACKGROUND,
  COLOUR_PEACH,
  COLOUR_PURPLE,
  COLOUR_WHITE,
  STANDARD_SPACING,
} from '../constants';
import globalStyles from '../global-styles';
import Text from './Text';
import {AddIcon} from './Icons';

export default function Button({icon, ...props}) {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, ...(props.style ? [props.style] : [])]}>
      {icon && (
        <View style={[styles.iconContainer, props.iconContainerStyle]}>
          {icon}
        </View>
      )}
      <Text
        style={[
          globalStyles.boldText,
          globalStyles.centeredText,
          ...(props.textStyle ? [props.textStyle] : []),
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export function ActiveButton(props) {
  return (
    <Button
      {...props}
      style={[styles.borderedButton, styles.activeButton, props.style]}
      textStyle={styles.activeText}
    />
  );
}

export function AddTaskButton({onPress}) {
  return (
    <Button
      icon={<AddIcon color={COLOUR_WHITE} size={42} />}
      iconContainerStyle={styles.addTaskButtonIconContainerStyle}
      onPress={onPress}
      style={styles.addTaskButtonStyle}
    />
  );
}

export function BorderedButton(props) {
  return <Button {...props} style={[styles.borderedButton, props.style]} />;
}

export function SecondaryButton(props) {
  return (
    <Button
      {...props}
      style={styles.secondaryButton}
      textStyle={styles.secondaryButtonText}
    />
  );
}

export function ToggleButton({isActive, ...props}) {
  return isActive ? <ActiveButton {...props} /> : <Button {...props} />;
}

const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: COLOUR_PURPLE,
  },
  addTaskButtonIconContainerStyle: {
    left: 5.25,
  },
  addTaskButtonStyle: {
    backgroundColor: COLOUR_PEACH,
    elevation: 5,
    height: 50,
    marginTop: 14,
    width: 50,
  },
  activeText: {
    color: COLOUR_WHITE,
  },
  borderedButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLOUR_BUTTON_BACKGROUND,
  },
  button: {
    backgroundColor: COLOUR_BUTTON_BACKGROUND,
    borderRadius: STANDARD_SPACING * 1.5,
    justifyContent: 'center',
    height: 56,
    width: '100%',
  },
  iconContainer: {
    left: 16,
    position: 'absolute',
  },
  secondaryButton: {
    backgroundColor: COLOUR_PEACH,
  },
  secondaryButtonText: {
    color: COLOUR_WHITE,
  },
});

Button.propTypes = {
  icon: PropTypes.node,
  style: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
};
