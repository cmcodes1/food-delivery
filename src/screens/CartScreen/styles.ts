import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.blackRussian,
  },
  header: {
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
    backgroundColor: colors.blackRock,
    borderWidth: 0.2,
  },
  textPrimaryLine: {
    color: colors.pumpkin,
    textDecorationLine: 'underline',
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 25,
  },
  textlightBig: {
    color: colors.white,
    fontFamily: 'Sen',
    fontSize: 18,
    fontWeight: 400,
  },
  textlightBigBold: {
    color: colors.white,
    fontFamily: 'Sen',
    fontSize: 20,
    fontWeight: 700,
  },
  opacity50: {
    opacity: 0.5,
  },
  qtyContainer: {
    backgroundColor: colors.blackRussian,
    width: 125,
    height: 48,
    borderRadius: 50,
    padding: 12,
  },
  textLightBold: {
    color: colors.white,
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
  cartContainer: {
    backgroundColor: colors.aliceBlue,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  textLightGrey: {
    color: colors.mischka,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  deliveryAddress: {
    height: 62,
    paddingHorizontal: 12,
    borderWidth: 0.2,
    borderRadius: 10,
    backgroundColor: colors.aliceBlue,
    justifyContent: 'center',
    marginBottom: 30,
  },
  inputDeliveryAddress: {
    color: colors.blackRock2,
    opacity: 0.5,
  },
  textBlackHuge: {
    color: colors.blackRussian,
    fontFamily: 'Sen',
    fontSize: 30,
    fontWeight: 400,
  },
  textDecorationNone: {
    textDecorationLine: 'none',
  },
});

export default styles;
