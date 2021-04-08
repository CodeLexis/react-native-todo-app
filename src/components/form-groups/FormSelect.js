import React from 'react';
import {StyleSheet, View} from 'react-native';
import {STANDARD_SPACING} from '../../constants';
import globalStyles from '../../global-styles';
import {ToggleButton} from '../Button';
import Text from '../Text';

export default function FormSelect({
  choices,
  fieldName,
  handleChange,
  handleBlur,
  handleSubmit,
  onBlur,
  onSelect,
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
      <View style={styles.toggleButtonContainer}>
        {choices.map(choiceValue => (
          <ToggleButton
            isActive={value === choiceValue}
            onPress={() => onSelect(choiceValue)}
            style={{marginRight: STANDARD_SPACING, width: 120}}
            title={choiceValue}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toggleButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
