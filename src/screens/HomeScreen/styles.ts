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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: colors.solitude,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimaryBold: {
    color: colors.pumpkin,
    fontFamily: 'Sen',
    fontSize: 12,
    fontWeight: 700,
  },
  textLightGrey: {
    color: colors.dimGray,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  cartContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: colors.blackRussian,
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
    backgroundColor: colors.pumpkin,
  },
  textLightBold: {
    color: colors.white,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'center',
  },
  headerText: {
    color: colors.nero,
    fontFamily: 'Sen',
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
    backgroundColor: colors.aliceBlue,
    height: 62,
    borderRadius: 10,
  },
  searchInput: {
    color: colors.dimGrey,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
  },
  textDarkBig: {
    color: colors.blackRock2,
    fontFamily: 'Sen',
    fontSize: 20,
    fontWeight: 400,
  },
  textDark: {
    color: colors.nightRider,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 400,
  },
});

export default styles;
