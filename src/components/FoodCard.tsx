import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../assets/icons';
import {NavigationPropType} from '../navigation/types';
import colors from '../styles/colors';
import {getImageSource} from '../utils/utils';
import Spacer from './Spacer';

type FoodCardProps = {
  restaurantImage: string;
  restaurantName: string;
  itemImage: string;
  itemName: string;
  itemDescription: string;
  rating: string;
  deliveryCharge: string;
  time: string;
};

export default function FoodCard({
  restaurantImage,
  restaurantName,
  itemImage,
  itemName,
  itemDescription,
  rating,
  deliveryCharge,
  time,
}: FoodCardProps) {
  const navigation: NavigationPropType = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('ItemDetailsScreen', {
      itemName,
      restaurantImage,
      restaurantName,
      rating,
      deliveryCharge,
      time,
    });
  };

  return (
    <TouchableOpacity style={styles.foodContainer} onPress={handleNavigation}>
      <Image
        source={getImageSource(itemImage)}
        style={styles.foodImage}
        resizeMode="contain"
      />
      <Spacer height={5} />
      <Text style={styles.textDarkBold}>{itemName}</Text>
      <Spacer height={5} />
      <Text style={styles.textDarkGrey}>{itemDescription}</Text>
      <Spacer height={2} />
      <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
        <Text style={styles.textBlackBold}>{deliveryCharge}</Text>
        <TouchableOpacity style={[styles.plusContainer, styles.center]}>
          <SvgXml xml={icons.plus} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  foodContainer: {
    width: '45%',
    padding: 12,
    borderWidth: 0.2,
    borderRadius: 10,
    marginBottom: 17,
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodImage: {
    height: 80,
    width: '90%',
  },
  textDarkBold: {
    color: colors.blackRock2,
    fontFamily: 'Sen',
    fontSize: 15,
    fontWeight: 700,
  },
  textDarkGrey: {
    color: colors.comet,
    fontFamily: 'Sen',
    fontSize: 13,
    fontWeight: 400,
  },
  textBlackBold: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 700,
  },
  plusContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.carrotOrange,
  },
});
