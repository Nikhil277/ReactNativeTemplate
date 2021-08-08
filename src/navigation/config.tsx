import colors from '../themes/colors';

// Contains Common configurations for navigation
const navigationConfig = {
  headerStyle: {
    backgroundColor: colors.header,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
};

export default navigationConfig;

export type RootStackParamList = {
  Home: undefined;
};
