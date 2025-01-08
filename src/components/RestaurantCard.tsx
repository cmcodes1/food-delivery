import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../assets/icons';
import {NavigationPropType} from '../navigation/types';
import colors from '../styles/colors';
import {getImageSource} from '../utils/utils';
import Spacer from './Spacer';

type RestaurantCardProps = {
  restaurantImage: string;
  restaurantName: string;
  description: string;
  rating: string;
  deliveryCharge: string;
  time: string;
};

export default function RestaurantCard({
  restaurantImage,
  restaurantName,
  description,
  rating,
  deliveryCharge,
  time,
}: RestaurantCardProps) {
  const navigation: NavigationPropType = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('RestaurantScreen', {
      restaurantImage,
      restaurantName,
      rating,
      deliveryCharge,
      time,
    });
  };

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.root}>
      <Image
        source={getImageSource(restaurantImage)}
        style={styles.restaurantImage}
        resizeMode="contain"
      />
      <Spacer height={8} />
      <Text style={styles.textBlackBig}>{restaurantName}</Text>
      <Spacer height={5} />
      <Text style={styles.textLightGrey}>{description}</Text>
      <Spacer height={14} />
      <View style={styles.row}>
        <View style={[styles.row, styles.alignCenter]}>
          <SvgXml xml={icons.rating} />
          <Spacer width={4} />
          <Text style={styles.textBlackBold}>{rating}</Text>
        </View>
        <Spacer width={24} />
        <View style={[styles.row, styles.alignCenter]}>
          <SvgXml xml={icons.delivery} />
          <Spacer width={4} />
          <Text style={styles.textBlack}>{deliveryCharge}</Text>
        </View>
        <Spacer width={24} />
        <View style={[styles.row, styles.alignCenter]}>
          <SvgXml xml={icons.time} />
          <Spacer width={4} />
          <Text style={styles.textBlack}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
  },
  restaurantImage: {
    width: '100%',
    height: 140,
    borderRadius: 24,
    borderWidth: 0.2,
  },
  row: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  textBlackBig: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 20,
    fontWeight: 400,
  },
  textLightGrey: {
    color: colors.dimGray,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  textBlackBold: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 700,
  },
  textBlack: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
});
