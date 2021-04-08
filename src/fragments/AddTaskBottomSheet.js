import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {H1} from '../components/Text';
import CreateTaskForm from '../forms/create-task-form';
import globalStyles from '../global-styles';

export default function AddTaskBottomSheet({ref_}) {
  return (
    <RBSheet
      animationType="fade"
      ref={ref_}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={600}
      openDuration={250}>
      <H1 style={globalStyles.centeredText}>Create a task</H1>
      <CreateTaskForm initialValues={{title: ''}} />
    </RBSheet>
  );
}
