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
  trackOrderButton: {
    height: 62,
    width: '100%',
    borderRadius: 12,
    backgroundColor: colors.labelPrimary,
    marginTop: 200,
  },
  textLightBold: {
    color: colors.light,
    fontFamily: 'Sen',
    fontSize: 16,
    fontWeight: 700,
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
