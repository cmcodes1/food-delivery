import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgBlackRussian,
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
  editItems: {
    color: colors.labelPrimary,
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: 400,
  },
  itemIamge: {
    width: 120,
    height: 120,
    borderRadius: 25,
  },
  itemDetailsContainer: {},
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
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
});

export default styles;
