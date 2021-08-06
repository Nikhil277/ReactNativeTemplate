import {createSlice} from '@reduxjs/toolkit';

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

export const authenticationSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    isLoading: true,
  },
  reducers: {
    login: state => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = authenticationSlice.actions;

export default authenticationSlice.reducer;
