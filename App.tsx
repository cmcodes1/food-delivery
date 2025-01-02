import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.root}>
      <Text>Details Screen</Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: {backgroundColor: 'tomato'},
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Overview',
      },
    },
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
