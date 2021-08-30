import {combineReducers} from 'redux';
import {authenticationReducer} from './authenticationReducer';
import {foodListingReducer} from './foodListDetailReducer';

export const rootReducer = combineReducers({
  authenticationReducer,
  foodListingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
