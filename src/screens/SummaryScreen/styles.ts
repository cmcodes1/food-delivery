import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 24,
    paddingBottom: 34,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  successImage: {
    marginTop: 200,
    marginBottom: 32,
  },
  textDarkBigBold: {
    color: colors.midnightExpress,
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 16,
  },
  trackOrderButton: {
    height: 62,
    width: '100%',
    borderRadius: 12,
    backgroundColor: colors.labelPrimary,
    marginTop: 200,
  },
  textLightBold: {
    color: colors.light,
    fontSize: 16,
    fontWeight: 700,
  },
  textBrightGrey: {
    color: colors.brightGrey,
    opacity: 0.6,
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
  },

  // old styles
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
    color: colors.labelPrimary,
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: 400,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 25,
  },
  textlightBig: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 400,
  },
  textlightBigBold: {
    color: colors.light,
    fontSize: 20,
    fontWeight: 700,
  },
  opacity50: {
    opacity: 0.5,
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
    backgroundColor: colors.bgTextInput,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  textLightGrey: {
    color: colors.mischka,
    fontSize: 14,
    fontWeight: 400,
  },
  deliveryAddress: {
    height: 62,
    paddingHorizontal: 12,
    borderWidth: 0.2,
    borderRadius: 10,
    backgroundColor: colors.bgTextInput,
    justifyContent: 'center',
    marginBottom: 30,
  },
  inputDeliveryAddress: {
    color: colors.labelDark,
    opacity: 0.5,
  },
  textBlackHuge: {
    color: colors.bgBlackRussian,
    fontSize: 30,
    fontWeight: 400,
  },
  textDecorationNone: {
    textDecorationLine: 'none',
  },
});

export default styles;
