import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationContainer from './src/navigation/NavigationContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
