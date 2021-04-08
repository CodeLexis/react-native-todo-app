import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const isSessionActive = true;

export default function Routes() {
  return (
    <NavigationContainer>
      {isSessionActive ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
