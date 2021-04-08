import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import globalStyles from '../../global-styles';
import Button from '../Button';
import {CalendarIcon, ClockIcon} from '../Icons';
import Text from '../Text';

const DATE = 'date';
const TIME = 'time';

export default function FormDateTime({
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
}) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState(DATE);
  const [show, setShow] = useState(false);

  const onChange = useCallback(
    (event, selectedDate) => {
      onSelect(selectedDate);
      // setDate(selectedDate);
    },
    [onSelect],
  );

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
      <View style={globalStyles.rowContainer}>
        <Button
          icon={<CalendarIcon size={24} />}
          onPress={() => {
            setMode(DATE);
            setShow(true);
          }}
          style={{width: 180}}
          title="Select date"
        />
        <Button
          icon={<ClockIcon size={24} />}
          style={{width: 180}}
          title="Select time"
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
