import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen/RestaurantScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'LoginScreen',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    LoginScreen: {
      screen: LoginScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    RestaurantScreen: {
      screen: RestaurantScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function NavigationContainer() {
  return <Navigation />;
}
