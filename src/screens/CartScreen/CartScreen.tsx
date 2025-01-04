import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
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

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <TouchableOpacity
              style={[styles.navContainer, styles.center]}
              onPress={() => handleBack()}>
              <SvgXml xml={icons.chevronLeft} />
            </TouchableOpacity>
            <Text style={styles.editItems}>EDIT ITEMS</Text>
          </View>
          <Spacer height={24} />
          <View style={[styles.row, styles.spaceBetween, styles.alignCenter]}>
            <Image
              source={require('../../assets/images/pizza.png')}
              style={styles.itemIamge}
              resizeMode="contain"
            />
            <View style={styles.itemDetailsContainer}>
              <Text style={styles.textlightBig}>Pizza Calzone European</Text>
              <Text style={styles.textlightBigBold}>$64</Text>
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
              style={styles.itemIamge}
              resizeMode="contain"
            />
            <View style={styles.itemDetailsContainer}>
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
        <View style={styles.cartContainer} />
      </View>
    </ScrollView>
  );
}
