import React, {useMemo} from 'react';
import {Image, ScrollView, SectionList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import Button, {ActiveButton, ToggleButton} from '../../../components/Button';
import ScreenContainer from '../../../components/ScreenContainer';
import TaskCard from '../../../components/TaskCard';
import Text from '../../../components/Text';
import {
  COLOUR_GREY,
  FONT_SIZE_EXTRA_LARGE,
  IMPORTANT,
  PLANNED,
  STANDARD_SPACING,
} from '../../../constants';
import globalStyles from '../../../global-styles';
import {applyFilter} from '../../../services/redux/actions';
import {isTodaysDate} from '../../../utils/date-util';

function SectionHeading({title}) {
  return (
    <Text
      style={[
        globalStyles.boldText,
        globalStyles.smallText,
        globalStyles.greyText,
        styles.sectionHeading,
      ]}>
      {title}
    </Text>
  );
}

function FilterButton_({applyFilter, filter, isActive, isFirst, title}) {
  return (
    <ToggleButton
      isActive={isActive}
      onPress={() => applyFilter(filter)}
      style={[
        styles.tasksViewToggle,
        isFirst ? styles.tasksViewToggleFirst : {},
      ]}
      title={title}
    />
  );
}

function HomeScreen({currentTasks}) {
  const sections = useMemo(() => {
    return [
      {
        title: 'Tasks',
        data: currentTasks.filter(task => !task.isDone),
      },
      {
        title: 'Complete',
        data: currentTasks.filter(task => task.isDone),
      },
    ];
  }, [currentTasks]);

  return (
    <ScreenContainer>
      <View style={styles.greetingContainer}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text
          style={[globalStyles.boldText, {fontSize: FONT_SIZE_EXTRA_LARGE}]}>
          Abdur Rahman
        </Text>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-WtsGEGoFIDtvnWy69oJc9ATFGwI5peXUw&usqp=CAU',
          }}
          style={styles.userAvatar}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tasksViewToggleScroll}>
        <FilterButton
          filter={value => isTodaysDate(value.startDateTime)}
          isActive
          isFirst
          title="My Day"
        />
        <FilterButton
          filter={value => value.taskType === IMPORTANT}
          title="Important"
        />
        <FilterButton
          filter={value => value.taskType === PLANNED}
          title="Planned"
        />
      </ScrollView>
      <SectionList
        sections={sections}
        renderSectionHeader={({section: {title}}) => (
          <SectionHeading title={title} />
        )}
        renderItem={({item, index}) => <TaskCard key={index} task={item} />}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  greetingContainer: {
    marginTop: STANDARD_SPACING * 5,
    marginBottom: STANDARD_SPACING * 2,
  },
  helloText: {
    color: COLOUR_GREY,
    fontSize: FONT_SIZE_EXTRA_LARGE,
    marginBottom: STANDARD_SPACING,
  },
  sectionHeading: {
    marginTop: STANDARD_SPACING * 2,
  },
  tasksViewToggle: {
    marginRight: STANDARD_SPACING,
    width: 150,
  },
  tasksViewToggleFirst: {
    marginLeft: STANDARD_SPACING,
  },
  tasksViewToggleScroll: {
    marginHorizontal: -1.5 * STANDARD_SPACING,
    marginBottom: STANDARD_SPACING,
  },
  userAvatar: {
    borderRadius: 12,
    height: 40,
    position: 'absolute',
    right: 0,
    width: 40,
  },
});

function mapStateToProps(state) {
  return {
    currentTasks: state.currentTasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applyFilter: filter => dispatch(applyFilter(filter)),
  };
}

const FilterButton = connect(null, mapDispatchToProps)(FilterButton_);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
