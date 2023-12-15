import { createSlice } from "@reduxjs/toolkit";
const AuthSlice:any = createSlice({
  name: "Auth",
  initialState: {
    user: {},
    auth: false,
    isFirstTime: true,
  },
  reducers: {
    changeFisrtTime: (state, action:any) => {
      state.isFirstTime = false;
    },
    login: (state, action) => {
      (state.user = action.payload), (state.auth = true);
    },
    logout: (state, action) => {
      (state.user = {}), (state.auth = false);
    },
    update: (state, action) => {
      state.user = { name: action.payload };
    },
  },
});

export default AuthSlice;
export const { login, logout, update ,changeFisrtTime} = AuthSlice.actions;
