import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../../assets/icons';
import Button from '../../components/Button';
import IngridientContainer from '../../components/IngridientContainer';
import SizeContainer from '../../components/SizeContainer';
import Spacer from '../../components/Spacer';
import {NavigationPropType} from '../../navigation/types';
import {getImageSource} from '../../utils/utils';
import styles from '../ItemDetailsScreen/styles';
import {ItemDetailsScreenProps} from './types';

export default function ItemDetailsScreen({route}: ItemDetailsScreenProps) {
  const {
    itemName,
    restaurantImage,
    restaurantName,
    rating,
    deliveryCharge,
    time,
  } = route.params;

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
          source={getImageSource(restaurantImage)}
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
            <Spacer width={16} />
            <SizeContainer
              isSelected={size === '10"'}
              size={'10"'}
              setSize={() => setSize('10"')}
            />
            <SizeContainer
              isSelected={size === '14"'}
              size={'14"'}
              setSize={() => setSize('14"')}
            />
            <SizeContainer
              isSelected={size === '16"'}
              size={'16"'}
              setSize={() => setSize('16"')}
            />
            <Spacer width={14} />
          </View>
          <Spacer height={20} />
          <Text style={styles.textDark}>INGRIDIENTS</Text>
          <Spacer height={20} />
          <ScrollView
            horizontal={true}
            contentContainerStyle={[styles.row, styles.alignCenter]}>
            <IngridientContainer icon={icons.salt} />
            <IngridientContainer icon={icons.chicken} />
            <IngridientContainer icon={icons.onion} />
            <IngridientContainer icon={icons.garlic} />
            <IngridientContainer icon={icons.chilli} />
          </ScrollView>
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
        <Button title={'ADD TO CART'} onPress={handleNavigation} />
      </View>
    </View>
  );
}
