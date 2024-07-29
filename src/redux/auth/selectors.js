export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selecIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsValid = (state) => state.auth.isValid;
