import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import Spacer from './Spacer';

type CategoryContainerProps = {
  isSelected: boolean;
  foodImage: string;
  foodName: string;
};

export default function CategoryContainer({
  isSelected,
  foodImage,
  foodName,
}: CategoryContainerProps) {
  const getImageSource = () => {
    switch (foodImage) {
      case 'allFood':
        return require('../assets/images/allFood.jpg');
      case 'hotDog':
        return require('../assets/images/hotDog.jpg');
      case 'burger':
        return require('../assets/images/burger.jpg');
      default:
        break;
    }
  };

  return (
    <View
      style={[
        styles.categoryContainer,
        isSelected && styles.selectedCategoryContainer,
      ]}>
      <View style={[styles.row, styles.alignCenter]}>
        <Image
          source={getImageSource()}
          style={styles.food}
          resizeMode="contain"
        />
        <Spacer width={12} />
        <Text style={styles.textDarkBold}>{foodName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 8,
    height: 60,
    borderRadius: 50,
    borderWidth: 0.2,
    marginRight: 20,
  },
  selectedCategoryContainer: {
    backgroundColor: colors.salomie,
  },
  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  food: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  textDarkBold: {
    color: colors.blackRock2,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 700,
  },
});
