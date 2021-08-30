import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';

// Since we are using reduxjs toolkit, thunk is added as default middleware.
export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}
