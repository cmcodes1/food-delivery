import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.blackRussian,
  },
  flex1: {
    flex: 1,
  },
  header: {
    height: '40%',
    justifyContent: 'center',
  },
  bgIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -75,
  },
  headerText: {
    color: colors.white,
    fontFamily: 'Sen',
    fontSize: 30,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: -230,
  },
  subheaderText: {
    color: colors.white,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 3,
  },
  blackRock2: {
    color: colors.blackRock2,
    fontFamily: 'Sen',
    fontSize: 13,
    fontWeight: 400,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.aliceBlue,
    height: 62,
    borderRadius: 10,
    paddingHorizontal: 19,
    marginTop: 8,
  },
  body: {
    backgroundColor: colors.white,
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
  lightSlateGrey: {
    color: colors.lightSlateGrey,
    textAlign: 'left',
  },
  pumpkin: {
    color: colors.pumpkin,
    fontFamily: 'Sen',
    fontSize: 14,
    textAlign: 'right',
  },
  button: {
    height: 62,
    width: '100%',
    backgroundColor: colors.pumpkin,
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
  },
  errorText: {
    color: colors.pumpkin,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  comet: {
    color: colors.comet,
    fontFamily: 'Sen',
    fontSize: 13,
    fontWeight: 400,
  },
  labelPrimaryBold: {
    color: colors.pumpkin,
    fontFamily: 'Sen',
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
