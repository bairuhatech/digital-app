import {createSlice} from '@reduxjs/toolkit';
const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    user: {},
    guest: false,
    auth: false,
    dealer: {},
  },
  reducers: {
    login: (state, action) => {
      (state.user = action.payload), (state.auth = true), (state.guest = false);
    },
    logout: (state, action) => {
      (state.user = {}), (state.auth = false);
    },
    update: (state, action) => {
      state.user = {name: action.payload};
    },
    guest: (state, action) => {
      state.guest = true;
    },
    dealer: (state, action) => {
      state.dealer = true;
    },
  },
});

export default AuthSlice;
export const {login, logout, update, guest, dealer} = AuthSlice.actions;
