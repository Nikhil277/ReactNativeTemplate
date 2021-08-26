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

const mockStore = configureMockStore();
const store = mockStore({
  startup: {complete: false},
});

jest.mock('react-native-snackbar', () => ({
  LENGTH_LONG: 3000,
  show: jest.fn(),
}));

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <Login />
    </Provider>,
  );
});

it('Should show enter email error message if email is not entered or empty', () => {
  const store = mockStore({
    startup: {complete: false},
  });
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
