import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.light,
  },
  restaurantImage: {
    width: '100%',
    height: 320,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 0.2,
    paddingTop: 30,
  },
  header: {
    marginTop: -320,
    marginBottom: 220,
    paddingHorizontal: 24,
    paddingTop: 50,
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
    backgroundColor: colors.light,
    borderWidth: 0.2,
  },
  body: {
    paddingHorizontal: 24,
  },
  textBlackHugeBold: {
    color: colors.bgBlackRussian,
    fontFamily: 'Sen',
    fontSize: 20,
    fontWeight: 700,
  },
  textBlack: {
    color: colors.bgBlackRussian,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  sizeCircle: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: colors.bgTextInput,
  },
  selectedCircle: {
    backgroundColor: colors.carrotOrange,
  },
  textBlackBig: {
    color: colors.bgBlackRussian,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 400,
  },
  selectedSize: {
    color: colors.light,
    fontWeight: 700,
  },
  textDark: {
    color: colors.labelDark,
    fontFamily: 'Sen',
    fontSize: 13,
    fontWeight: 400,
  },
  ingridientCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.chablish,
  },
  cartContainer: {
    backgroundColor: colors.bgTextInput,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  qtyContainer: {
    backgroundColor: colors.bgBlackRussian,
    width: 125,
    height: 48,
    borderRadius: 50,
    padding: 12,
  },
  textLightBold: {
    color: colors.light,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 700,
  },
  changeQtyButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.payneGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlackHuge: {
    color: colors.bgBlackRussian,
    fontFamily: 'Sen',
    fontSize: 28,
    fontWeight: 400,
  },
  cartButton: {
    backgroundColor: colors.labelPrimary,
    height: 62,
    borderRadius: 12,
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
});

export default styles;
