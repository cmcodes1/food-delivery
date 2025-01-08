import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingBottom: 34,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  successImage: {
    marginTop: 230,
    marginBottom: 32,
  },
  textDarkBigBold: {
    color: colors.midnightExpress,
    fontFamily: 'Sen',
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 16,
  },
  textBrightGrey: {
    color: colors.brightGrey,
    opacity: 0.6,
    fontFamily: 'Sen',
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
