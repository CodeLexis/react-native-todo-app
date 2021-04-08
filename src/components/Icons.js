import React from 'react';
import PropTypes from 'prop-types';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

IoniconsIcon.loadFont();
FeatherIcon.loadFont();
FontAwesomeIcon.loadFont();

export function AddIcon({color, size}) {
  return <IoniconsIcon color={color} name={'add-sharp'} size={size} />;
}

export function AlarmIcon({color, size}) {
  return <IoniconsIcon color={color} name={'alarm'} size={size} />;
}

export function CalendarIcon({color, size}) {
  return <IoniconsIcon color={color} name={'calendar'} size={size} />;
}

export function CheckmarkIcon({color, size, style}) {
  return (
    <IoniconsIcon
      style={style}
      color={color}
      name={'checkmark-circle'}
      size={size}
    />
  );
}

export function ClockIcon({color, size}) {
  return <IoniconsIcon color={color} name={'time-outline'} size={size} />;
}

export function DotCircleIcon({color, size, style}) {
  return (
    <IoniconsIcon
      style={style}
      color={color}
      name={'ellipse-outline'}
      size={size}
    />
  );
}

export function EmailIcon({color, size}) {
  return <IoniconsIcon color={color} name={'mail'} size={size} />;
}

export function FacebookIcon({color, size}) {
  return <FontAwesomeIcon color={color} name={'facebook-square'} size={size} />;
}

export function GoogleIcon({color, size}) {
  return <FontAwesomeIcon color={color} name={'google'} size={size} />;
}

export function HomeIcon({color, size}) {
  return <FeatherIcon color={color} name={'home'} size={size} />;
}

export function SettingsIcon({color, size}) {
  return <FeatherIcon color={color} name={'settings'} size={size} />;
}

const IconPropTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

AlarmIcon.propTypes = IconPropTypes;
CheckmarkIcon.propTypes = IconPropTypes;
EmailIcon.propTypes = IconPropTypes;
FacebookIcon.propTypes = IconPropTypes;
GoogleIcon.propTypes = IconPropTypes;
