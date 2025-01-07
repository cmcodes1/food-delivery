import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.light,
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
  navContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: colors.bgSolitude,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlackBig: {
    color: colors.bgBlackRussian,
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
    color: colors.bgBlackRussian,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 700,
  },
  textBlack: {
    color: colors.bgBlackRussian,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  itemContainer: {
    height: 46,
    borderRadius: 33,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.whisper,
    marginRight: 10,
  },
  selectedItem: {
    backgroundColor: colors.carrotOrange,
    borderWidth: 0,
  },
  textLight: {
    color: colors.light,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 400,
  },
  textBlackHuge: {
    color: colors.bgBlackRussian,
    fontFamily: 'Sen',
    fontSize: 20,
    fontWeight: 400,
  },
  foodContainer: {
    width: '45%',
    padding: 12,
    borderWidth: 0.2,
    borderRadius: 10,
  },
  foodImage: {
    height: 80,
    width: '90%',
  },
  textDarkBold: {
    color: colors.labelDark,
    fontFamily: 'Sen',
    fontSize: 15,
    fontWeight: 700,
  },
  textDarkGrey: {
    color: colors.labelDarkGrey,
    fontFamily: 'Sen',
    fontSize: 13,
    fontWeight: 400,
  },
  plusContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.carrotOrange,
  },
});

export default styles;
