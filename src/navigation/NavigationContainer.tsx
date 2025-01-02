import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import LoginScreen from '../screens/LoginScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'LoginScreen',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    LoginScreen: {
      screen: LoginScreen,
      // options: {
      //   title: 'Overview',
      // },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function NavigationContainer() {
  return <Navigation />;
}
