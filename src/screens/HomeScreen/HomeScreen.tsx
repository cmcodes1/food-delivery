import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../../assets/icons';
import CategoryContainer from '../../components/CategoryContainer';
import Input from '../../components/Input';
import RestaurantCard from '../../components/RestaurantCard';
import Spacer from '../../components/Spacer';
import styles from '../HomeScreen/styles';

export default function HomeScreen() {
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
          <Input
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
            <CategoryContainer
              isSelected={true}
              foodImage={'allFood'}
              foodName={'All'}
            />
            <CategoryContainer
              isSelected={false}
              foodImage={'hotDog'}
              foodName={'Hot Dog'}
            />
            <CategoryContainer
              isSelected={false}
              foodImage={'burger'}
              foodName={'Burger'}
            />
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
        <RestaurantCard
          restaurantImage={'restaurant1'}
          restaurantName={'Rose Garden Restaurant'}
          description={'Burger - Chiken - Rice - Wings'}
          rating={'4.7'}
          deliveryCharge={'Free'}
          time={'20 min'}
        />
        <RestaurantCard
          restaurantImage={'restaurant2'}
          restaurantName={'American Spicy Burger Shop'}
          description={'Burger - Chiken - Wings'}
          rating={'4.7'}
          deliveryCharge={'Free'}
          time={'20 min'}
        />
      </View>
    </ScrollView>
  );
}
