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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: colors.bgSolitude,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimaryBold: {
    color: colors.labelPrimary,
    fontSize: 12,
    fontWeight: 700,
  },
  textLightGrey: {
    color: colors.labelLightGrey,
    fontSize: 14,
    fontWeight: 400,
  },
  cartContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: colors.bgBlackRussian,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartQtyContainer: {
    position: 'absolute',
    left: 20,
    bottom: 24,
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: colors.labelPrimary,
  },
  textLightBold: {
    color: colors.light,
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
  },
  headerText: {
    color: colors.nero,
    fontSize: 16,
    fontWeight: 400,
  },
  bold: {
    fontWeight: 700,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: colors.bgTextInput,
    height: 62,
    borderRadius: 10,
  },
  searchInput: {
    color: colors.dimGrey,
    fontSize: 14,
    fontWeight: 400,
  },
  textDarkBig: {
    color: colors.labelDark,
    fontSize: 20,
    fontWeight: 400,
  },
  textDark: {
    color: colors.nightRider,
    fontSize: 16,
    fontWeight: 400,
  },
  categoryContainer: {
    padding: 8,
    height: 60,
    borderRadius: 50,
    borderWidth: 0.2,
  },
  selectedCategoryContainer: {
    backgroundColor: colors.salomie,
  },
  food: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  textDarkBold: {
    color: colors.labelDark,
    fontSize: 14,
    fontWeight: 700,
  },
  restaurantImage: {
    width: '100%',
    height: 140,
    borderRadius: 24,
    borderWidth: 0.2,
  },
  textBlackBig: {
    color: colors.bgBlackRussian,
    fontSize: 20,
    fontWeight: 400,
  },
  textBlackBold: {
    color: colors.bgBlackRussian,
    fontSize: 16,
    fontWeight: 700,
  },
  textBlack: {
    color: colors.bgBlackRussian,
    fontSize: 14,
    fontWeight: 400,
  },
});

export default styles;
