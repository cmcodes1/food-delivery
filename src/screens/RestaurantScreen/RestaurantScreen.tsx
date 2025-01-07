import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../../assets/icons';
import Spacer from '../../components/Spacer';
import {NavigationPropType} from '../../navigation/types';
import styles from '../RestaurantScreen/styles';
import {RestaurantScreenProps} from './types';

export default function RestaurantScreen({route}: RestaurantScreenProps) {
  const {restaurantName, rating, deliveryCharge, time} = route.params;
  const navigation: NavigationPropType = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNavigation = (itemName: string) => {
    navigation.navigate('ItemDetailsScreen', {
      itemName,
      restaurantName,
      rating,
      deliveryCharge,
      time,
    });
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={[styles.row, styles.spaceBetween]}>
          <View style={[styles.row, styles.alignCenter]}>
            <TouchableOpacity
              style={styles.navContainer}
              onPress={() => handleBack()}>
              <SvgXml xml={icons.chevronLeft} />
            </TouchableOpacity>
            <Spacer width={16} />
            <Text style={styles.textBlackBig}>Restaurant View</Text>
          </View>
          <View style={styles.navContainer}>
            <SvgXml xml={icons.kebabMenu} />
          </View>
        </View>
        <Spacer height={24} />
        <Image
          source={require('../../assets/images/restaurant1.png')}
          style={styles.restaurantImage}
          resizeMode="contain"
        />
        <Spacer height={24} />
        <Text style={styles.textBlackBig}>{restaurantName}</Text>
        <Spacer height={4} />
        <Text style={styles.textLightGrey}>
          Maecenas sed diam eget risus varius blandit sit amet non magna.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </Text>
        <Spacer height={22} />
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
        <Spacer height={32} />
        <ScrollView horizontal={true}>
          <View style={[styles.row, styles.spaceBetween]}>
            <View
              style={[
                styles.itemContainer,
                styles.center,
                styles.selectedItem,
              ]}>
              <Text style={styles.textLight}>Burger</Text>
            </View>
            <View style={[styles.itemContainer, styles.center]}>
              <Text style={styles.textBlackBig}>Sandwich</Text>
            </View>
            <View style={[styles.itemContainer, styles.center]}>
              <Text style={styles.textBlackBig}>Pizza</Text>
            </View>
            <View style={[styles.itemContainer, styles.center]}>
              <Text style={styles.textBlackBig}>Noodles</Text>
            </View>
          </View>
        </ScrollView>
        <Spacer height={32} />
        <Text style={styles.textBlackHuge}>Burger (10)</Text>
        <Spacer height={20} />
        <View style={[styles.row, styles.spaceBetween]}>
          <TouchableOpacity
            style={styles.foodContainer}
            onPress={() => handleNavigation('Burger Ferguson')}>
            <Image
              source={require('../../assets/images/burger.jpg')}
              style={styles.foodImage}
              resizeMode="contain"
            />
            <Spacer height={5} />
            <Text style={styles.textDarkBold}>Burger Ferguson</Text>
            <Spacer height={5} />
            <Text style={styles.textDarkGrey}>Spicy restaurant</Text>
            <Spacer height={2} />
            <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
              <Text style={styles.textBlackBold}>$40</Text>
              <TouchableOpacity style={[styles.plusContainer, styles.center]}>
                <SvgXml xml={icons.plus} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.foodContainer}
            onPress={() => handleNavigation("Rockin' Burgers")}>
            <Image
              source={require('../../assets/images/burger.jpg')}
              style={styles.foodImage}
              resizeMode="contain"
            />
            <Spacer height={5} />
            <Text style={styles.textDarkBold}>Rockin' Burgers</Text>
            <Spacer height={5} />
            <Text style={styles.textDarkGrey}>Cafecafachino</Text>
            <Spacer height={2} />
            <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
              <Text style={styles.textBlackBold}>$40</Text>
              <TouchableOpacity style={[styles.plusContainer, styles.center]}>
                <SvgXml xml={icons.plus} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <Spacer height={250} />
      </View>
    </ScrollView>
  );
}
