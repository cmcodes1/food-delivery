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

export default function CartScreen({route}: {route: CartScreenRouteProp}) {
  const [foodItems, setFoodItems] = useState(route.params.foodItems);
  const [totalPrice, setTotalPrice] = useState(getTotalPrice(foodItems));

  const navigation: NavigationPropType = useNavigation();

  const handleBack = () => {
    navigation.goBack();
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
                  source={require('../../assets/images/pizza.png')}
                  style={styles.itemImage}
                  resizeMode="contain"
                />
                <View>
                  <Text style={styles.textlightBig}>{item.itemName}</Text>
                  <Spacer height={10} />
                  <Text style={styles.textlightBigBold}>
                    ${Number(item.price) * Number(item.qty)}
                  </Text>
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
                        onPress={() => {
                          let updatedFoodItems = handleQty(
                            foodItems,
                            index,
                            'decrement',
                          );
                          setFoodItems(updatedFoodItems);
                          setTotalPrice(getTotalPrice(updatedFoodItems));
                        }}>
                        <Text style={styles.textLightBold}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.textLightBold}>{item.qty}</Text>
                      <TouchableOpacity
                        style={styles.changeQtyButton}
                        onPress={() => {
                          let updatedFoodItems = handleQty(
                            foodItems,
                            index,
                            'increment',
                          );
                          setFoodItems(updatedFoodItems);
                          setTotalPrice(getTotalPrice(updatedFoodItems));
                        }}>
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
          <TouchableOpacity
            style={[styles.placeOrderButton, styles.center]}
            onPress={handleNavigation}>
            <Text style={styles.textLightSmallBold}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
