import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Spacer from '../../components/Spacer';
import icons from '../../styles/icons';
import styles from '../ItemDetailsScreen/styles';
import {NavigationPropType} from '../../navigation/types';

type ItemDetailsScreenProps = {
  route: {
    params: {
      itemName: string;
      restaurantImage: string;
      restaurantName: string;
      rating: string;
      deliveryCharge: string;
      time: string;
    };
  };
};

export default function ItemDetailsScreen({route}: ItemDetailsScreenProps) {
  const {itemName, restaurantName, rating, deliveryCharge, time} = route.params;

  const navigation: NavigationPropType = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    // navigation.navigate('CartScreen');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
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
            onPress={() => handleBack()}>
            <SvgXml xml={icons.chevronLeft} />
          </TouchableOpacity>
          <View style={[styles.navContainer, styles.center]}>
            <SvgXml xml={icons.like} />
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
            <View style={[styles.sizeCircle, styles.center]}>
              <Text style={styles.textBlackBig}>10"</Text>
            </View>
            <Spacer width={10} />
            <View
              style={[styles.sizeCircle, styles.selectedCircle, styles.center]}>
              <Text style={[styles.textBlackBig, styles.selectedSize]}>
                14"
              </Text>
            </View>
            <Spacer width={10} />
            <View style={[styles.sizeCircle, styles.center]}>
              <Text style={styles.textBlackBig}>16"</Text>
            </View>
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
        </View>
        <Spacer height={20} />
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
              <Text style={styles.textLightBold}>2</Text>
              <View style={styles.changeQtyButton}>
                <Text style={styles.textLightBold}>+</Text>
              </View>
            </View>
          </View>
          <Spacer height={24} />
          <TouchableOpacity
            style={[styles.cartButton, styles.center]}
            onPress={() => handleNavigation()}>
            <Text style={styles.textLightBold}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
