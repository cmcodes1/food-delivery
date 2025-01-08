import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  navContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: colors.solitude,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlackBig: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 400,
  },
  restaurantImage: {
    width: '100%',
    height: 150,
    borderRadius: 32,
    borderWidth: 0.2,
  },
  textLightGrey: {
    color: colors.mischka,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  textBlackBold: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 700,
  },
  textBlack: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  textBlackHuge: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 20,
    fontWeight: 400,
  },
  foodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default styles;
