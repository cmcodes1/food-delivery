import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';

type FoodContainerProps = {
  isSelected: boolean;
  foodName: string;
};

export default function FoodContainer({
  isSelected,
  foodName,
}: FoodContainerProps) {
  return (
    <View
      style={[
        [
          styles.itemContainer,
          styles.center,
          isSelected && styles.selectedItem,
        ],
      ]}>
      <Text style={isSelected ? styles.textLight : styles.textBlackBig}>
        {foodName}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    height: 46,
    borderRadius: 33,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.whisper,
    marginRight: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: colors.carrotOrange,
    borderWidth: 0,
  },
  textLight: {
    color: colors.white,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 400,
  },
  textBlackBig: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 400,
  },
});
