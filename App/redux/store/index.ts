import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slices from '../slice';

const persistConfig = {
  key: 'redux',
  storage: AsyncStorage,
  whitelist: ['Auth', 'Theme'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, Slices);

const middleWareConfigs: any = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

const Store: any = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(middleWareConfigs).concat(),
});
const PersistedStore = persistStore(Store);
export {Store, PersistedStore};
