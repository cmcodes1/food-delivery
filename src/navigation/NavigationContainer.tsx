import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen/ItemDetailsScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
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
    ItemDetailsScreen: {
      screen: ItemDetailsScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function NavigationContainer() {
  return <Navigation />;
}
