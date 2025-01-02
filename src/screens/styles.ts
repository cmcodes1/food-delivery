import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgDark,
  },
  header: {
    height: '40%',
    justifyContent: 'center',
  },
  headerText: {
    color: colors.light,
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
  },
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.bgTextInput,
    height: 62,
    borderRadius: 10,
    paddingHorizontal: 19,
    marginTop: 8,
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
