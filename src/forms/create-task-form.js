import React from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import FormInput from '../components/form-groups/FormInput';
import {IMPORTANT, PLANNED, STANDARD_SPACING} from '../constants';
import FormSelect from '../components/form-groups/FormSelect';
import FormDateTime from '../components/form-groups/FormDateTime';
import {SecondaryButton} from '../components/Button';

export default function CreateTaskForm({initialValues}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}>
      {({handleBlur, handleChange, handleSubmit, values}) => (
        <View style={{padding: STANDARD_SPACING * 2}}>
          <FormInput
            fieldName={'Task title'}
            onBlur={handleBlur('title')}
            onChangeText={handleChange('title')}
            placeholder={'Task Title'}
            value={values?.title}
          />
          <FormSelect
            choices={[IMPORTANT, PLANNED]}
            fieldName={'Task type'}
            onSelect={handleChange('taskType')}
            value={values.taskType}
          />
          <FormDateTime
            fieldName="Choose date & time"
            onSelect={handleChange('startDateTime')}
            value={values.startDateTime}
          />
          <SecondaryButton title="Done" />
        </View>
      )}
    </Formik>
  );
}
