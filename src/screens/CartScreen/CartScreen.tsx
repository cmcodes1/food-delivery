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
import {NavigationPropType} from '../../navigation/types';
import icons from '../../styles/icons';
import styles from '../CartScreen/styles';

export default function CartScreen() {
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
              onPress={() => handleBack()}>
              <SvgXml xml={icons.chevronLeftLight} />
            </TouchableOpacity>
            <Text style={styles.textPrimaryLine}>EDIT ITEMS</Text>
          </View>
          <Spacer height={24} />
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <Image
              source={require('../../assets/images/pizza.png')}
              style={styles.itemImage}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.textlightBig}>Pizza Calzone European</Text>
              <Spacer height={10} />
              <Text style={styles.textlightBigBold}>$64</Text>
              <Spacer height={17} />
              <View
                style={[styles.row, styles.alignCenter, styles.spaceBetween]}>
                <Text style={[styles.textlightBig, styles.opacity50]}>14"</Text>
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
            </View>
          </View>
          <Spacer height={32} />
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <Image
              source={require('../../assets/images/pizza.png')}
              style={styles.itemImage}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.textlightBig}>Pizza Calzone European</Text>
              <Text style={styles.textlightBigBold}>$32</Text>
              <View
                style={[styles.row, styles.alignCenter, styles.spaceBetween]}>
                <Text style={[styles.textlightBig, styles.opacity50]}>14"</Text>
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
                  <Text style={styles.textLightBold}>1</Text>
                  <View style={styles.changeQtyButton}>
                    <Text style={styles.textLightBold}>+</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Spacer height={32} />
        </View>
        <View style={styles.cartContainer}>
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <Text style={styles.textLightGrey}>DELIVERY ADDRESS</Text>
            <Text style={styles.textPrimaryLine}>EDIT</Text>
          </View>
          <Spacer height={10} />
          <View style={styles.deliveryAddress}>
            <TextInput
              placeholder="Add delivery address"
              value="2118 Thornridge Cir. Syracuse"
              style={styles.inputDeliveryAddress}
            />
          </View>
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
              <Text style={styles.textLightGrey}>TOTAL:</Text>
              <Spacer width={12} />
              <Text style={styles.textBlackHuge}>$96</Text>
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
