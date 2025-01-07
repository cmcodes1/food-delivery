import * as React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import icons from '../../assets/icons';
import styles from '../SummaryScreen/styles';

export default function SummaryScreen() {
  return (
    <ScrollView>
      <View style={styles.root}>
        <View>
          <SvgXml
            xml={icons.success}
            height={200}
            width={200}
            style={[styles.successImage, styles.center]}
          />
          <Text style={styles.textDarkBigBold}>Congratulations!</Text>
          <Text style={styles.textBrightGrey}>
            You successfully made a payment,{'\n'}
            enjoy our service!
          </Text>
        </View>
        <TouchableOpacity style={[styles.trackOrderButton, styles.center]}>
          <Text style={styles.textLightBold}>TRACK ORDER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
