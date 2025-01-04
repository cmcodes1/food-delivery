import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Spacer from '../../components/Spacer';
import icons from '../../styles/icons';
import styles from '../HomeScreen/styles';
import {NavigationPropType} from '../../navigation/types';

export default function HomeScreen() {
  const navigation: NavigationPropType = useNavigation();
  const handleNavigation = (
    restaurantImage: string,
    restaurantName: string,
    rating: string,
    deliveryCharge: string,
    time: string,
  ) => {
    navigation.navigate('RestaurantScreen', {
      restaurantImage: restaurantImage,
      restaurantName: restaurantName,
      rating: rating,
      deliveryCharge: deliveryCharge,
      time: time,
    });
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={[styles.row, styles.spaceBetween]}>
          <View style={styles.row}>
            <View style={styles.menuContainer}>
              <SvgXml xml={icons.menu} />
            </View>
            <Spacer width={18} />
            <View>
              <Text style={styles.textPrimaryBold}>DELIVER TO</Text>
              <View style={[styles.row, styles.alignCenter]}>
                <Text style={styles.textLightGrey}>Halal Lab office</Text>
                <Spacer width={8} />
                <SvgXml xml={icons.chevronDown} />
              </View>
            </View>
          </View>
          <View style={styles.cartContainer}>
            <SvgXml xml={icons.cart} />
            <View style={[styles.cartQtyContainer, styles.center]}>
              <Text style={styles.textLightBold}>2</Text>
            </View>
          </View>
        </View>
        <Spacer height={24} />
        <Text style={styles.headerText}>
          Hey Halal,{' '}
          <Text style={[styles.headerText, styles.bold]}>Good Afternoon!</Text>
        </Text>
        <Spacer height={16} />
        <View style={styles.inputContainer}>
          <SvgXml xml={icons.search} />
          <Spacer width={12} />
          <TextInput
            placeholder="Search dishes, restaurants"
            style={styles.searchInput}
          />
        </View>
        <Spacer height={32} />
        <View style={[styles.row, styles.spaceBetween]}>
          <Text style={styles.textDarkBig}>All Categories</Text>
          <View style={[styles.row, styles.alignCenter]}>
            <Text style={styles.textDark}>See All</Text>
            <Spacer width={10} />
            <SvgXml xml={icons.chevronRight} />
          </View>
        </View>
        <Spacer height={20} />
        <ScrollView horizontal={true}>
          <View style={[styles.row, styles.alignCenter]}>
            <View
              style={[
                styles.categoryContainer,
                styles.selectedCategoryContainer,
              ]}>
              <View style={[styles.row, styles.alignCenter]}>
                <Image
                  source={require('../../assets/images/allFood.jpg')}
                  style={styles.food}
                  resizeMode="contain"
                />
                <Spacer width={12} />
                <Text style={styles.textDarkBold}>All</Text>
              </View>
            </View>
            <Spacer width={20} />
            <View style={styles.categoryContainer}>
              <View style={[styles.row, styles.alignCenter]}>
                <Image
                  source={require('../../assets/images/hotDog.jpg')}
                  style={styles.food}
                  resizeMode="contain"
                />
                <Spacer width={12} />
                <Text style={styles.textDarkBold}>Hot Dog</Text>
              </View>
            </View>
            <Spacer width={20} />
            <View style={styles.categoryContainer}>
              <View style={[styles.row, styles.alignCenter]}>
                <Image
                  source={require('../../assets/images/burger.jpg')}
                  style={styles.food}
                  resizeMode="contain"
                />
                <Spacer width={12} />
                <Text style={styles.textDarkBold}>Burger</Text>
              </View>
            </View>
            <Spacer width={20} />
          </View>
        </ScrollView>
        <Spacer height={32} />
        <View style={[styles.row, styles.spaceBetween]}>
          <Text style={styles.textDarkBig}>Open Restaurants</Text>
          <View style={[styles.row, styles.alignCenter]}>
            <Text style={styles.textDark}>See All</Text>
            <Spacer width={10} />
            <SvgXml xml={icons.chevronRight} />
          </View>
        </View>
        <Spacer height={20} />
        <TouchableOpacity
          onPress={() =>
            handleNavigation(
              '../../assets/images/restaurant1.png',
              'Rose Garden Restaurant',
              '4.7',
              'Free',
              '20 min',
            )
          }>
          <Image
            source={require('../../assets/images/restaurant1.png')}
            style={styles.restaurantImage}
            resizeMode="contain"
          />
          <Spacer height={8} />
          <Text style={styles.textBlackBig}>Rose Garden Restaurant</Text>
          <Spacer height={5} />
          <Text style={styles.textLightGrey}>
            Burger - Chiken - Riche - Wings
          </Text>
          <Spacer height={14} />
          <View style={styles.row}>
            <View style={[styles.row, styles.alignCenter]}>
              <SvgXml xml={icons.rating} />
              <Spacer width={4} />
              <Text style={styles.textBlackBold}>4.7</Text>
            </View>
            <Spacer width={24} />
            <View style={[styles.row, styles.alignCenter]}>
              <SvgXml xml={icons.delivery} />
              <Spacer width={4} />
              <Text style={styles.textBlack}>Free</Text>
            </View>
            <Spacer width={24} />
            <View style={[styles.row, styles.alignCenter]}>
              <SvgXml xml={icons.time} />
              <Spacer width={4} />
              <Text style={styles.textBlack}>20 min</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Spacer height={20} />
        <TouchableOpacity
          onPress={() =>
            handleNavigation(
              '../../assets/images/restaurant2.png',
              'American Spicy Burger Shop',
              '4.3',
              'Free',
              '30 min',
            )
          }>
          <Image
            source={require('../../assets/images/restaurant2.png')}
            style={styles.restaurantImage}
            resizeMode="contain"
          />
          <Spacer height={8} />
          <Text style={styles.textBlackBig}>American Spicy Burger Shop</Text>
          <Spacer height={5} />
          <Text style={styles.textLightGrey}>Burger - Chiken - Wings</Text>
          <Spacer height={14} />
          <View style={styles.row}>
            <View style={[styles.row, styles.alignCenter]}>
              <SvgXml xml={icons.rating} />
              <Spacer width={4} />
              <Text style={styles.textBlackBold}>4.3</Text>
            </View>
            <Spacer width={24} />
            <View style={[styles.row, styles.alignCenter]}>
              <SvgXml xml={icons.delivery} />
              <Spacer width={4} />
              <Text style={styles.textBlack}>Free</Text>
            </View>
            <Spacer width={24} />
            <View style={[styles.row, styles.alignCenter]}>
              <SvgXml xml={icons.time} />
              <Spacer width={4} />
              <Text style={styles.textBlack}>30 min</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Spacer height={20} />
      </View>
    </ScrollView>
  );
}
