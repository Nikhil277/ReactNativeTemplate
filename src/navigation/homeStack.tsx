import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button} from 'react-native';
import {Home} from '../screens/home';
import navigationConfig from './config';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{...navigationConfig}}
      initialRouteName={'Home'}>
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
