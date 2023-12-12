import {combineReducers} from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import ThemeSlice from './ThemeSlice';
const Slices = combineReducers({
  Auth: AuthSlice.reducer,
  Theme: ThemeSlice.reducer,
});
export default Slices;
