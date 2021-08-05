import React, {useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {colors, Images} from '../../themes';
import {loginValidation} from '../../utilities/formValidations';
import strings from '../../utilities/strings';
import {styles} from './style';

export const Login = () => {
  const [email, setEmail] = useState('nikhil@gmail.com');
  const [password, setPassword] = useState('123456');

  const emailChanged = (text: string) => {
    setEmail(text);
  };

  const passwordChange = (text: string) => {
    setPassword(text);
  };

  const loginButtonTapped = () => {
    Keyboard.dismiss();
    const validationResult = loginValidation({email, password});
    if (validationResult.status) {
      invokeLoginApi();
    } else {
      // handle validation errors
      let errorMesage = '';
      if (validationResult.emailError !== '') {
        errorMesage = validationResult.emailError;
      } else {
        errorMesage = validationResult.passwordError;
      }
      Snackbar.show({
        text: errorMesage,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.altTitle,
      });
    }
  };

  const invokeLoginApi = () => {
    // Not calling actual api, just mocking an asynchronous operation
    if (email === 'nikhil@gmail.com' && password === '123456') {
      // success
    } else {
      Snackbar.show({
        text: 'Wrong credentials',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.altTitle,
      });
    }
  };

  return (
    <ImageBackground
      source={Images.login.background}
      style={styles.viewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.title}>{strings.login.title}</Text>
          <View style={styles.textFieldContianer}>
            <TextInput
              style={styles.textFields}
              onChangeText={emailChanged}
              value={email}
              placeholder="Username"
            />
          </View>
          <View style={styles.textFieldContianer}>
            <TextInput
              style={styles.textFields}
              onChangeText={passwordChange}
              value={password}
              placeholder="Password"
              keyboardType="default"
            />
          </View>
          <TouchableOpacity
            onPress={loginButtonTapped}
            style={styles.loginButton}>
            <Text style={styles.loginButtonTitle}>
              {strings.login.loginButton}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
