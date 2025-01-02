import * as React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Spacer from '../../components/Spacer';
import icons from '../../styles/icons';
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
          <TextInput
            placeholder="Search dishes, restaurants"
            style={styles.placeholder}
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
        <Spacer height={32} />
      </View>
    </ScrollView>
  );
}
