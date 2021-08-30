export const initialAuthenticationState = {
  isLoggedIn: false,
  isLoading: true,
  userData: undefined,
};

export const authenticationReducer = (
  state = initialAuthenticationState,
  action: any,
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        userData: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        userData: undefined,
      };
    default:
      return state;
  }
};
