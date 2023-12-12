import {createSlice} from '@reduxjs/toolkit';
const ThemeSlice = createSlice({
  name: 'Theme',
  initialState: {theme: 'light', mode: '', fontSize: 2},
  reducers: {
    changeTheme: (state: any, action: any) => {
      state.theme = action.payload;
    },
    changeFont: (state: any, action: any) => {
      state.fontSize = action.payload;
    },
  },
});

export default ThemeSlice;
export const {changeTheme, changeFont}: any = ThemeSlice.actions;
