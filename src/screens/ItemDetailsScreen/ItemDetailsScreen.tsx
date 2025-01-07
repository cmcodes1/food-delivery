import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Spacer from '../../components/Spacer';
import {NavigationPropType} from '../../navigation/types';
import icons from '../../assets/icons';
import styles from '../ItemDetailsScreen/styles';
import {ItemDetailsScreenProps} from './types';

export default function ItemDetailsScreen({route}: ItemDetailsScreenProps) {
  const {itemName, restaurantName, rating, deliveryCharge, time} = route.params;

  const navigation: NavigationPropType = useNavigation();

  const [size, setSize] = useState('14"');

  const handleBack = () => {
    navigation.goBack();
  };

  const foodItems = [
    {
      itemName,
      price: 64,
      size,
      qty: 2,
    },
  ];

  const handleNavigation = () => {
    navigation.navigate('CartScreen', {
      foodItems,
    });
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <Image
          source={require('../../assets/images/restaurant1.png')}
          style={styles.restaurantImage}
          resizeMode="contain"
        />
        <View
          style={[
            styles.header,
            styles.row,
            styles.spaceBetween,
            styles.alignCenter,
          ]}>
          <TouchableOpacity
            style={[styles.navContainer, styles.center]}
            onPress={handleBack}>
            <SvgXml xml={icons.chevronLeft} />
          </TouchableOpacity>
          <View style={[styles.navContainer, styles.center]}>
            <SvgXml xml={icons.like} onPress={handleNavigation} />
          </View>
        </View>
        <Spacer height={24} />
        <View style={styles.body}>
          <Text style={styles.textBlackHugeBold}>{itemName}</Text>
          <Spacer height={7} />
          <Text style={styles.textBlack}>{restaurantName}</Text>
          <Spacer height={24} />
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
          <Spacer height={24} />
          <Text style={styles.textLightGrey}>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </Text>
          <Spacer height={20} />
          <View style={[styles.row, styles.alignCenter]}>
            <Text style={styles.textLightGrey}>SIZE:</Text>
            <Spacer width={14} />
            <TouchableOpacity
              style={[
                styles.sizeCircle,
                styles.center,
                size === '10"' && styles.selectedCircle,
              ]}
              onPress={() => setSize('10"')}>
              <Text
                style={[
                  styles.textBlackBig,
                  size === '10"' && styles.selectedSize,
                ]}>
                10"
              </Text>
            </TouchableOpacity>
            <Spacer width={10} />
            <TouchableOpacity
              style={[
                styles.sizeCircle,
                styles.center,
                size === '14"' && styles.selectedCircle,
              ]}
              onPress={() => setSize('14"')}>
              <Text
                style={[
                  styles.textBlackBig,
                  size === '14"' && styles.selectedSize,
                ]}>
                14"
              </Text>
            </TouchableOpacity>
            <Spacer width={10} />
            <TouchableOpacity
              style={[
                styles.sizeCircle,
                styles.center,
                size === '16"' && styles.selectedCircle,
              ]}
              onPress={() => setSize('16"')}>
              <Text
                style={[
                  styles.textBlackBig,
                  size === '16"' && styles.selectedSize,
                ]}>
                16"
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer height={20} />
          <Text style={styles.textDark}>INGRIDIENTS</Text>
          <Spacer height={20} />
          <View style={[styles.row, styles.alignCenter, styles.spaceBetween]}>
            <View style={[styles.ingridientCircle, styles.center]}>
              <SvgXml xml={icons.salt} />
            </View>
            <View style={[styles.ingridientCircle, styles.center]}>
              <SvgXml xml={icons.chicken} />
            </View>
            <View style={[styles.ingridientCircle, styles.center]}>
              <SvgXml xml={icons.onion} />
            </View>
            <View style={[styles.ingridientCircle, styles.center]}>
              <SvgXml xml={icons.garlic} />
            </View>
            <View style={[styles.ingridientCircle, styles.center]}>
              <SvgXml xml={icons.chilli} />
            </View>
          </View>
          <Spacer height={10} />
        </View>
      </ScrollView>
      <View style={styles.cartContainer}>
        <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
          <Text style={styles.textBlackHuge}>$32</Text>
          <View
            style={[
              styles.qtyContainer,
              styles.row,
              styles.spaceBetween,
              styles.alignCenter,
            ]}>
            <View style={styles.changeQtyButton}>
              <Text style={styles.textLightBold}>-</Text>
            </View>
            <Text style={styles.textLightBold}>{foodItems[0].qty}</Text>
            <View style={styles.changeQtyButton}>
              <Text style={styles.textLightBold}>+</Text>
            </View>
          </View>
        </View>
        <Spacer height={24} />
        <TouchableOpacity
          style={[styles.cartButton, styles.center]}
          onPress={handleNavigation}>
          <Text style={styles.textLightBold}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
