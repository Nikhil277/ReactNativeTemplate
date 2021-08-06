import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Login} from '../screens/login';
import navigationConfig from './config';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{...navigationConfig}}
      initialRouteName={'Login'}>
      <Stack.Screen
        name="LOGIN"
        component={Login}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
