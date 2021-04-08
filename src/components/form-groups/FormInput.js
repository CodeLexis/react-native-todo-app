import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Text from '../Text';
import globalStyles from '../../global-styles';
import {
  COLOUR_BUTTON_BACKGROUND,
  COLOUR_GREY_LIGHT,
  FONT_SIZE_MID,
  STANDARD_SPACING,
} from '../../constants';

export default function FormInput({
  fieldName,
  handleChange,
  handleBlur,
  handleSubmit,
  onBlur,
  onChangeText,
  onSubmit,
  placeholder,
  value,
  ...props
}) {
  return (
    <View style={globalStyles.formControlContainer}>
      <Text
        style={[
          globalStyles.greyText,
          globalStyles.boldText,
          globalStyles.smallText,
          globalStyles.fieldLabelText,
        ]}>
        {fieldName}
      </Text>
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        onSubmitEditing={onSubmit}
        placeholder={placeholder}
        style={styles.textInput}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: COLOUR_BUTTON_BACKGROUND,
    borderColor: COLOUR_GREY_LIGHT,
    borderRadius: STANDARD_SPACING * 1.5,
    borderWidth: 1,
    fontSize: FONT_SIZE_MID,
    padding: STANDARD_SPACING * 1.5,
  },
});
