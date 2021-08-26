import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import {Login} from '../src/screens/login';
import strings from '../src/utilities/strings';
import Snackbar from 'react-native-snackbar';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {colors} from '../src/themes';
import App from '../App';

const mockStore = configureMockStore();
const store = mockStore({
  startup: {complete: false},
});

jest.mock('react-native-snackbar', () => ({
  LENGTH_LONG: 3000,
  show: jest.fn(),
}));

it('Renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <Login />
    </Provider>,
  );
});

it('Check if login screen', async () => {
  const {findByText} = render(
    <Provider store={store}>
      <Login />
    </Provider>,
  );

  const newHeader = await findByText('Login');
  expect(newHeader).toBeTruthy();
});

it('Should show enter email error message if email is not entered or empty', () => {
  const {getByPlaceholderText, getByText} = render(
    <Provider store={store}>
      <Login />
    </Provider>,
  );
  const emailTextField = getByPlaceholderText(strings.login.emailPlaceholder);
  const loginButton = getByText(strings.login.loginButton);

  fireEvent.changeText(emailTextField, '');
  fireEvent.press(loginButton);

  jest.useFakeTimers();
  setTimeout(() => {
    expect(Snackbar.show).toHaveBeenCalledWith({
      text: strings.login.enterEmail,
      duration: 2000,
      backgroundColor: colors.error,
      textColor: colors.altTitle,
    });
  }, 3000);
  jest.runAllTimers();
});

it('Should show invalid email error message if email is not in the right format', () => {
  const {getByPlaceholderText, getByText} = render(
    <Provider store={store}>
      <Login />
    </Provider>,
  );
  const emailTextField = getByPlaceholderText(strings.login.emailPlaceholder);
  const passwordTextField = getByPlaceholderText(
    strings.login.passwordPlaceholder,
  );
  const loginButton = getByText(strings.login.loginButton);

  fireEvent.changeText(emailTextField, 'some email');
  fireEvent.changeText(passwordTextField, '');
  fireEvent.press(loginButton);

  jest.useFakeTimers();
  setTimeout(() => {
    expect(Snackbar.show).toHaveBeenCalledWith({
      text: strings.login.incorrectEmail,
      duration: 2000,
      backgroundColor: colors.error,
      textColor: colors.altTitle,
    });
  }, 3000);
  jest.runAllTimers();
});

it('Should show enter password error message if password is not entered', () => {
  const {getByPlaceholderText, getByText} = render(
    <Provider store={store}>
      <Login />
    </Provider>,
  );
  const emailTextField = getByPlaceholderText(strings.login.emailPlaceholder);
  const passwordTextField = getByPlaceholderText(
    strings.login.passwordPlaceholder,
  );
  const loginButton = getByText(strings.login.loginButton);

  fireEvent.changeText(emailTextField, 'nikhil@gmail.com');
  fireEvent.changeText(passwordTextField, '');
  fireEvent.press(loginButton);

  jest.useFakeTimers();
  setTimeout(() => {
    expect(Snackbar.show).toHaveBeenCalledWith({
      text: strings.login.enterPassword,
      duration: 2000,
      backgroundColor: colors.error,
      textColor: colors.altTitle,
    });
  }, 3000);
  jest.runAllTimers();
});

it('If validation is success then navigate to home screen', async () => {
  const {getByPlaceholderText, getByText} = render(<App />);
  const emailTextField = getByPlaceholderText(strings.login.emailPlaceholder);
  const passwordTextField = getByPlaceholderText(
    strings.login.passwordPlaceholder,
  );
  const loginButton = getByText(strings.login.loginButton);

  fireEvent.changeText(emailTextField, 'nikhil@gmail.com');
  fireEvent.changeText(passwordTextField, '123456');
  fireEvent.press(loginButton);

  jest.useFakeTimers();
  setTimeout(() => {
    const newHeader = getByText('Logout');
    expect(newHeader).toBeTruthy();
  }, 3000);
  jest.runAllTimers();
});
