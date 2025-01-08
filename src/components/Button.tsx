import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default function Button({title, onPress}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textLightBold}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.pumpkin,
    height: 62,
    borderRadius: 12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLightBold: {
    color: colors.white,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 700,
  },
});
