import React, {useRef} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeIcon, SettingsIcon} from '../../components/Icons';
import HomeScreen from './HomeScreen';
import {AddTaskButton} from '../../components/Button';
import {COLOUR_GREY, COLOUR_PURPLE} from '../../constants';
import AddTaskBottomSheet from '../../fragments/AddTaskBottomSheet';

const Tab = createBottomTabNavigator();

export default function MainStack() {
  const rbSheetRef = useRef();

  return (
    <React.Fragment>
      <AddTaskBottomSheet ref_={rbSheetRef} />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: COLOUR_PURPLE,
          inactiveTintColor: COLOUR_GREY,
          style: {
            borderTopColor: 'transparent',
            height: 120,
            alignItems: 'center',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => {
              return <HomeIcon size={size} color={color} />;
            },
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Add"
          component={HomeScreen}
          options={{
            tabBarButton: () => (
              <AddTaskButton onPress={() => rbSheetRef.current.open()} />
            ),
            headerShown: false,
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => {
              return <SettingsIcon size={size} color={color} />;
            },
            tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
}
