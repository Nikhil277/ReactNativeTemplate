import AsyncStorage from '@react-native-community/async-storage';

export const saveLoginDetails = async (userData: any) => {
  let email = '',
    password = '';

  if (userData.mail != null && userData.mail !== '') {
    email = userData.mail;
  }
  if (userData.password != null && userData.password !== '') {
    password = userData.password;
  }

  if (userData != null) {
    try {
      await AsyncStorage.multiSet([
        ['EMAIL', email],
        ['PASSWORD', password],
      ]);
    } catch (error) {}
  }
};

export const getEmployeeDetails = async () => {
  try {
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');

    if (email && password) {
      return {
        email: email,
        password: password,
      };
    }
    return '';
  } catch (error) {
    return '';
  }
};
