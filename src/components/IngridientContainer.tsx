import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import colors from '../styles/colors';

type IngridientContainerProps = {
  icon: string;
};

export default function IngridientContainer({icon}: IngridientContainerProps) {
  return (
    <View style={[styles.ingridientCircle, styles.center]}>
      <SvgXml xml={icon} />
    </View>
  );
}
const styles = StyleSheet.create({
  ingridientCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.chablish,
    marginRight: 19,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
