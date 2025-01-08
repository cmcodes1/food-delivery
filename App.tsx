import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationContainer from './src/navigation/NavigationContainer';

export default function App() {
  return (
    <SafeAreaProvider style={styles.root}>
      <NavigationContainer />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
