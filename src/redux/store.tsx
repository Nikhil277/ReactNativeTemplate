import {configureStore} from '@reduxjs/toolkit';
import authenticationReducer from './reducers/authenticationReducer';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
