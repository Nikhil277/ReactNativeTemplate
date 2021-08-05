import {StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {font, fontSize} from '../../themes/fonts';

export const styles = StyleSheet.create({
  viewContainer: {flex: 1, backgroundColor: 'white'},
  safeArea: {flex: 1},
  title: {
    color: colors.altTitle,
    marginVertical: 20,
    fontSize: fontSize.large,
    fontFamily: font.semiBold,
    textAlign: 'center',
  },
  textFieldContianer: {
    marginHorizontal: 20,
    marginBottom: 20,
    height: 40,
    borderRadius: 4,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textFields: {
    color: colors.textField,
    fontSize: fontSize.average,
    fontFamily: font.regular,
  },
  loginButton: {
    marginHorizontal: 20,
    marginBottom: 20,
    height: 50,
    borderRadius: 4,
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  loginButtonTitle: {
    color: colors.altTitle,
    fontSize: fontSize.large,
    fontFamily: font.semiBold,
  },
});
