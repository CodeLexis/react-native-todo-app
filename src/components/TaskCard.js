import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

import PropTypes from 'prop-types';

import {AlarmIcon} from './Icons';
import {
  COLOUR_BUTTON_BACKGROUND,
  COLOUR_GREY,
  COLOUR_GREY_LIGHT,
  STANDARD_SPACING,
} from '../constants';
import Text from './Text';
import globalStyles from '../global-styles';
import Checkbox from './Checkbox';
import {connect} from 'react-redux';
import {editTask} from '../services/redux/thunks';
import {convertToFriendlyTime} from '../utils/date-util';

function TaskCard({editTask, task, ...props}) {
  const {title, startDateTime, endDateTime, description, isDone} = task;

  const onCheckboxValueChange = value => {
    editTask({
      ...task,
      isDone: value,
    });
  };

  return (
    <View style={styles.taskCardContainer}>
      <View style={styles.taskHeading}>
        <View style={styles.taskHeadingTextContainer}>
          <Text
            style={[globalStyles.boldText, isDone ? styles.doneTaskTitle : {}]}>
            {title}
          </Text>
          <View style={styles.taskCardTimeContainer}>
            <AlarmIcon color={COLOUR_GREY} size={16} />
            <Text
              style={[
                globalStyles.boldText,
                globalStyles.greyText,
                globalStyles.extraSmallText,
                styles.timeText,
              ]}>
              {convertToFriendlyTime(startDateTime)} -{' '}
              {convertToFriendlyTime(endDateTime)}
            </Text>
          </View>
        </View>
        <Checkbox isSelected={isDone} onChange={onCheckboxValueChange} />
      </View>
      {Boolean(description) && (
        <Text
          style={[
            globalStyles.extraSmallText,
            globalStyles.greyText,
            styles.description,
          ]}>
          {description}
        </Text>
      )}
    </View>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object,
};

const styles = StyleSheet.create({
  description: {
    marginTop: STANDARD_SPACING,
  },
  doneTaskTitle: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  taskCardContainer: {
    backgroundColor: COLOUR_BUTTON_BACKGROUND,
    borderRadius: STANDARD_SPACING * 1.3,
    borderWidth: 1,
    borderColor: COLOUR_GREY_LIGHT,
    marginTop: STANDARD_SPACING,
    padding: STANDARD_SPACING,
  },
  taskCardTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskHeadingTextContainer: {
    width: '85%',
  },
  timeText: {
    marginLeft: STANDARD_SPACING * 0.5,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    editTask: task => dispatch(editTask(task)),
  };
}

export default connect(null, mapDispatchToProps)(memo(TaskCard));
