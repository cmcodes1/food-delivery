import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../../assets/icons';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';
import {NavigationPropType} from '../../navigation/types';
import {getTotalPrice, handleQty} from '../../utils/utils';
import styles from '../CartScreen/styles';
import {FoodItem, Index} from '../ItemDetailsScreen/types';
import {CartScreenRouteProp} from './types';
import Button from '../../components/Button';

export default function CartScreen({route}: {route: CartScreenRouteProp}) {
  const [foodItems, setFoodItems] = useState(route.params.foodItems);
  const [totalPrice, setTotalPrice] = useState(getTotalPrice(foodItems));

  const navigation: NavigationPropType = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleQtyChange = (index: Index, change: 'increment' | 'decrement') => {
    let updatedFoodItems = handleQty(foodItems, index, change);
    setFoodItems(updatedFoodItems);
    setTotalPrice(getTotalPrice(updatedFoodItems));
  };

  const handleNavigation = () => {
    navigation.navigate('SummaryScreen');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <TouchableOpacity
              style={[styles.navContainer, styles.center]}
              onPress={handleBack}>
              <SvgXml xml={icons.chevronLeftLight} />
            </TouchableOpacity>
            <Text style={styles.textPrimaryLine}>EDIT ITEMS</Text>
          </View>
          <Spacer height={24} />
          {foodItems.map((item: FoodItem, index: Index) => (
            <View key={index}>
              <View
                style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
                <Image
                  source={require('../../assets/images/burger.jpg')}
                  style={styles.itemImage}
                  resizeMode="contain"
                />
                <View>
                  <Text style={styles.textlightBig}>{item.itemName}</Text>
                  <Spacer height={10} />
                  <Text style={styles.textlightBigBold}>${totalPrice}</Text>
                  <Spacer height={17} />
                  <View
                    style={[
                      styles.row,
                      styles.alignCenter,
                      styles.spaceBetween,
                    ]}>
                    <Text style={[styles.textlightBig, styles.opacity50]}>
                      {item.size}
                    </Text>
                    <View
                      style={[
                        styles.qtyContainer,
                        styles.row,
                        styles.spaceBetween,
                        styles.alignCenter,
                      ]}>
                      <TouchableOpacity
                        style={styles.changeQtyButton}
                        onPress={() => handleQtyChange(index, 'decrement')}>
                        <Text style={styles.textLightBold}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.textLightBold}>{item.qty}</Text>
                      <TouchableOpacity
                        style={styles.changeQtyButton}
                        onPress={() => handleQtyChange(index, 'increment')}>
                        <View style={styles.changeQtyButton}>
                          <Text style={styles.textLightBold}>+</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <Spacer height={32} />
            </View>
          ))}
        </View>
        <View style={styles.cartContainer}>
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <Text style={styles.textLightGrey}>DELIVERY ADDRESS</Text>
            <Text style={styles.textPrimaryLine}>EDIT</Text>
          </View>
          <Spacer height={10} />
          <View style={styles.deliveryAddress}>
            <Input
              placeholder={'Add delivery address'}
              value={'2118 Thornridge Cir. Syracuse'}
              style={styles.inputDeliveryAddress}
            />
          </View>
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
              <Text style={styles.textLightGrey}>TOTAL:</Text>
              <Spacer width={12} />
              <Text style={styles.textBlackHuge}>${totalPrice}</Text>
            </View>
            <View style={[styles.row, styles.alignCenter]}>
              <Text style={[styles.textPrimaryLine, styles.textDecorationNone]}>
                Breakdown
              </Text>
              <Spacer width={7} />
              <SvgXml xml={icons.chevronRightDark} />
            </View>
          </View>
          <Spacer height={32} />
          <Button title={'PLACE ORDER'} onPress={handleNavigation} />
        </View>
      </View>
    </ScrollView>
  );
}
