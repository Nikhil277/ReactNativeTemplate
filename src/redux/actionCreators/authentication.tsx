export const loginUser = (userData: {email: string; password: string}) => ({
  type: 'LOGIN',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'LOGOUT',
});
