import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../../assets/icons';
import FoodCard from '../../components/FoodCard';
import FoodContainer from '../../components/FoodContainer';
import Spacer from '../../components/Spacer';
import {NavigationPropType} from '../../navigation/types';
import {getImageSource} from '../../utils/utils';
import styles from '../RestaurantScreen/styles';
import {RestaurantScreenProps} from './types';

export default function RestaurantScreen({route}: RestaurantScreenProps) {
  const {restaurantImage, restaurantName, rating, deliveryCharge, time} =
    route.params;
  const navigation: NavigationPropType = useNavigation();

  const handleBack = () => {
    navigation.goBack();
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
          source={getImageSource(restaurantImage)}
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
            <FoodContainer isSelected={true} foodName={'Burger'} />
            <FoodContainer isSelected={false} foodName={'Sandwich'} />
            <FoodContainer isSelected={false} foodName={'Pizza'} />
            <FoodContainer isSelected={false} foodName={'Noodles'} />
          </View>
        </ScrollView>
        <Spacer height={32} />
        <Text style={styles.textBlackHuge}>Burger (10)</Text>
        <Spacer height={20} />
        <View style={[styles.flexWrap, styles.row, styles.spaceBetween]}>
          <FoodCard
            restaurantName={restaurantName}
            itemImage={'burger'}
            itemName={'Burger Ferguson'}
            itemDescription={'Spicy restaurant'}
            rating={rating}
            deliveryCharge={deliveryCharge}
            time={time}
          />
          <FoodCard
            restaurantName={restaurantName}
            itemImage={'burger'}
            itemName={'Burger Ferguson'}
            itemDescription={'Cafecafachino'}
            rating={rating}
            deliveryCharge={deliveryCharge}
            time={time}
          />
          <FoodCard
            restaurantName={restaurantName}
            itemImage={'burger'}
            itemName={'Burger Ferguson'}
            itemDescription={'Spicy restaurant'}
            rating={rating}
            deliveryCharge={deliveryCharge}
            time={time}
          />
          <FoodCard
            restaurantName={restaurantName}
            itemImage={'burger'}
            itemName={'Burger Ferguson'}
            itemDescription={'Cafecafachino'}
            rating={rating}
            deliveryCharge={deliveryCharge}
            time={time}
          />
        </View>
      </View>
    </ScrollView>
  );
}
