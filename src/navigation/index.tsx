import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {styles} from './style';
import HomeStack from './homeStack';
import OnboardingStack from './onboardingStack';
import {useSelector} from 'react-redux';

const RootStack = createNativeStackNavigator();

const AppContainer = () => {
  // if (isLoading) {
  //   return <View style={styles.splashContainer} />;
  // }
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

const RootStackScreen = () => {
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <RootStack.Navigator>
      {isLoggedIn ? (
        <RootStack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{animation: 'default', headerShown: false}}
        />
      ) : (
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingStack}
          options={{animation: 'default', headerShown: false}}
        />
      )}
    </RootStack.Navigator>
  );
};

export default AppContainer;
