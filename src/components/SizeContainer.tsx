import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';

type SizeContainerProps = {
  isSelected: boolean;
  size: string;
  setSize: () => void;
};

export default function SizeContainer({
  isSelected,
  size,
  setSize,
}: SizeContainerProps) {
  return (
    <TouchableOpacity
      style={[
        styles.sizeCircle,
        styles.center,
        isSelected && styles.selectedCircle,
      ]}
      onPress={setSize}>
      <Text style={[styles.textBlackBig, isSelected && styles.selectedSize]}>
        {size}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  sizeCircle: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: colors.aliceBlue,
    marginRight: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    backgroundColor: colors.carrotOrange,
  },
  textBlackBig: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 400,
  },
  selectedSize: {
    color: colors.white,
    fontWeight: 700,
  },
});
