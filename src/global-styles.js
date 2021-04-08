import {StyleSheet} from 'react-native';

import {
  COLOUR_GREY,
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_SMALL,
  FONT_WEIGHT_BOLD,
  LINE_HEIGHT_EXTRA_SMALL,
  LINE_HEIGHT_SMALL,
  STANDARD_SPACING,
  TEXT_ALIGN_CENTER,
} from './constants';

export default StyleSheet.create({
  boldText: {
    fontWeight: FONT_WEIGHT_BOLD,
  },
  centeredText: {
    textAlign: TEXT_ALIGN_CENTER,
  },
  extraSmallText: {
    fontSize: FONT_SIZE_EXTRA_SMALL,
    lineHeight: LINE_HEIGHT_EXTRA_SMALL,
  },
  fieldLabelText: {
    marginBottom: STANDARD_SPACING * 0.5,
  },
  formControlContainer: {
    marginBottom: STANDARD_SPACING * 1.5,
  },
  greyText: {
    color: COLOUR_GREY,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  smallText: {
    fontSize: FONT_SIZE_SMALL,
    lineHeight: LINE_HEIGHT_SMALL,
  },
});
