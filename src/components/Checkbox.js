import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import {COLOUR_GREY, COLOUR_PURPLE} from '../constants';
import {CheckmarkIcon, DotCircleIcon} from './Icons';

export default function Checkbox({
  isSelected = false,
  onChange,
  style,
  size = 26,
}) {
  const onPress = useCallback(() => {
    const newValue = !isSelected;

    // setIsSelected_(newValue);
    onChange && onChange(newValue);
  }, [isSelected, onChange]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style, {height: size, width: size}]}>
      {isSelected ? (
        <CheckmarkIcon color={COLOUR_PURPLE} size={size} />
      ) : (
        <DotCircleIcon color={COLOUR_GREY} size={size} />
      )}
    </TouchableOpacity>
  );
}

Checkbox.propTypes = {
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
};
