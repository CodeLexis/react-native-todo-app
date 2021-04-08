import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './LandingScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
