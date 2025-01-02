import * as React from 'react';
import {View, Text} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../styles/styles';

function LoginScreen() {
  return (
    <View style={styles.root}>
      <Text>Login Screen</Text>
    </View>
  );
}

function SignupScreen() {
  return (
    <View style={styles.root}>
      <Text>Signup Screen</Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'LoginScreen',
  screenOptions: {
    headerStyle: {backgroundColor: 'tomato'},
  },
  screens: {
    LoginScreen: {
      screen: LoginScreen,
      options: {
        title: 'Overview',
      },
    },
    SignupScreen: {
      screen: SignupScreen,
      options: {
        title: 'Overview',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function NavigationContainer() {
  return <Navigation />;
}
