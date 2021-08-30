/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './src/navigation';
import configureAppStore from './src/redux/store';

const App = () => {
  return (
    <Provider store={configureAppStore()}>
      <AppContainer />
    </Provider>
  );
};

export default App;
