import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  // HomeScreen
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
  placeholder: {
    color: colors.dimGrey,
    fontSize: 14,
    fontWeight: 400,
  },

  // old styles from LoginScreen
  subheaderText: {
    color: colors.light,
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 3,
  },
  labelDark: {
    color: colors.labelDark,
    fontSize: 13,
    fontWeight: 400,
  },
  body: {
    backgroundColor: colors.light,
    height: '120%',
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  labelGrey: {
    color: colors.labelGrey,
    textAlign: 'left',
  },
  labelPrimary: {
    color: colors.labelPrimary,
    fontSize: 14,
    textAlign: 'right',
  },
  button: {
    height: 62,
    width: '100%',
    backgroundColor: colors.labelPrimary,
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.light,
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  labelDarkGrey: {
    color: colors.labelDarkGrey,
    fontSize: 13,
    fontWeight: 400,
  },
  labelPrimaryBold: {
    color: colors.labelPrimary,
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'right',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
